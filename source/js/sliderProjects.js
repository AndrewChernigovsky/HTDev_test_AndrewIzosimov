export const Slider = () => {
  const sliderProjects = document.getElementById('siderProjects');
  const sliderContent = document.querySelectorAll('slider-projects__content-wrapper');
  const sliderContentAcitve = document.querySelector('slider-projects__content-wrapper--active');


  sliderContent.forEach(e => {
    if(e.contains('slider-projects__content-wrapper--active')) {
      e.classList.remove('slider-projects__content-wrapper--active')
    } else {
      e.classList.add('slider-projects__content-wrapper--active')
    }
  });
}
