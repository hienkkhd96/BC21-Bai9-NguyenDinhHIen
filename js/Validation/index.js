// kiemtrarong func return true if not blank
// kiemtrarong func return false if blank
const kiemTraRong = function (els) {
  let isNotBlank = true;
  for (let i = 0; i < arguments.length; i++) {
    isNotBlank = isNotBlank && arguments[i].value.trim() !== "";
    const parent = arguments[i].parentNode;
    const notification = parent.parentNode.querySelector(".sp-thongbao");
    if (arguments[i].value.trim() === "") {
      notification.style.display = "block";
      notification.innerText = "Trường này không được để trống";
    } else {
      notification.style.display = "none";
      notification.innerText = "";
    }
  }
  return isNotBlank;
};
// setErrorLength func return true if length error
// setErrorLength func return false if length not error
const setErrorLength = function (el, minValue = 0, maxValue = 256) {
  let invalid = false;
  if (
    typeof minValue !== "number" ||
    typeof maxValue !== "number" ||
    minValue < 0
  ) {
    console.error(
      "Params are (el:DOM element,minValue:Number>=0,maxValue:Number)"
    );
    return (invalid = true);
  } else if (minValue > maxValue) {
    console.error("minValue must be less than maxValue");
    return (invalid = true);
  } else {
    const parent = el.parentNode;
    const notification = parent.parentNode.querySelector(".sp-thongbao");
    invalid =
      invalid ||
      el.value.trim().length < minValue ||
      el.value.trim().length > maxValue;
    if (!!invalid) {
      notification.style.display = "block";
      if (minValue != 0 && maxValue != 256) {
        notification.innerText = `Không được ít hơn ${minValue} và nhiều hơn ${maxValue} ký tự`;
      } else if (minValue != 0 && maxValue === 256) {
        notification.innerText = `Không được ít hơn ${minValue} ký tự`;
      } else {
        notification.innerText = `Không được nhiều hơn ${maxValue} ký tự`;
      }
    } else {
      notification.style.display = "none";
      notification.innerText = "";
    }
    return invalid;
  }
};
// setErrorLetters func return true if Letters error
// setErrorLetters func return false if Letters not error
const setErrorLetters = function (el, minValue = 0, maxValue = 256) {
  let invalid = false;
  //   Check params
  if (
    typeof minValue !== "number" ||
    typeof maxValue !== "number" ||
    minValue > maxValue
  ) {
    console.error("Params are (els:Aray,minValue:Number>1,)");
    return (invalid = true);
  } else {
    //   Get element notification
    const parent = el.parentNode;
    const notification = parent.parentNode.querySelector(".sp-thongbao");
    const value = el.value.trim();
    const arr = value.split("");
    // Create array unique
    let newArr = [];
    function unique(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    }
    newArr = unique(arr);
    // Check length Arr unique
    invalid = invalid || newArr.length < minValue || newArr.length > maxValue;
    if (!!invalid) {
      // Render Notification error
      notification.style.display = "block";
      if (minValue != 0 && maxValue != 256) {
        notification.innerText = `Không được ít hơn ${minValue} và nhiều hơn ${maxValue} ký số`;
      } else if (minValue != 0 && maxValue === 256) {
        notification.innerText = `Không được ít hơn ${minValue} ký số`;
      } else {
        notification.innerText = `Không được nhiều hơn ${maxValue} ký số`;
      }
    } else {
      notification.style.display = "none";
      notification.innerText = "";
    }
    return invalid;
  }
};
isFullText = function (el) {
  const parent = el.parentNode;
  const notification = parent.parentNode.querySelector(".sp-thongbao");
  const value = el.value.trim();
  const regexText = new RegExp(
    "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
  );
  if (!regexText.test(value)) {
    notification.style.display = "block";
    notification.innerText = "Trường này phải là chữ";
  } else {
    notification.style.display = "none";
    notification.innerText = "";
  }
  return regexText.test(value);
};
isPasswordError = function (el) {
  const parent = el.parentNode;
  const notification = parent.parentNode.querySelector(".sp-thongbao");
  const value = el.value.trim();
  const regexText = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])"
  );
  if (!regexText.test(value)) {
    notification.style.display = "block";
    notification.innerText =
      "Trường này phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
  } else {
    notification.style.display = "none";
    notification.innerText = "";
  }
  return regexText.test(value);
};
isEmail = function (el) {
  const parent = el.parentNode;
  const notification = parent.parentNode.querySelector(".sp-thongbao");
  const value = el.value.trim();
  const regexText = new RegExp(
    "^[a-z][a-z0-9_.]{3,256}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$"
  );
  if (!regexText.test(value)) {
    notification.style.display = "block";
    notification.innerText = "Email không hợp lệ";
  } else {
    notification.style.display = "none";
    notification.innerText = "";
  }
  return regexText.test(value);
};
isNumber = function (el, minValue, maxValue) {
  const parent = el.parentNode;
  const notification = parent.parentNode.querySelector(".sp-thongbao");
  const value = el.value.trim();
  if (isNaN(value * 1)) {
    notification.style.display = "block";
    notification.innerText = "Vui lòng nhập 1 số";
    return false;
  }
  let inValid = true;
  if (value * 1 < minValue && !maxValue) {
    notification.style.display = "block";
    notification.innerText = `Vui lòng nhập 1 số lớn hơn ${minValue}`;
    inValid = false;
  } else if (value * 1 > maxValue && !minValue) {
    notification.style.display = "block";
    notification.innerText = `Vui lòng nhập 1 số nhỏ hơn ${maxValue}`;
    inValid = false;
  } else if (value * 1 > maxValue || value * 1 < minValue) {
    notification.style.display = "block";
    notification.innerText = `Vui lòng nhập 1 số lớn hơn ${minValue} và nhỏ hơn ${maxValue}`;
    inValid = false;
  } else {
    notification.style.display = "none";
    notification.innerText = "";
  }
  return inValid;
};
let formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
