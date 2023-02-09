let toggles = document.querySelectorAll("button");
let faq = document.querySelectorAll(".faq");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
