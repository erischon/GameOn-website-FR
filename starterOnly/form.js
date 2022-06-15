const reserveForm = document.getElementById("reserve");

// Form Input
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
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
  console.log(firstName);
  //   e.preventDefault();

  //   validateInputs();
});

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
