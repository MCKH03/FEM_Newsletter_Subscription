import SubscriptionView from "./components/SubscriptionView.js";
import SuccessView from "./components/SuccessView.js";

// Selections
const body = document.querySelector("body");

// Functions
function invalidEmailUI(labelError, emailInput) {
  // labelError.textContent = "";
  labelError.classList.add("shown");
  emailInput.classList.add("error");
}

function emailCorrectFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// States
let state = "subscription";
let email = "";

function createView() {
  if (state === "subscription") {
    body.innerHTML = "";
    body.insertAdjacentHTML("afterbegin", SubscriptionView());

    const form = document.querySelector("form");
    const emailInput = document.querySelector("input");
    const labelError = document.querySelector(".label-error");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!emailCorrectFormat(emailInput.value)) {
        invalidEmailUI(labelError, emailInput);
        return;
      }

      state = "success";
      email = emailInput.value;
      // emailInput.value = "";
      createView();
    });
  }

  if (state === "success") {
    body.innerHTML = "";
    body.insertAdjacentHTML("afterbegin", SuccessView());

    const form = document.querySelector(".success-box");
    const sentEmail = document.querySelector(".sent-email");
    sentEmail.textContent = email;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      state = "subscription";
      createView();
    });
  }
}

// Initialize View
createView();
