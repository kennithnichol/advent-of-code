const fs = require('fs');

const q1 = fs.readFile('./input.txt', (err, data) => {
    console.time('Q1 time');
    let finalFrequency = calibrate(data.toString('utf8').split(/\r\n|\n/).map(Number));
    console.timeEnd('Q1 time');
    console.log(`The final frequency is ${finalFrequency}`);
});

const q2 = fs.readFile('./input.txt', (err, data) => {
    console.time('Q2 time');
    let firstDuplicateFrequency = calibrateAndTrack(data.toString('utf8').split(/\r\n|\n/).map(Number));
    console.timeEnd('Q2 time');
    console.log(`The first duplicate frequency is ${firstDuplicateFrequency}`);
});

const calibrate = (frequencyShifts) => {
    let frequency = 0;
    frequencyShifts.forEach((shift) => frequency = frequency + shift);
    return frequency;
}

const calibrateAndTrack = (frequencyShifts) => {
    let duplicate = null;
    let frequency = 0;
    let frequencies = new Array();

    while(duplicate === null) {
        let i = 0;
        while(i < frequencyShifts.length && duplicate === null) {
            frequency += frequencyShifts[i];          
            if (frequencies.includes(frequency)) {
                duplicate = frequency;
            } else {
                frequencies.push(frequency);
            }
            i++;
        }
    }

    return duplicate;
}