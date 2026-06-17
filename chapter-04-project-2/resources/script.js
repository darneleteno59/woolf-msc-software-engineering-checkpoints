const navbarBurgerMenuIcon = document.querySelector(".navbar-burger-menu-icon");
navbarBurgerMenuIcon.addEventListener("click", () => {
  const navbarBurgerMenu = document.querySelector(".navbar-burger-menu");
  const navbarBurgerBarsIcon = document.querySelector(
    ".navbar-burger-menu-icon-bars",
  );
  const navbarBurgerCloseIcon = document.querySelector(
    ".navbar-burger-menu-icon-close",
  );

  if (navbarBurgerMenu.classList.contains("hidden")) {
    navbarBurgerMenu.classList.remove("hidden");
    navbarBurgerMenu.classList.add("exposed");

    navbarBurgerCloseIcon.classList.remove("hidden");
    navbarBurgerCloseIcon.classList.add("exposed");

    navbarBurgerBarsIcon.classList.add("hidden");
  } else {
    navbarBurgerMenu.classList.remove("exposed");
    navbarBurgerMenu.classList.add("hidden");

    navbarBurgerCloseIcon.classList.remove("exposed");
    navbarBurgerCloseIcon.classList.add("hidden");

    navbarBurgerBarsIcon.classList.remove("hidden");
    navbarBurgerBarsIcon.classList.add("exposed");
  }
});
