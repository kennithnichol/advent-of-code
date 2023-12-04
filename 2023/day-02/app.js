const fs = require('fs');

const test = fs.readFileSync('test', 'utf-8')
const input = fs.readFileSync('input', 'utf-8')

console.log('game tests'); possibleGames(test);
console.log('game input'); possibleGames(input);


function possibleGames(input) {
    const maxRed = 12;
    const maxGreen = 13;
    const maxBlue = 14;
    
    const games = input.split('\n');

    let sum = 0;
    let powerSum = 0;

    for(game of games) {
        let minRed = 0;
        let minBlue = 0;
        let minGreen = 0;
        
        const id = getGameId(game);
        let sets = game.split(':')[1].trim().split(';');
        let possible = true;
        for (set of sets) {
            let blocks = set.split(',');
            for (block of blocks) {
                let color = block.trim().split(' ')
                let blockColor = color[1].trim().toLowerCase();
                let blockCount = parseInt(color[0])
                if (blockColor === 'red') {
                    if (blockCount > maxRed) {
                        possible = false;
                    }
                    if (blockCount > minRed) {
                        minRed = color[0]
                    }
                }
                if (blockColor === 'green') {
                    if (blockCount > maxGreen) {
                        possible = false;
                    }
                    if (blockCount > minGreen) {
                        minGreen = blockCount
                    }
                }
                if (blockColor === 'blue') {
                    if (blockCount > maxBlue) {
                        possible = false;
                    }
                    if (blockCount > minBlue) {
                        minBlue = blockCount
                    }
                }
            }
        }
        if (possible) {
            sum += parseInt(id);
        }
        if (minBlue > 0 && minRed > 0 && minGreen > 0) {
            powerSum += parseInt(minBlue * minRed * minGreen)
        }
    }

    console.log('Sum of possible game IDs: ', sum);
    console.log('Sum of the power of these sets: ', powerSum)
}

function getGameId(input) {
    return input.split(':')[0].split(' ')[1];
}
