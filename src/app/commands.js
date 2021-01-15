export const Commands = [

    {
        //Time request
        request: ["godzina", "czas"],
        answer() {
            const now = new Date();
            return now.toLocaleTimeString();
        }
    },

    {
        //Date request
        request: ["dzień"],
        answer() {
            const now = new Date();
            return now.toLocaleDateString();
        }
    },

    {
        //Greeting
        request: ["dzień dobry", "witaj"],
        answer() {
            return _internalResponse.call(this);
        }
    },

    {
        //Farewell
        request: ["do widzenia", "do zobaczenia", "na razie", "żegnaj", "nara"],
        answer() {
            return _internalResponse.call(this);
        }
    },

    {
        //Salutations
        request: ["cześć", "siema", "elo"],
        answer() {
            return _internalResponse.call(this);
        }
    }
]

function _internalResponse() {
    const respArray = this.request;
    return respArray[_randomInt(respArray.length)]
}

function _randomInt(upperB) {
    return Math.floor(Math.random() * upperB)
}
