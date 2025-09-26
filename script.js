const showBtn = document.getElementById("show-btn");
const listsEl = document.getElementById("lists");
const socialToggle = document.getElementById("social-toggle");

console.log(showBtn, listsEl);

showBtn.addEventListener("click", () => {
  listsEl.classList.toggle("hide");
  socialToggle.classList.toggle("rotated");
});
