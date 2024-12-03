/*

Advent of Code 2024
Day 2 solution
Alex Backfish

This code looked perfectly fine before part 2, I promise.

Should I fix it???? Yes.
Will I fix it???? No.

*/

const fs = require('fs');

let safeReports = 0;
let data = fs.readFileSync(process.cwd() + '/inputs/day2.txt', 'utf8'); 
data = data.split("\n").map((s) => s.replace("\r", "")).map((r) => r.split(" ")).map((r) => r.map((n) => parseInt(n)));

function testProblemDampener(x) {
    for (let i = 0; i < x.length; i++) {
        if (isSafe(x.filter((_, j) => j !== i), true) == true) 
            return true;
    }
    return false;
}

function isSafe(x, dampened=false) {
    let increasing = x[1] > x[0];

    for (let i = 0; i < x.length - 1; i++) {
        let difference = x[i + 1] - x[i];
        let distance = Math.abs(difference);
        if (increasing && difference < 0) {
            if (!dampened) {
                if (testProblemDampener(x) == false)
                    return false;
            }
            else {
                return false;
            }
        }
        if (!increasing && difference > 0) {
            if (!dampened) {
                if (testProblemDampener(x) == false)
                    return false;
            }
            else {
                return false;
            }
        }
        if (distance > 3) {
            if (!dampened) {
                if (testProblemDampener(x) == false)
                    return false;
            }
            else {
                return false;
            }
        }
        if (distance < 1) {
            if (!dampened) {
                if (testProblemDampener(x) == false)
                    return false;
            }
            else {
                return false;
            }
        }
    }
    return true;
}

for (let i of data) {
    if (isSafe(i)) {
        safeReports++;
    }
}

console.log(safeReports);