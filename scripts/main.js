"use strict";

// Selected from DOM
const cardWrapper = document.querySelector("#card-wrapper");
const rateItem = document.querySelectorAll(".rate-item");
const submitButton = document.querySelector("#submit-btn");
const errorMessage = document.querySelector("#error-message");

// Variables
let score = 0;

// Functions
const rateClassRest = function () {
  rateItem.forEach((item) => {
    item.classList.remove("active");
  });
};
const addInvalidClass = function() {
  rateItem.forEach(item => {
    item.classList.add("invalid");
  });
  errorMessage.classList.remove("hidden");
};
const removeInvalidClass = function() {
  rateItem.forEach(item => {
    item.classList.remove("invalid");
  });
  errorMessage.classList.add("hidden");
};

// Executions
rateItem.forEach((item) => {
  item.addEventListener("click", function (e) {
    removeInvalidClass();
    rateClassRest();
    score = +e.target.dataset.value;
    item.classList.add("active");
  });
});

submitButton.addEventListener("click", function () {
  if (score) {
    const thanksCardElement = `
            <div class="card flex flex-col text-center items-center p-7 xs:p-9">
                <div class="mt-2">
                    <img src="./assets/images/illustration-thank-you.svg" alt="illustration-thank-you">
                </div>
                <span class="text-sm pt-2 pb-1 px-5 rounded-full bg-dark-blue text-orange mt-8 mb-6 xs:text-md">You selected ${score} out of 5</span>
                <h2 class="text-2xl font-bold text-white xs:text-2.5xl">Thank you!</h2>
                <p class="text-sm mt-3.5 xs:mt-0 xs:text-md">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        `;
    cardWrapper.innerHTML = thanksCardElement;
  } else {
    addInvalidClass();
  }
});