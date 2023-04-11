// "use strict"

const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");

// dropdown/filter functionality
dropDown.addEventListener("click", () => {
  dropElem.classList.toggle("showDropDown");
  console.log("Hello");
});

