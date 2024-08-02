const getStudentsByLocation = (students, city) => {
  const arrayObject = students.filter((obj) => obj.location === city);
    return arrayObject;
};

export default getStudentsByLocation;
