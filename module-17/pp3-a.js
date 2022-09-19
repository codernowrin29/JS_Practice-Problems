//Write a program that will print the largest number among three numbers by using if-else.

var num1 = 13, num2 = 79, num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
}

else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}

else {
    console.log(num3);
}