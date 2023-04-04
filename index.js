// Document elements from index and all other pages
let videoBtn = document.querySelectorAll('.vid-btn');
let loginBtn = document.querySelector("#login");
let logoutBtn = document.querySelector("#logout");
let loginFormCont = document.querySelector(".login-form-container");
let loginNowBtn = document.querySelector(".login-form-container .btn");
let navbar = document.querySelector(".navbar");
let userError = document.querySelector(".user-not-found");
let textEmail = document.getElementById("email");
let textPassword = document.getElementById("password");

// Other variables and constants
const credentials = [
  {
    username: "rohith@travelup.com",
    password: "1qazmlp0",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Infinite.svg/640px-Infinite.svg.png"
  },
  {
    username: "pratik@travelup.com",
    password: "fdhjklmno18",
    img: "https://avatars.githubusercontent.com/u/66823602?v=4"
  },
  {
    username: "qwer",
    password: "123"
  }
];

// Each "vid-btn" under "control" class has toggle(onClick) functionality for changing the video source
const videoChanger = (item, index) => {
  item.addEventListener("click", () => {
    document.querySelector('.controls .active').classList.remove('active');
    item.classList.add('active');
    let src = item.getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  })
};

// Toggle the login Form up and down
const toggleLoginForm = () => {
  if (loginFormCont.className === "login-form-container") {
    loginFormCont.className = "login-form-container active";
  } else if (loginFormCont.className === "login-form-container active") {
    loginFormCont.className = "login-form-container";
  }
};

// Toggle the logout button
const toggleLogout = () => {
  localStorage.clear();
  window.location.href = "https://rohithumesh1.github.io/web-development/";
  window.location.reload();
};

// Checking "loged in" if local storage contains any username(email) 
const checkLoggedIn = () => {
  if (localStorage.getItem("username")) {
    loginBtn.style.display = 'none';
    navbar.style.display = '';
  } else {
    logoutBtn.style.display = 'none';
    navbar.style.display = 'none';
  }
};

// Setting user credentials in local storage for authentication
const setLoggedIn = (username, password, image) => {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("image", image);

  loginBtn.style.display = 'none';
  logoutBtn.style.display = "";
  window.location.reload();
};

// Checking email & password from input to credentials variable
const checkCredentials = (email, pass) => {
  credentials.forEach((item, index) => {
    if (email === item.username && pass === item.password) {
      setLoggedIn(item.username, item.password, item.img);
      return;
    }
  });
};


// Actual functionality begins from here

checkLoggedIn();

// for each button its going to call the function "videoChanger"
videoBtn.forEach(videoChanger);


// On clicking login button, authentication will begin
loginNowBtn.addEventListener('click', () => {
  checkCredentials(textEmail.value, textPassword.value);
  textEmail.value = textPassword.value = "";
});