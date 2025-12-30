const dropBtn = document.getElementById("dropBtn");
const dropMenu = document.getElementById("dropMenu");


dropBtn.addEventListener("click", function () {
  dropMenu.classList.toggle("show");
  dropBtn.classList.toggle("active");
});
