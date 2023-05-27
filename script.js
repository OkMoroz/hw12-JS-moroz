let offset = 0;
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const sliderImages = document.querySelectorAll(".img");

function showSlide(i) {
  sliderImages.forEach(function (image) {
    image.style.display = "none";
  });

  sliderImages[i].style.display = "block";

  btnPrev.style.display = offset === 0 ? "none" : "block";

  if (offset === sliderImages.length - 1) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}

btnNext.addEventListener("click", function () {
  if (offset < sliderImages.length - 1) {
    offset++;
    showSlide(offset);
  }
});

btnPrev.addEventListener("click", function () {
  if (offset > 0) {
    offset--;
    showSlide(offset);
  }
});

showSlide(0);
