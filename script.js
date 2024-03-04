// Mobile menu
function toggleMenu() {
  const menuBtn = document.querySelector(".header__burger button");

  menuBtn.addEventListener("click", () => {
    const header = document.querySelector(".header");
    if (header.classList.contains("header--active")) {
      header.classList.remove("header--active");
    } else {
      header.classList.add("header--active");
    }
  });
}
toggleMenu();
