function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal form
modalCloseBtn.addEventListener("click", () => {
  modalBg.style.display = "none";
});

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// function thanksModal
const thanksModal = () => {
  const modalForm = document.querySelector("#modalForm");
  const modalBody = document.querySelector(".modal-body");
  reserve.remove();

  modalBody.innerHTML += `<div class='modal-thanks'>
      <div class='modal-thanks__message'>Merci pour votre inscription</div>
      <button class='modal-thanks__button button'>Fermer</button>
    </div>`;

  modalBg.style.display = "block";

  // Close Modal form and reload
  const thanksBtn = document.querySelector(".modal-thanks__button");

  thanksBtn.addEventListener("click", () => {
    modalBg.style.display = "none";
    location.reload();
  });

  modalCloseBtn.addEventListener("click", () => {
    modalBg.style.display = "none";
    location.reload();
  });
};
