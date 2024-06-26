// select the necessary Password Validation Check web app element
let passwordInput = document.querySelector(".password-input input");
let eyeBtn = document.querySelector(".password-input i");
let requirementItemList = document.querySelectorAll(".password-contant ul li");
// An array of password requirements with corresponding
// regular expressions and index of the requirement list item
const requirements = [
  { regex: /.{8,}/, index: 0 }, // Minimum of 8 characters
  { regex: /[0-9]/, index: 1 }, // At least one number
  { regex: /[a-z]/, index: 2 }, // At least one lowercase letter
  { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
  { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
];
// passwordInput keyup eventlistener
passwordInput.addEventListener("keyup", (e) => {
  requirements.forEach((item) => {
    // test valid regex
    let isValid = item.regex.test(e.target.value);
    let requirementItem = requirementItemList[item.index];
    // Updating class and icon of requirement item if requirement matched or not
    if (isValid) {
      requirementItem.firstElementChild.className =
        "fa-solid fa-circle-check checked";
      requirementItem.classList.add("valid");
    } else {
      requirementItem.firstElementChild.className = "fa-solid fa-circle";
      requirementItem.classList.remove("valid");
    }
  });
});
// eyeBtn click eventlistener
eyeBtn.addEventListener("click", () => {
  // Toggle the password input type between "password" and "text"
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  // Update the eye icon class based on the password input type
  eyeBtn.className = `fa-solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
