class Staff {
  constructor(
    userName,
    fullName,
    email,
    password,
    workingDays,
    salary,
    position,
    workingHours
  ) {
    this.userName = userName;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.workingDays = workingDays;
    this.salary = salary;
    this.level = position;
    this.workingHours = workingHours;
  }
  get totalSalary() {
    return this.calcTotalSalary();
  }
  get typeStaff() {
    return this.calcTypeStaff();
  }
  get position() {
    return this.calcPosition();
  }
  calcPosition() {
    if (this.level === "1") {
      return "Sếp";
    } else if (this.level === "2") {
      return "Trưởng Phòng";
    } else if (this.level === "3") return "Nhân viên";
  }
  calcTotalSalary() {
    if (this.level === "1") {
      return this.salary * 3;
    } else if (this.level === "2") {
      return this.salary * 2;
    } else if (this.level === "3") {
      return this.salary * 1;
    } else return false;
  }
  calcTypeStaff() {
    if (this.workingHours >= 192) {
      return "Xuất sắc";
    } else if (this.workingHours >= 176) {
      return "Giỏi";
    } else if (this.workingHours >= 160) {
      return "Khá";
    } else {
      return "Trung bình";
    }
  }
}
