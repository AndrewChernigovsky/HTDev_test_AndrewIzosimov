const sliderProjects = document.getElementById('siderProjects');
const sliderContent = document.querySelectorAll('.slider-projects__content-wrapper');
const sliderActive = document.querySelector('.slider-projects__content-wrapper--active');

var indexSlider = 1;

function nextSlider() {
  ShowSlider(indexSlider += 1);
}

function previousSlider() {
  ShowSlider(indexSlider -= 1);
}

function currentSlider(n) {
  ShowSlider(n);
}

function ShowSlider(n) {

  if (n > sliderContent.length) {
    indexSlider = 1
  }
  if (n < 1) {
    indexSlider = sliderContent.length
  }

  for (let slide of sliderContent) {
    if (!slide.classList.contains('slider-projects__content-wrapper--active'))
      slide.classList.add('slider-projects__content-wrapper--active');
    else {
      slide.classList.remove('slider-projects__content-wrapper--active');
    }
  }
    sliderContent[indexSlider - 1].classList.remove('slider-projects__content-wrapper--active');
}

sliderContent.forEach(e => {
  e.addEventListener('click', ShowSlider(indexSlider));
});
