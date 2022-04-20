// Hàm để set giá trị cho ô input
const setValueInput = (el, value) => {
  el.value = value;
};
// Xóa thông tin nhân viên
const removeNv = function (userName) {
  const index = listNv.findIndex((x) => x.userName === userName);
  listNv.splice(index, 1);
  localStorage.setItem("LIST-NV", JSON.stringify(listNv));
  renderListNv(listNv);
};
let updateIndex;
// Set value khi muốn update nhân viên
const updateNv = function (userNameNv) {
  const index = listNv.findIndex((x) => x.userName === userNameNv);
  updateIndex = index;
  const nhanvien = listNv[updateIndex];
  modalHead.innerText = "Cập nhật nhân viên";
  modalUpdate.style.display = "block";
  modalAdd.style.display = "none";
  myModal.show();
  userName.setAttribute("disabled", "disabled");
  setValueInput(userName, nhanvien.userName);
  setValueInput(fullName, nhanvien.fullName);
  setValueInput(email, nhanvien.email);
  setValueInput(password, nhanvien.password);
  setValueInput(workingDays, nhanvien.workingDays);
  setValueInput(salary, nhanvien.salary);
  setValueInput(workingHours, nhanvien.workingHours);
  setValueInput(position, nhanvien.level);
};
// Update thông tin nhân viên
modalUpdate.onclick = function () {
  // Kiểm tra trùng email với người khác
  const isExistsEmail = () => {
    const parent = email.parentNode;
    const notification = parent.parentNode.querySelector(".sp-thongbao");
    const value = email.value.trim();
    const matchIndex = listNv.findIndex((x) => {
      return x.email == value;
    });
    if (matchIndex >= 0) {
      if (matchIndex != updateIndex) {
        notification.style.display = "block";
        notification.innerText =
          "Email bạn nhập đã được đăng ký cho tài khoản khác";
        return true;
      }
    } else {
      notification.style.display = "none";
      notification.innerText = "";
      return false;
    }
  };
  // Validation khi update thông tin nhân viên
  const isValid =
    kiemTraRong(
      userName,
      fullName,
      email,
      password,
      workingDays,
      salary,
      position,
      workingHours
    ) &&
    !setErrorLetters(userName, 4, 6) &&
    !setErrorLength(password, 6, 10) &&
    isFullText(fullName) &&
    isPassword(password) &&
    isEmail(email) &&
    isNumber(salary, 1000000, 20000000) &&
    isNumber(workingHours, 80, 200) &&
    !isExistsEmail();
  // Tạo đối tượng nhân viên mới
  if (!!isValid) {
    const staffUpdate = new Staff(
      userName.value,
      fullName.value,
      email.value,
      password.value,
      workingDays.value,
      salary.value * 1,
      position.value,
      workingHours.value * 1
    );
    // Ẩn modal khi hoàn thành
    myModal.hide();
    listNv[updateIndex] = {
      ...staffUpdate,
      totalSalary: staffUpdate.totalSalary,
      typeStaff: staffUpdate.typeStaff,
      position: staffUpdate.position,
    };
    // Lưu thông tin vào localStorage
    localStorage.setItem("LIST-NV", JSON.stringify(listNv));
    renderListNv(listNv);
    myModal.hide();
  }
};
