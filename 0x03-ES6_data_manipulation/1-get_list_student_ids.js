const getListStudentIds = (studentArray) => {
  if (!Array.isArray(studentArray)) {
    return [];
  }
  return myArray.map((studentId) => studentId.id);
};


export default getListStudentIds;
