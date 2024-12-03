/*

Advent of Code 2024
Day 1 solution
Alex Backfish

I just realized each challenge has 2 parts.

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
    let num = list1[i];
    count += num * list2.filter(item => item === num).length;
}

console.log(count);