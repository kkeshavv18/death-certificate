const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  // allInput = form.querySelectorAll(".first input");
  required = form.querySelectorAll(".first .required"),
  currentDate = form.querySelector(".current-date");
// console.log(required);

currentDate.valueAsDate = new Date();

nextBtn.addEventListener("click", () => {
  required.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));
