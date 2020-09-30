const signModalMain = document.getElementById("signModalMain");
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const backdrop = document.getElementById("backdrop");
const faLeft = document.getElementById("faLeft");
const signFormTitle = document.getElementById("signFormTitle");
const signNameInput = document.getElementById("signNameInput");
const signModalBtn = document.getElementById("signModalBtn");
const haveAcc = document.getElementById("haveAcc");
const haveAccBtn = document.getElementById("haveAccBtn");
const donotHaveAcc = document.getElementById("donotHaveAcc");
const donotHaveAccBtn = document.getElementById("donotHaveAccBtn");
const signModalInputs = document.querySelectorAll("input");

const toggleBackDrop = () => {
  backdrop.classList.toggle("visible");
};

const showSignModal = () => {
  signModalMain.classList.toggle("visible");
  toggleBackDrop();
  clearSignModalInputs();
};

const showSignupModal = () => {
  signFormTitle.innerHTML = "Create your account";
  signNameInput.style.display = "block";
  signModalBtn.innerHTML = "Sign Up";
  donotHaveAcc.className = "";
  haveAcc.className = "visible";
  showSignModal();
};
const showLoginModal = () => {
  signFormTitle.innerHTML = "Login to Learning MSA";
  signNameInput.style.display = "none";
  signModalBtn.innerHTML = "Login";
  haveAcc.className = "";
  donotHaveAcc.className = "visible";
  showSignModal();
};

const clearSignModalInputs = () => {
  for (const input of signModalInputs) {
    input.value = "";
  }
};

const toggleToLoginModal = () => {
  showSignModal();
  showLoginModal();
};
const toggleToSignupModal = () => {
  showSignModal();
  showSignupModal();
};

signupBtn.addEventListener("click", showSignupModal);
loginBtn.addEventListener("click", showLoginModal);
backdrop.addEventListener("click", showSignModal);
faLeft.addEventListener("click", showSignModal);
haveAccBtn.addEventListener("click", toggleToLoginModal);
donotHaveAccBtn.addEventListener("click", toggleToSignupModal);
