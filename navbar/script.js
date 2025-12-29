const links = document.querySelectorAll(".navbar a");
const menus = document.querySelectorAll(".menu_bar1");

links.forEach((link, index) => {

  const menu = menus[index];

  // link par mouse aaya → menu show
  link.addEventListener("mouseenter", () => {
    menu.style.display = "block";
  });

  // link se mouse gaya → thoda wait karo
  link.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!menu.matches(":hover")) {
        menu.style.display = "none";
      }
    }, 200);
  });

  // menu par mouse aaya → menu open rahe
  menu.addEventListener("mouseenter", () => {
    menu.style.display = "block";
  });

  // menu se mouse gaya → menu close
  menu.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });

});
