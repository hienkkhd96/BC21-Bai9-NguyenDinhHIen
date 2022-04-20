searchForm.onsubmit = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
// Thực hiện push lên paramUrl chuỗi muốn tìm kiêm
searchBtn.onclick = () => {
  filter = removeAccents(searchValue.value.toLowerCase());
  let url = new URL(`${window.location.href}`);
  let search_params = url.searchParams;
  search_params.set("q", filter);
  url.search = search_params.toString();
  window.location.href = url.toString();
};
