//Write a program to calculate the average marks of these five subjects.

var avg, math = 75.25, bio = 65, chem = 80, phy = 35.45, ban = 99.50;

avg = (math + bio + chem + phy + ban) / 5;

avg = avg.toFixed(2);
avg = parseFloat(avg);
console.log(avg);