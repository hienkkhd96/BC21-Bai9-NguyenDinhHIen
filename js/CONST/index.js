const formAdd = document.getElementById("add-form");
const userName = document.getElementById("tknv");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const workingDays = document.getElementById("datework");
const salary = document.getElementById("luongCB");
const position = document.getElementById("chucvu");
const workingHours = document.getElementById("gioLam");
const notifications = document.querySelectorAll(".sp-thongbao");
const addUserBtn = document.getElementById("btnThemNV");
const updateUserBtn = document.getElementById("btnCapNhat");
const elRender = document.getElementById("tableDanhSach");
const btnCloseModal = document.getElementById("btnDong");
const addNvBtn = document.querySelector(".card-header #btnThem");

const searchForm = document.getElementById("searchForm");
const searchValue = document.getElementById("searchName");
const searchBtn = document.getElementById("btnTimNV");

const modalHead = document.querySelector("#myModal #header-title");
const modalAdd = document.querySelector("#myModal #btnThemNV");
const modalUpdate = document.querySelector("#myModal #btnCapNhat");
let listNv = JSON.parse(localStorage.getItem("LIST-NV")) || [];
let myModalElement = document.getElementById("myModal");
const myModal = new bootstrap.Modal(document.getElementById("myModal"), {
  keyboard: false,
});
$("#myModal").on("show.bs.modal", function () {
  notifications.forEach((x) => {
    x.style.display = "none";
    x.innerText = "";
  });
});
function formatDate(dateString) {
  var subDateStr = dateString.split("-");
  return (str = subDateStr[2] + "/" + subDateStr[1] + "/" + subDateStr[0]);
}
function getParameterByName(name, url = window.location.href) {
  let url_string = `${url}`;
  let c = new URL(url_string).searchParams.get(`${name}`);
  return c;
}
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
