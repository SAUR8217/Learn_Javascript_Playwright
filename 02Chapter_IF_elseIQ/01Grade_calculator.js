/*✅ Grade Calculator:
Write a program that calculates and displays the letter grade for a given 
numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/

let Score = 100;

if (Score >= 90 && Score <= 100) {
    console.log("A");
} else if (Score >= 80 && Score <= 89) {
    console.log("B");
} else if (Score >= 70 && Score <= 79) {
    console.log("C");
} else if (Score >= 60 && Score <= 69) {
    console.log("C");
} else if (Score >= 0 && Score <= 59) {
    console.log("F");
} else {
    console.log("Invalid value , Please give value in range of 0 - 100");
}