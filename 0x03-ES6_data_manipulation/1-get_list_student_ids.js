const getListStudentIds = (studentArray) => {
  if (!Array.isArray(studentArray)) {
    return [];
  }
  return studentArray.map((studentId) => studentId.id);
};


export default getListStudentIds;
