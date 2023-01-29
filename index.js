let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');
document.querySelector('#video-slider').src = "videos/vid-1.mp4";

const videoChanger = (item, index) => {
  item.addEventListener("click", () => { 
    document.querySelector('.controls .active').classList.remove('active');
    item.classList.add('active');
    let src = item.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
   })
}

videoBtn.forEach(videoChanger);

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
}); 