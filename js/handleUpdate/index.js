const setValueInput = (el, value) => {
  el.value = value;
};
const removeNv = function (index) {
  listNv.splice(index, 1);
  localStorage.setItem("LIST-NV", JSON.stringify(listNv));
  rederListNv(listNv);
};
let updateIndex;
const updateNv = function (index) {
  updateIndex = index;
  const nhanvien = listNv[updateIndex];
  modalHead.innerText = "Cập nhật nhân viên";
  modalUpdate.style.display = "block";
  modalAdd.style.display = "none";
  myModal.show();
  setValueInput(userName, nhanvien.userName);
  setValueInput(fullName, nhanvien.fullName);
  setValueInput(email, nhanvien.email);
  setValueInput(password, nhanvien.password);
  setValueInput(workingDays, nhanvien.workingDays);
  setValueInput(salary, nhanvien.salary);
  setValueInput(workingHours, nhanvien.workingHours);
  setValueInput(position, nhanvien.level);
};
modalUpdate.onclick = function () {
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
    !setErrorLetters(userName, 4, 6) &
      !setErrorLength(password, 6, 10) &
      isFullText(fullName) &
      isPasswordError(password) &
      isEmail(email) &
      isNumber(salary, 1000000, 20000000) &
      isNumber(workingHours, 80, 200);
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
    myModal.hide();
    listNv[updateIndex] = {
      ...staffUpdate,
      totalSalary: staffUpdate.totalSalary,
      typeStaff: staffUpdate.typeStaff,
      position: staffUpdate.position,
    };
    localStorage.setItem("LIST-NV", JSON.stringify(listNv));
    rederListNv(listNv);
  }
};
