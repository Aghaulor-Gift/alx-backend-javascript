export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((obj) => obj.location === city)
    .map((student) => {
      // This finds the grade object for the current student
      const gradeObj = newGrade.find((studentGrade) => studentGrade.studentId === student.id);

      // This creates a new student object with the updated grade
      const updatedStudent = {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };

      return updatedStudent;
    });
}
