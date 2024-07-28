class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateName(name);
    this._length = this._validateLength(length);
    this._students = this._validateStudents(students);
  }

  // Validate name (String)
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  // Validate length (Number)
  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  // Validate students (Array of Strings)
  _validateStudents(students) {
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this._validateName(name);
  }

  // Getter and Setter for length
  get length() {
    return this._length;
  }

  set length(length) {
    this._length = this._validateLength(length);
  }

  // Getter and Setter for students
  get students() {
    return this._students;
  }

  set students(students) {
    this._students = this._validateStudents(students);
  }
}

export default HolbertonCourse;
