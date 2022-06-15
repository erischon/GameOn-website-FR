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

// Error messages
const firstNameMsg =
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const lastNameMsg =
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const emailMsg = "Veuillez entrer une adresse email valide.";
const birthdateMsg = "Vous devez entrer votre date de naissance.";
const quantityMsg = "Veuillez entrer une valeur numérique";
const locationMsg = "Vous devez choisir une option.";
const termsOfUseMsg = "Vous devez accepter les termes et conditions.";

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
  const formData = element.parentElement;

  formData.classList.remove("data-error");
  formData.removeAttribute("data-error");
  element.classList.remove("data-error");

  formData.classList.add("success");
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
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();

  // First name validation
  if (firstNameValue === "" || firstNameValue.length < 2) {
    setError(first, firstNameMsg);
  } else {
    setSuccess(first);
  }

  // Last name validation
  if (lastNameValue === "" || lastNameValue.length < 2) {
    setError(last, lastNameMsg);
  } else {
    setSuccess(last);
  }

  // Email validation
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, emailMsg);
  } else {
    setSuccess(email);
  }
};
