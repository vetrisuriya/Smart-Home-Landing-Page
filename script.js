const mobileNav = document.getElementById("mobile-nav");
const closeBtn = document.getElementById("mobile-close-btn");
const openBtn = document.getElementById("mobile-open-btn");

openBtn.addEventListener("click", function() {
    mobileNav.classList.toggle("active");
})
closeBtn.addEventListener("click", function() {
    mobileNav.classList.toggle("active");
})