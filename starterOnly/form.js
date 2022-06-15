const reserveForm = document.getElementById("reserve");

// Form Input
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locNewYork = document.getElementById("location1");
const locSanFrancisco = document.getElementById("location2");
const locSeattle = document.getElementById("location3");
const locChicago = document.getElementById("location4");
const locBoston = document.getElementById("location5");
const locPortland = document.getElementById("location6");
const termsOfUse = document.getElementById("checkbox1");
const inform = document.getElementById("checkbox2");

// Submit Form
reserveForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

// Set to Error
const setError = (element, message) => {
  const formData = element.parentElement;

  formData.classList.add("data-error");
  formData.setAttribute("data-error", message);
  element.classList.add("data-error");

  formData.classList.remove("success");
};

// Set to Success
const setSuccess = (element) => {
  return;
};

// Email Validation
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Inputs Validation Function
const validateInputs = () => {
  const firstNameValue = firstName.value.trim();

  if (firstNameValue === "" || firstNameValue.length < 2) {
    setError(first, "first name is required");
  } else {
    setSuccess(first);
  }
};
