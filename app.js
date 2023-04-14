// "use strict"

const dropDown = document.querySelector("#supportDropdownButton");
const currencyDrop = document.querySelector(".currency");
const currencyDropdown = document.querySelector("#currency-drop");
const dropElem = document.querySelector(".dropdown-menu");
const accountElem = document.querySelector(".account");
const accountDropdown = document.querySelector(".account-dropdown-menu");


// dropdown/filter functionality
dropDown.addEventListener("click", () => {
  currencyDropdown.classList.remove("showCurrencyDropdown");
  accountDropdown.classList.remove("showAccount");
  dropElem.classList.toggle("showDropdown");
  console.log("Hello");
});
currencyDrop.addEventListener("click", () => {
  dropElem.classList.remove("showDropdown");
  accountDropdown.classList.remove("showAccount");
  currencyDropdown.classList.toggle("showCurrencyDropdown");
  console.log("Hello");
});
accountElem.addEventListener("click", () => {
  dropElem.classList.remove("showDropdown");
  currencyDropdown.classList.remove("showCurrencyDropdown");
  accountDropdown.classList.toggle("showAccount");
  console.log("Hello");
});
