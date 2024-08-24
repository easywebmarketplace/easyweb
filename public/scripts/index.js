const website = document.getElementById('website');
const website_wrapper = document.getElementById('website-wrapper');

website_wrapper.addEventListener('mousemove', (event) => {
  const rect = website_wrapper.getBoundingClientRect();

  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const x = event.clientX - centerX;
  const y = event.clientY - centerY;


  const sensitivity = 5;
  let rotationX = x / sensitivity;
  let rotationY = y / sensitivity;
  if(rotationY > -20) {
    rotationY = -20
  }
  // console.log(rotationX);
  // console.log(rotationY);
  website.style.transform = `rotateY(${rotationX}deg) rotateX(${-rotationY}deg)`;
});

const header = document.getElementById("header")
window.addEventListener('scroll', event => {
  if(window.scrollY > 50) {
    header.classList.remove('transparent')
  } else {
    header.classList.add('transparent')
  }
});