const navbarBurger = document.querySelector(".navbar-burger");

navbarBurger.addEventListener("click", () => {
  const navbarBurgerMenu = document.querySelector(
    ".navbar-burger .navbar-menu",
  );
  const navbarBurgerShape = document.querySelector(".navbar-burger-shape");
  const navbarBurgerClose = document.querySelector(".navbar-burger-close img");

  if (navbarBurgerMenu.classList.contains("closeMenu")) {
    navbarBurgerMenu.classList.remove("closeMenu");
    navbarBurgerMenu.classList.add("openMenu");

    navbarBurgerShape.classList.remove("openMenu");
    navbarBurgerShape.classList.add("closeMenu");

    navbarBurgerClose.classList.remove("closeMenu");
    navbarBurgerClose.classList.add("openMenu");
  } else {
    navbarBurgerMenu.classList.add("closeMenu");
    navbarBurgerMenu.classList.remove("openMenu");

    navbarBurgerShape.classList.remove("closeMenu");
    navbarBurgerShape.classList.add("openMenu");

    navbarBurgerClose.classList.remove("openMenu");
    navbarBurgerClose.classList.add("openMenu");
  }
});
