const prompt = require('prompt-sync')();

const counter = prompt("How long do you want the counter to run for? ");

let startCounter = 0;

const logCount = () => {
    console.log(startCounter);
    startCounter++;
}

const startTimer = () => {
    for (let i = 0; i <= counter; i++) {
        if (i == 0) {
            setTimeout(logCount, 1000);
            continue;
        }

        setTimeout(logCount, 1000 * (i + 1));

    }
}

startTimer();