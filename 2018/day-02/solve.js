const checksum = (input = []) => {
	let charIndex = {
		2: 0,
		3: 0
	};
	for(let i = 0; i < input.length; i++) {
		let twoChar = false;
		let threeChar = false;
		let charMap = {};
		for(let c = 0; c < input[i].length; c++) {
			let char = input[i][c];
			if (charMap[char]) {
				charMap[char] += 1;
			} else {
				charMap[char] = 1;
			}
		}

		for(char in charMap) {
			if (charMap[char] === 2 && !twoChar) {
				charIndex[2]++;
				twoChar = true;
			}
			if (charMap[char] === 3 && !threeChar) {
				charIndex[3]++;
				threeChar = true;
			}
		};
	}

	return charIndex[2] * charIndex[3];
}

const longestCommon = (input = []) => {
	let maxSim = '';
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			let similar = findSimilar(input[i], input[j]);
			maxSim = (similar.length > maxSim.length) ? similar : maxSim;
		}
	}
	return maxSim;
}

const findSimilar = (word1, word2) => {
	let similar = "";
	for(let i = 0; i < word1.length; i++) {
		if (word1[i] == word2[i]) {
			similar += word1[i];
		}
	}
	return similar;
}

const fs = require('fs');

fs.readFile('./input.txt', (err, data) => {
	const input = data.toString('utf8').split(/\r\n|\n/)

	console.log('Solving 2018 Day 02');
	console.time('Q1');
	console.log(`Checksum ${checksum(input)}`);
	console.log(`Common letters between the two correct box Ids are: ${longestCommon(input)}`)
	console.timeEnd('Q1');
});