const searchInput = document.getElementById("search");
const items = Array.from(document.querySelectorAll("#list li"));
const resultBox = document.getElementById("selected"); 
let currentIndex = -1;

search.addEventListener("input", function () {
  let value = search.value.toLowerCase();

  items.forEach(function (item) {
    let text = item.textContent.toLowerCase();
    item.style.display = text.includes(value) ? "block" : "none";
  });
});


searchInput.addEventListener("keydown", (e) => {

  if (e.key === "ArrowRight") {
    currentIndex++;
    if (currentIndex >= items.length) currentIndex = 0;
    updateActive();
  }

  if (e.key === "ArrowLeft") {
    currentIndex--;
    if (currentIndex < 0) currentIndex = items.length - 1;
    updateActive();
  }

  if (e.key === "Enter") {
    if (currentIndex >= 0) {
      resultBox.textContent = items[currentIndex].textContent;
      currentIndex = -1;
      removeActive();
      searchInput.value = "";
    }
  }
});


function updateActive() {
  removeActive();
  items[currentIndex].classList.add("active");
}

function removeActive() {
  items.forEach(item => item.classList.remove("active"));
}
