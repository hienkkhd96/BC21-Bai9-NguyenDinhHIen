function removeAccents(str) {
  let AccentsMap = [
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
  for (let i = 0; i < AccentsMap.length; i++) {
    let re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
    let char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}
searchForm.onsubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

searchBtn.onclick = () => {
  filter = removeAccents(searchValue.value.toLowerCase());
  let url = new URL(`${window.location.href}`);
  let search_params = url.searchParams;
  search_params.set("q", filter);
  url.search = search_params.toString();
  let new_url = url.toString();
  window.location.href = new_url;
};
