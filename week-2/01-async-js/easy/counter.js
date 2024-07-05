startTime = 0;

const loggingTime = () => {
    console.log(startTime);
    startTime++;
}

const startTimer = () => {
    setInterval(loggingTime, 1000);
}

startTimer();