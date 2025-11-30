/*
38. Evaluate Grades Based on Total Marks and Final Exam
Write a JavaScript program to evaluate a student's total marks across various examinations and determine their grade. 
The grading criteria are as follows:

1. If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
2. If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total marks are 90 or greater. 
Assume that final examination means we pass 'true' as second parameter otherwise blank.
3. If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
 */

function grades(totalMarks, final_exam){
  if (final_exam) {
    return totalMarks >= 90;
  }
 return (totalMarks >= 89 && totalMarks <= 100);
}

console.log(grades("78", " "));
console.log(grades("89", "true "));
console.log(grades("99", "true"));