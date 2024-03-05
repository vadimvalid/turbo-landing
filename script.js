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

function toggleFilters() {
  const filterBtn = document.querySelector(".main__aside__button");

  filterBtn.addEventListener("click", () => {
    const aside = document.querySelector(".main__aside");
    if (aside.classList.contains("main__aside--active")) {
      aside.classList.remove("main__aside--active");
    } else {
      aside.classList.add("main__aside--active");
    }
  });
}

function thumbHover(imageNumber) {
  //Find the slider element
  const sliderElement = document.getElementById("pgallery");
  //Slide to he right image
  swiffyslider.slideTo(sliderElement, imageNumber);
}

toggleMenu();
toggleFilters();
