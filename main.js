"use strict";

let button = document.querySelector(".btn");

function clearText() {
  let email = document.querySelector(".input").value;
  let text = document.querySelector(".text");

  if (email === "") {
    text.classList.add("hidden");
  }
}

function validation() {
  let email = document.querySelector(".input").value;
  let text = document.querySelector(".text");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    text.classList.add("hidden");
  }
  //Else
  else {
    text.classList.remove("hidden");
  }

  if (email == "") {
    text.classList.remove("hidden");
    text.innerHTML = "Enter your email address";
  }
}

button.addEventListener("click", validation);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validation();
  }
});
