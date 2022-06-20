const cartes = document.querySelectorAll(".carte");

let carteRetourne = false;
let premiereCarte, secondCarte;
let verrouillage = false;

cartes.forEach((carte) => {
  if (verrouillage) return;
  carte.addEventListener("click", retourneCarte);
});

function retourneCarte() {
  this.childNodes[1].classList.toggle("active");

  if (!carteRetourne) {
    carteRetourne = true;
    premiereCarte = this;
  }

  carteRetoune = false;
  secondCarte = this;

  correspondance();
}

function correspondance() {
  if (
    premiereCarte.getAttribute("data-attr") ===
    secondCarte.getAttribute("data-attr")
  ) {
    premiereCarte.removeEventListener("click", retourneCarte);
    secondCarte.removeEventListener("click", retourneCarte);
  } else {
    verrouillage = true;
    setTimeout(() => {
      premiereCarte.childNodes[1].classList.remove("active");
      secondCarte.childNodes[1].classList.remove("active");
      verrouillage = false;
    }, 1500);
  }
}

function aleatoire() {
  cartes.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
}
aleatoire();
