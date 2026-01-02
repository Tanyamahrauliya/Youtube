let input = document.getElementById("textInput");
let preview = document.getElementById("preview");

input.addEventListener("input", function () {
  preview.innerText = input.value;
});
