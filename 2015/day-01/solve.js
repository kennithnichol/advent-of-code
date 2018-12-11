const fs = require('fs');

// Where does Sanata end up?
// Santa starts on floor 0.
// ( == up one floor
// ) == down one floor

const q1 = fs.readFile('./santa.txt', (err, data) => {
	console.time('Q1 time');
	let floor = end(data.toString('utf8').split(''));
	console.timeEnd('Q1 time');
	console.log(`santa stops on floor ${floor}`);
});

const q2 = fs.readFile('./santa.txt', (err, data) => {
	console.time('Q2 time');
	let stepsToBasement = basement(data.toString('utf8').split(''));
	console.timeEnd('Q2 time');
	console.log(`basement after ${stepsToBasement} steps.`)
});

const upOrDown = (step) => {
	if ('(' === step) return 1;
	if (')' === step) return -1;
	return 0;
}

const end = (steps) => {
	let floor = 0;
	steps.map((step) => {
		floor += upOrDown(step);
	});
	return floor;
}

const basement = (steps) => {
	let floor = 0;
	let stepsTaken = 0;
	steps.some((step) => {
		floor += upOrDown(step);
		stepsTaken++;
		return floor < 0;
	});
	return stepsTaken;
}
