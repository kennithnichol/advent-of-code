const fs = require('fs');

fs.readFile('./data.txt', (err, data) => {
	const input = data.toString('utf8').split(/\r\n|\n/)

	console.log('Solving 2018 Day 03');
	console.time('Q1');

    console.timeEnd('Q1');
    console.time('Q1');

	console.timeEnd('Q1');
});