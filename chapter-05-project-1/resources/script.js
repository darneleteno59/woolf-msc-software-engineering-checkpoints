const navbarBurgerMenuIcon = document.querySelector(".navbar-burger-menu-icon");
navbarBurgerMenuIcon.addEventListener("click", (e) => {
  const iconType = e.target;

  const menuBarsIcon = document.querySelector(".navbar-burger-menu-bars");
  const menuCloseIcon = document.querySelector(".navbar-burger-menu-close");
  const navbarBurgerList = document.querySelector(".navbar-burger-list");

  if (iconType.classList.contains("navbar-burger-menu-bars-icon")) {
    // Masquer l'icon du menu burger
    menuBarsIcon.classList.remove("exposed");
    menuBarsIcon.classList.add("hide");

    // Exposer le menu burger
    navbarBurgerList.classList.remove("hide");
    navbarBurgerList.classList.add("exposed");

    // Exposer l'icon close du menu burger
    menuCloseIcon.classList.remove("hide");
    menuCloseIcon.classList.add("exposed");
  } else {
    // Exposer l'icon du menu burger
    menuBarsIcon.classList.remove("hide");
    menuBarsIcon.classList.add("exposed");

    // Masquer le menu burger
    navbarBurgerList.classList.remove("exposed");
    navbarBurgerList.classList.add("hide");

    // Masquer l'icon close du menu burger
    menuCloseIcon.classList.remove("exposed");
    menuCloseIcon.classList.add("hide");
  }
});
