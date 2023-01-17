const hamburger = document.querySelector(".hamburger__menu");
const navLink = document.querySelector(".nav-bar__menu");
const logo = document.querySelector(".logo");
const navBar = document.querySelector(".nav-bar");


hamburger && hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

hamburger.addEventListener("click", () => {
  navLink.classList.add("burger-menu");

  navBar.removeChild(logo);
  navBar.removeChild(hamburger);

  let close = document.createElement("div");
  close.classList.add("close-btn");
  close.textContent = "X";
  navLink.appendChild(close);

  close.addEventListener("click", () => {
    navLink.removeChild(close);
    navLink.classList.remove("burger-menu");
    navBar.appendChild(logo);
    navBar.appendChild(hamburger);
  });
});


/* ==============  End of Mobile menu javascript ===========  */

const form = document.getElementById("contact-form");
const fullname = document.getElementById("full-name");
const email = document.getElementById("email-address");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const error = document.getElementById("error");

form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (
    fullname.value === "" ||
    fullname.value === null ||
    email.value === "" ||
    email.value === null ||
    subject.value === "" ||
    subject.value === null ||
    message.value === "" ||
    message.value === null
    ) {
      error.style.color = "red"
      error.innerHTML = "Please fill out the entire form."
    }
    
    else if (
      email.value.length < 10 
    ) {
      error.style.color = "red"
      error.innerHTML = "Your email does not seem valid, please fill out again!"
      email.style.color = "red";
      email.style.fontSize = "14px";
    }
    else {
      fullname.value = ""
      subject.value = ""
      message.value = "" 
      error.style.color = "green"
      error.innerHTML = "Thank you for your comments."
      email.value = "" 
    }

})


const subscribBtn = document.getElementById('sub-btn');
const subscEmail = document.getElementById('follow-us');
const subscriotionError = document.getElementById('subscribe-error');
const subscribeForm = document.getElementById('follow-us__form')


subscribeForm && subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (subscEmail.value === "" || subscEmail.value === null ) {
    subscriotionError.style.color = "red"
    subscriotionError.innerHTML = "Please enter your email first"
  } else if (subscEmail.value.length <= 10) {
    subscriotionError.style.color = "red"
    subscEmail.style.color = "red"
    subscEmail.style.border = "3px solid red"
    subscriotionError.innerHTML = "Your email doesn't seem valid!"
  } else {
    subscribBtn.style.display = 'none'
    subscriotionError.style.color = "green"
    subscriotionError.innerHTML = "Congrats! You are subscribed"
    subscEmail.style.color = "green"
    subscEmail.style.fontSize = "14px"
    subscEmail.style.border = "3px solid green"
  }
  
}
)


/* ==============  End of form validation of contact page ===========  */


const homeSubscription = document.getElementById("subscribtion-form");
const homeError = document.getElementById("subscribtion__error");
const homeEmail = document.getElementById('email-add');
const subsc_btn = document.getElementById('subscribe__btn');

homeSubscription.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(homeSubscription)

  if (homeEmail.value === "" || homeEmail.value === null) {
    homeEmail.style.border = "3px solid red";
    
  } else {
    homeEmail.style.border = "3px solid green";
    subsc_btn.innerText = "Subscribed"
    subsc_btn.style.disable = "true"
    subsc_btn.style.backgroundColor = "green"
    subsc_btn.style.color = "white"
    subsc_btn.style.fontWeight = "500"
    subsc_btn.disabled = true;
  }

})
