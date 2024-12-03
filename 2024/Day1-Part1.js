/*

Advent of Code 2024
Day 1 solution
Alex Backfish

This solution is by no means the lowest time or space complexity
possible. However, the code is clear and easily readable.

If I were to plan a better solution for the purpose of
working within the realm of large datasets, I would optimize this
to start by simply just making it with Rust instead

*/

const fs = require('fs');

let data = fs.readFileSync(process.cwd() + '/inputs/day1.txt', 'utf8'); 
data = data.split("\n").map((s) => s.replace("\r", ''));

let list1 = [];
let list2 = [];
let count = 0;

for (let d of data) {
    let pair = d.split('   ');
    list1.push(pair[0]);
    list2.push(pair[1]);
}

list1.sort();
list2.sort();

for (let i in list1) {
    count += Math.abs(list1[i] - list2[i]);
}

console.log(count);