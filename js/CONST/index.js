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

const addNvBtn = document.querySelector(".card-header #btnThem");
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
