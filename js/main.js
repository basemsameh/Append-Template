// Up Button
let upBtn = document.querySelector('.up-btn');

// Active navbar when scroll
let navbar = document.querySelector(".navbar");
let navbarLinks = document.querySelectorAll(".navbar-nav .nav-item .nav-link");

window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 0) {
    active(navbarLinks[0]);
  }
  // Active navbar
  if (window.scrollY >= 100) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
  // Up Button
  if (window.scrollY >= 200) {
    upBtn.style.display = 'initial';
    upBtn.onclick = () => { window.scrollTo(0, 0) }
  } else {
    upBtn.style.display = 'none';
  }
  if (window.scrollY >= 500) {
    showEle(document.querySelector('#about'));
    active(navbarLinks[1]);
  }
  if (window.scrollY >= 1500) {
    showEle(document.querySelector('.counter'));
  }
  if (window.scrollY >= 1650) {
    showEle(document.querySelector('.services'));
    active(navbarLinks[2]);
  }
  if (window.scrollY >= 2600) {
    showEle(document.querySelector('.features'));
  }
  if (window.scrollY >= 3800) {
    showEle(document.querySelector('.portfolio'));
    active(navbarLinks[3]);
  }
  if (window.scrollY >= 5350) {
    showEle(document.querySelector('.pricing'));
    active(navbarLinks[4]);
  }
  if (window.scrollY >= 6350) {
    showEle(document.querySelector('.questions'));
  }
  if (window.scrollY >= 7150) {
    showEle(document.querySelector('.team'));
    active(navbarLinks[5]);
  }
  if (window.scrollY >= 8450) {
    showEle(document.querySelector('.action'));
  }
  if (window.scrollY >= 8750) {
    showEle(document.querySelector('.testimonials'));
  }
  if (window.scrollY >= 9250) {
    showEle(document.querySelector('.posts'));
    active(navbarLinks[6]);
  }
  if (window.scrollY >= 10100) {
    showEle(document.querySelector('.contact'));
    active(navbarLinks[8]);
  }
  layerSize();
}

// Questions Collapse
let collapseBtn = document.querySelectorAll(".questions ol li button");
let arrowDir = document.querySelectorAll(".questions ol li button i");

collapseBtn.forEach((e, index) => {
  e.onclick = () => {
    if (arrowDir[index].classList.contains("rotate")) {
      arrowDir[index].classList.remove("rotate");
      e.style.color = "var(--black)";
    } else {
      arrowDir[index].classList.add("rotate");
      e.style.color = "var(--main-color)";
    }
  }
})

// Make height and width of team layer equal to width and height of image
let image = document.querySelectorAll(".team .person figure img");
let layer = document.querySelectorAll('.team .person figure .layer');

function layerSize() {
  layer.forEach((e, index) => {
    e.style.width = window.getComputedStyle(image[index]).getPropertyValue('width');
    e.style.height = window.getComputedStyle(image[index]).getPropertyValue('height');
  })
}

function showEle(element) {
  element.classList.add("show");
}

function active(element) {
  navbarLinks.forEach(e => { e.classList.remove('active') })
  element.classList.add("active");
}