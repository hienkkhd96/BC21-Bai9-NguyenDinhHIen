function removeAccents(str) {
  var AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ",
    "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ",
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}
searchForm.onsubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
let filterList = [];
searchBtn.onclick = () => {
  const filter = removeAccents(searchValue.value.toLowerCase());
  filterList = listNv.filter((x) => {
    return (
      removeAccents(x.userName.toLowerCase()).includes(filter) ||
      removeAccents(x.fullName.toLowerCase()).includes(filter) ||
      removeAccents(x.position.toLowerCase()).includes(filter) ||
      removeAccents(x.typeStaff.toLowerCase()).includes(filter) ||
      removeAccents(x.email.toLowerCase()).includes(filter)
    );
  });
  renderListNv(filterList);
};
