let videoBtn = document.querySelectorAll('.vid-btn');
let loginBtn = document.querySelector("#login-btn");
let loginFormCont = document.querySelector(".login-form-container");

const videoChanger = (item, index) => {
  item.addEventListener("click", () => {
    document.querySelector('.controls .active').classList.remove('active');
    item.classList.add('active');
    let src = item.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  })
};

const toggleLogin = () => {
  if (loginFormCont.className === "login-form-container") {
    loginFormCont.className = "login-form-container active";
  } else if (loginFormCont.className === "login-form-container active") {
    loginFormCont.className = "login-form-container";
  }
};

videoBtn.forEach(videoChanger);