function formatDate(dateString) {
  var subDateStr = dateString.split("-");
  return (str = subDateStr[2] + "/" + subDateStr[1] + "/" + subDateStr[0]);
}
const rederListNv = (arr) => {
  const html = arr
    .map((x, index) => {
      return `<tr key=${index} class="nhanvien">
  <td class="nowrap">
    <span class="mr-1">${x.userName}</span>
  </td>
  <td>${x.fullName}</td>
  <td>${x.email}</td>
  <td>${formatDate(x.workingDays)}</td>
  <td>${x.position}</td>
  <td>${formatter.format(x.totalSalary)}</td>
  <td>${x.typeStaff}</td>
  <td class="d-flex flex-column"><button class="btn btn-secondary btn-remove" onclick="removeNv(${index})">Xóa</button><button class="btn btn-primary mt-2 btn-update" onclick="updateNv(${index})">Sửa</button></td>
</tr>`;
    })
    .join();
  elRender.innerHTML = html;
};
if (listNv.length > 0) {
  rederListNv(listNv);
}
addNvBtn.onclick = () => {
  setValueInput(userName, "");
  setValueInput(fullName, "");
  setValueInput(email, "");
  setValueInput(password, "");
  setValueInput(workingDays, "");
  setValueInput(salary, "");
  setValueInput(workingHours, "");
  setValueInput(position, "");
  modalHead.innerText = "Thêm nhân viên";
  modalAdd.style.display = "block";
  modalUpdate.style.display = "none";
  userName.removeAttribute("disabled");
};
addUserBtn.onclick = () => {
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
      isNumber(workingHours, 80, 200) &
      !isExists(userName, listNv, "userName", "Username đã tồn tại") &
      !isExists(email, listNv, "email", "Email đã tồn tại");

  if (!!isValid) {
    const newStaff = new Staff(
      userName.value,
      fullName.value,
      email.value,
      password.value,
      workingDays.value,
      salary.value * 1,
      position.value,
      workingHours.value * 1
    );
    listNv.push({
      ...newStaff,
      totalSalary: newStaff.totalSalary,
      typeStaff: newStaff.typeStaff,
      position: newStaff.position,
    });

    localStorage.setItem("LIST-NV", JSON.stringify(listNv));
    rederListNv(listNv);
  }
};
$("#myModal").on("show.bs.modal", function () {
  notifications.forEach((x) => {
    x.style.display = "none";
    x.innerText = "";
  });
});
