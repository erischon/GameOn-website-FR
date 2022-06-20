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
function validateInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();
  const locNewYorkValue = locNewYork.checked;
  const locSanFranciscoValue = locSanFrancisco.checked;
  const locSeattleValue = locSeattle.checked;
  const locChicagoValue = locChicago.checked;
  const locBostonValue = locBoston.checked;
  const locPortlandValue = locPortland.checked;
  const termsOfUseValue = termsOfUse.checked;

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
    setError(email, emailMsg);
  } else if (!isValidEmail(emailValue)) {
    setError(email, emailMsg);
  } else {
    setSuccess(email);
  }

  // Birthdate validation
  // if (birthdateValue === "") {
  //   setError(birthdate, birthdateMsg);
  // } else {
  //   setSuccess(birthdate);
  // }

  // Quantity validation
  if (quantityValue === "") {
    setError(quantity, quantityMsg);
  } else {
    setSuccess(quantity);
  }

  // Location validation
  if (
    locNewYorkValue === false &&
    locSanFranciscoValue === false &&
    locSeattleValue === false &&
    locChicagoValue === false &&
    locBostonValue === false &&
    locPortlandValue === false
  ) {
    setError(location1, locationMsg);
  } else {
    setSuccess(location1);
  }

  // TermsOfUse validation
  if (termsOfUseValue === false) {
    setError(checkbox1, termsOfUseMsg);
  } else {
    setSuccess(checkbox1);
  }

  formData = {
    first: firstNameValue,
    last: lastNameValue,
    email: emailValue,
    birthdate: birthdateValue,
    quantity: quantityValue,
    location: "",
    termsOfUse: termsOfUse.checked,
    inform: inform.checked,
  };
  console.log(formData);

  reserveForm.reset();
  thanksModal();
}

// function thanksModal
const thanksModal = () => {
  const modalForm = document.querySelector("#modalForm");
  const modalBody = document.querySelector(".modal-body");
  reserve.remove();

  modalBody.innerHTML +=
    "<div class = 'modal-thanks'> <div class = 'modal-thanks__message'>Merci pour votre inscription<div> <div class = 'modal-thanks__button'> Fermer <div>";

  modalBg.style.display = "block";

  // Close Modal form
  const thanksBtn = document.querySelector(".modal-thanks__button");

  thanksBtn.addEventListener("click", () => {
    modalBg.style.display = "none";
  });
};
