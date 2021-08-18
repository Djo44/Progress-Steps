const progress = document.getElementById("progress");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

btnNext.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circle.length) {
    currentActive = circle.length;
  }
  update();
  console.log(currentActive);
});

btnPrev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
  console.log(currentActive);
});

const update = () => {
  circle.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progress.style.width = ((currentActive - 1) / (circle.length - 1)) * 99 + "%";

  if (currentActive === 1) {
    btnPrev.disabled = true;
  } else if (currentActive === circle.length) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
};
