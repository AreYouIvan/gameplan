// Approach js with html
const menuBtn = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu-items");

menuBtn.addEventListener("touchstart", () => {
  console.log("holaa");
  menu.classList.toggle("show");
});
