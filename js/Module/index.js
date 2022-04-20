// Khởi tạo đối tượng nhân viên
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
  // Hàm lấy tổng lương
  get totalSalary() {
    return this.calcTotalSalary();
  }
  // Hàm lấy loại nhân viên
  get typeStaff() {
    return this.calcTypeStaff();
  }
  // Hàm lấy chức vụ của nhân viên
  get position() {
    return this.calcPosition();
  }
  //  Tính toán chức vụ (Do để value của input không để có dấu)
  calcPosition() {
    if (this.level === "1") {
      return "Sếp";
    } else if (this.level === "2") {
      return "Trưởng Phòng";
    } else if (this.level === "3") return "Nhân viên";
  }
  // Tính toán tổng lương
  calcTotalSalary() {
    if (this.level === "1") {
      return this.salary * 3;
    } else if (this.level === "2") {
      return this.salary * 2;
    } else if (this.level === "3") {
      return this.salary * 1;
    } else return false;
  }
  // Tính toán loại nhân viên
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
