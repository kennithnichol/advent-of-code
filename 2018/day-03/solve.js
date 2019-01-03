const part1 = (input = []) => {
	input.forEach(line => {
		const lineData = parseLine(line);
	});
}

const part2 = (input = []) => {
	return 'passed';
}

const parseLine = (line = "") => {
	const materialRegExp = /#(\d+) @ (\d+),(\d+): (\d+)x(\d)+/;
	const data = materialRegExp.exec(line);
	return {
		id: Number.parseInt(data[1]),
		left: Number.parseInt(data[2]),
		top: Number.parseInt(data[3]),
		width: Number.parseInt(data[4]),
		height: Number.parseInt(data[5])
	};
}

const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
	if (err) {
		throw err;
	}
	const input = data.toString('utf8').split(/\r\n|\n/);
	console.log('Solving 2018 Day 03');
	console.time('Part1');
	console.log(`part 1: ${part1(input)}`);
	console.timeEnd('Part1');
	console.time('Part2');
	console.log(`part 2: ${part2(input)}`);
	console.timeEnd('Part2');
});