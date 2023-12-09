const fs = require('fs');

const sampleInput = fs.readFileSync('sample', 'utf-8');
const gameInput = fs.readFileSync('input', 'utf-8');

const isDigit = char => /[0-9]/.test(char)
const isSymbol = char => char !== '.' && !isDigit(char)

console.time('test');
schematicSum(sampleInput)
console.timeEnd('test')
console.time('main')
schematicSum(gameInput)
console.timeEnd('main');


function schematicSum(schematic) {
    const rows = schematic.split('\n')

    let schematicSum = 0;
    let gearRatioSum = 0;
    let gears = new Map()

    const max_y = rows.length

    for (let i = 0; i < max_y; i++) {
        const row = rows[i].trim()
        const max_x = row.length
        
        let gearParts = new Set()
        let currentPart = 0;
        let adjacent = false; 

        for (let j = 0; j <= max_x; j++) {
            const c = row[j]
          
            if (j < max_x && isDigit(c)) {
                currentPart = currentPart * 10 + parseInt(c,10)

                for (let m = i - 1; m <= i + 1; m++) {
                    for (let n = j - 1; n <= j + 1; n++) {
                        if (m < 0 || m >= max_y) { continue }
                        if (n < 0 || n >= max_x) { continue }
                        if (m == i && n == j) { continue }

                        const ch = rows[m][n];
                        if (isSymbol(ch)) {
                            adjacent = true;
                        }

                        if (ch === '*') {
                            gearParts.add(`${m},${n}`)
                        }
                    }
                }
            } else if (currentPart > 0) { 
                for (const gearPart of gearParts) {
                    if (!gears.has(gearPart)) {
                        gears.set(gearPart, [])
                    }
                    gears.get(gearPart).push(currentPart)
                }
                if (adjacent) {
                    schematicSum += parseInt(currentPart);
                }
                adjacent = false
                currentPart = 0;
                gearParts.clear()
            }
        }
    }

    console.log('schematic sum: ', schematicSum);

    for( const [key, value] of gears.entries()) {
        if (value.length === 2) {
            gearRatioSum += value[0] * value[1];            
        }
    }

    console.log('gear ratio sum: ', gearRatioSum)


}
