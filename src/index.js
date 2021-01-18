import Engine from './app/engine.js';

const engineSettings = {
    name: 'grażyna',
    lang: 'pl-PL',
}

const engine = new Engine(engineSettings);
engine.init();