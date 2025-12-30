    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const hidebtn = document.getElementById("hide");

    menuBtn.addEventListener("click", function () {
        sideMenu.classList.toggle("show");
    });

    hidebtn.addEventListener("click", () => {
        sideMenu.classList.toggle("show");
    });
