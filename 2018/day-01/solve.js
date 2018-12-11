const fs = require('fs');

const findCalibrationFrequency = input =>
    input.reduce((acc, frequency) => acc + frequency, 0);

const findFirstRepeatedFrequency = input => {
    const frequencies = { 0: true };
    const stack = [0];
    const freqQueue = [];

    while (!freqQueue.length) {
        input.forEach(frequencyShift => {
            let currentFrequency = stack.pop() + frequencyShift;
            stack.push(currentFrequency);
            if (frequencies[currentFrequency]) {
                freqQueue.push(currentFrequency);
            } else {
                frequencies[currentFrequency] = true;
            }
        });
    }
    return freqQueue[0];
};


fs.readFile('./input.txt', (err, data) => {
    const input = data.toString('utf8').split(/\r\n|\n/).map(Number);

    console.time('Q1');
    console.log(`Calibration frequency ${findCalibrationFrequency(input)}`);
    console.timeEnd('Q1');

    console.time('Q2');
    console.log(`First repeated frequency ${findFirstRepeatedFrequency(input)}`);
    console.timeEnd('Q2');
});