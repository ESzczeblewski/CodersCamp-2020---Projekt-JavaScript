# Voice Assistant Kamil
**CodersCamp 2020 - Project JavaScript** 

## Table of contents
* [General info](#general-info)
* [Functionalities](#functionalities)
* [Technologies](#technologies)
* [Project scope](#project-scope)
* [Team](#team)
* [Live Preview](#live-preview)

## General info
Aim of the project was to build a responsive voice assistant, able to communicate with a user on a basic level.
Assitant can "hear" what is being said & "say" back adequate answers. Project is created with usage of Web Speech API.

***Assistant should be used on latest versions of Google Chrome browser (due to Web Speech API compatibility issues)***

Project was created during [CodersCamp Course](https://coderscamp.edu.pl) in Dec 2020 - Jan 2021 with JavaScript.

## Functionalitites:
1. graphical interface (changing to show current "state" of assistant: OFF / ON / LISTENING / TALKING)
2. speech to text (assistant logs into the console what had been said during his LISTENING state)
3. text to speech (assistant reads answer snippets from Wikipedia API in TALKING state)
4. wake-word (assistant starts LISTENING only after his name is called)
5. list of built-in general commands:
    - "dzień dobry", "witaj", "cześć", "siema", "elo"
    - "do widzenia", "do zobaczenia", "na razie", "żegnaj", "nara"
    - "godzina", "czas"
    - "dzień tygodnia", "dzień"
    - "inwokacja"
6. command-similarity reactions (assistant reacts to commands that are at least in 60% similar to the ones listed above)
7. integration with Wikipedia (assistant sends GET requests to MediaWiki Action API)
8. list of Wikipedia commands:
    - "co to jest",
    - "co to znaczy",
    - "co to",
    - "czym są",
    - "kto to jest",
    - "kto to",
    - "kim jest",
    - "jaki jest",
    - "jaka jest",
    - "jakie jest",
    - "jakie są"

## Technologies
### Project was created with:
* JavaScript
* SCSS
* CSS
* HTML

### API's & libraries used:
* [Web Speech API](https://github.com/axios/axios)
* [Wikipedia API: MediaWiki Action API](https://github.com/axios/axios)
* [axios](https://github.com/axios/axios)
* [string-similarity](https://www.npmjs.com/package/string-similarity)

## Project scope
- variables
- comparison operators
- logical operators
- conditions
- iteration and / or recursion
- loops
- arrays
- functions
- objects, attributes
- console
- return
- "===" vs "=="
- referencing DOM elements from JavaScript
- interaction with DOM
- changing HTML content with JavaScript
- changing CSS styles with JavaScript
- animations
- async/await & Promises
- callback functions
- integration with external REST API
- external libraries
- HTTP methods
- unit tests 

## Team
#### Development:
* [Paweł Borkowski](https://github.com/axios/axios)
* [Michał Ciborowski](https://github.com/axios/axios)
* [Ernest Szczeblewski](https://github.com/axios/axios)
* [Anna Żak](https://github.com/axios/axios)
* [Aleksandra Żochowska](https://github.com/axios/axios)

##### Tech Lead:
* [Ernest Szczeblewski](https://github.com/axios/axios)
##### Product Owner:
* [Anna Żak](https://github.com/axios/axios)
##### Development Manager:
* [Aleksandra Żochowska](https://github.com/axios/axios)

## Live Preview
To see the project, visit:

https://eszczeblewski.github.io/CodersCamp-2020---Projekt-JavaScript/