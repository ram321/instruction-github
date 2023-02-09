let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkbox);

checkbox();
function checkbox() {
  const triggerBottm = (window.innerHeight / 5) * 4;
  console.log(triggerBottm);
  boxes.forEach((box) => {
    let boxPosition = box.getBoundingClientRect().top;
    if (triggerBottm > boxPosition) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
