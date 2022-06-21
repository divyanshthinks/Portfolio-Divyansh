const hamburger = document.querySelector(".hamburger");
const navPop = document.querySelector(".navPop");

hamburger.addEventListener("click", () => {
   hamburger.classList.toggle("active");
   navPop.classList.toggle("active");  
} )

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
   hamburger.classList.remove("active");
   navPop.classList.remove("active");
}))