const renderListNv = (arr) => {
  const searchParam = getParameterByName("q");
  filterNv = [...arr];
  if (!!searchParam) {
    filterNv = filterNv.filter((x) => {
      return (
        removeAccents(x.userName.toLowerCase()).includes(
          searchParam.toLowerCase()
        ) ||
        removeAccents(x.fullName.toLowerCase()).includes(
          searchParam.toLowerCase()
        ) ||
        removeAccents(x.email.toLowerCase()).includes(
          searchParam.toLowerCase()
        ) ||
        removeAccents(x.position.toLowerCase()).includes(
          searchParam.toLowerCase()
        ) ||
        removeAccents(x.typeStaff.toLowerCase()).includes(
          searchParam.toLowerCase()
        )
      );
    });
    searchValue.value = searchParam;
  }
  const html = filterNv
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
  <td class="d-flex flex-column"><button class="btn btn-secondary btn-remove" onclick="removeNv('${
    x.userName
  }')">Xóa</button><button class="btn btn-primary mt-2 btn-update" onclick="updateNv('${
        x.userName
      }')">Sửa</button></td>
</tr>`;
    })
    .join();
  elRender.innerHTML = html;
};
if (listNv.length > 0) {
  renderListNv(listNv);
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
    !setErrorLetters(userName, 4, 6) &&
    !isExists(userName, listNv, "userName", "Username đã tồn tại") &&
    isFullText(fullName) & !setErrorLength(password, 6, 10) &&
    isPasswordError(password) & isEmail(email) &&
    !isExists(email, listNv, "email", "Email đã tồn tại") &
      isNumber(salary, 1000000, 20000000) &
      isNumber(workingHours, 80, 200);

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
    btnCloseModal.click();
    localStorage.setItem("LIST-NV", JSON.stringify(listNv));
    renderListNv(listNv);
  }
};
$("#myModal").on("show.bs.modal", function () {
  notifications.forEach((x) => {
    x.style.display = "none";
    x.innerText = "";
  });
});
