let videoBtn = document.querySelectorAll('.vid-btn');
let loginBtn = document.querySelector("#login");
let logoutBtn = document.querySelector("#logout");
let loginFormCont = document.querySelector(".login-form-container");
let loginNowBtn = document.querySelector(".login-form-container .btn");
let navbar = document.querySelector(".navbar");

const credentials = [{ username: "rohith@travelup.com", password: "1qazmlp0", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Infinite.svg/640px-Infinite.svg.png" }];

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

const toggleLogout = () => {
  localStorage.clear();
  window.location.reload();
  window.location.href = "https://rohithumesh1.github.io/web-development/";
};

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
  let expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name) {
  setCookie(name, null, null);
}
function getCookie(name) {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;

  cArray.forEach(element => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1)
    }
  })
  return result;
}

const checkLoggedIn = () => { 
  if(localStorage.getItem("username")){
    loginBtn.style.display = 'none';
    navbar.style.display = '';
    console.log("Logged in");
  }else{
    logoutBtn.style.display = 'none';
    navbar.style.display = 'none';
  }
};

const setLoggedIn = (username, password, image) => {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("image", image);

  loginBtn.style.display = 'none';
  logoutBtn.style.display = "";
  loginFormCont.className = "login-form-container";
  window.location.reload();
};

const checkCredentials = () => { };


checkLoggedIn();

videoBtn.forEach(videoChanger);



loginNowBtn.addEventListener('click', () => { 
  setLoggedIn("lowda", "12345", "tfyuvhjbjihgyfchgcguj");
});


