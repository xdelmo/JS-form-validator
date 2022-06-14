import FormValidator from "./FormValidator.js";

const fv = new FormValidator("#signup");

function validateLength(value, inputField) {
  if (value.length > 5 || value.length === 0) {
    return {
      pass: false,
      error: "❌ Username must be between 1-5 characters",
    };
  }
  return {
    pass: true,
  };
}

fv.register("#username", validateLength);

// We can inspect the content of this fv object
window.fv = fv;
