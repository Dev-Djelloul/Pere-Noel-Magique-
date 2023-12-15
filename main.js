// Fonction pour soumettre une lettre
function soumettreLettre() {
  // Récupérez les valeurs du formulaire
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const age = document.getElementById("age").value;
  const adresse = document.getElementById("adresse").value;

  // Récupérez les cadeaux sélectionnés ou créés
  const cadeauxSelect = document.getElementById("cadeaux");
  const cadeauxSelectionnes = Array.from(cadeauxSelect.selectedOptions).map(
    (option) => option.value
  );

  // Vérifiez si des nouveaux cadeaux ont été créés
  if (cadeauxSelectionnes.includes("nouveau")) {
    const nouveauCadeauNom = document.getElementById("nouveauCadeauNom").value;
    const nouveauCadeauDescription = document.getElementById(
      "nouveauCadeauDescription"
    ).value;

    // Ajoutez la logique pour envoyer les nouveaux cadeaux aux Elfes
    // (vous pouvez utiliser une API ou une autre méthode pour cela)
  }

  // Ajoutez la logique pour envoyer la lettre au backend
  // (vous pouvez utiliser une API ou une autre méthode pour cela)
}

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
  // Date de Noël (25 décembre)
  const christmasDate = new Date("December 25, 2023 00:00:00").getTime();

  // Date actuelle
  const currentDate = new Date().getTime();

  // Calcul du temps restant en millisecondes
  const timeRemaining = christmasDate - currentDate;

  // Calcul des jours, heures, minutes et secondes
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Affichage du compte à rebours
  document.getElementById("countdown").innerHTML = `
      <div>${days} jours</div>
      <div>${hours} heures</div>
      <div>${minutes} minutes</div>
      <div>${seconds} secondes</div>
    `;

  // Mise à jour toutes les secondes
  setTimeout(updateCountdown, 1000);
}

// Appel initial de la fonction pour le compte à rebours
updateCountdown();

// Fonction pour soumettre une expérience
function soumettreExperience() {
  const pseudo = document.getElementById("pseudo").value;
  const description = document.getElementById("description").value;

  // Soumettez les données au serveur ou à une base de données
  // pour la validation par les Elfes (côté serveur).

  // Pour cet exemple, affichons simplement l'avis soumis.
  const avisValidation = document.getElementById("avis-validation");
  const nouvelAvis = document.createElement("div");
  nouvelAvis.innerHTML = `<strong>${pseudo} </strong> ${description}`;
  avisValidation.appendChild(nouvelAvis);

  // Réinitialisez le formulaire après la soumission
  document.getElementById("experience-form").reset();
}

// Effets de flocons de neige en mouvement
document.addEventListener("mousemove", function (e) {
  // Récupérer la position de la souris
  const mouseX = e.pageX;
  const mouseY = e.pageY;

  // Appliquer la position aux flocons de neige
  const snowflakes = document.querySelectorAll(".snowflake");
  snowflakes.forEach(function (snowflake, index) {
    const deltaX = mouseX - snowflake.offsetLeft;
    const deltaY = mouseY - snowflake.offsetTop;

    // Mettre à jour la position des flocons en fonction de la position de la souris
    snowflake.style.transform = `translate(${deltaX * (index + 1)}px, ${
      deltaY * (index + 1)
    }px)`;
  });
});

// Liste des cadeaux avec leurs propriétés (id, nom, catégorie, âge, description)
// ... (autres parties du code)

const giftsList = [
  {
    id: 1,
    name: "Peluche Magique",
    category: "jouets",
    age: "0-3",
    description: "Une adorable peluche qui parle et chante.",
    image: "images/Bear.jpg", // Ajoutez le lien de l'image de la peluche
  },
  {
    id: 2,
    name: "Livre Enchanté",
    category: "livres",
    age: "4-7",
    description: "Un livre interactif avec des histoires magiques.",
    image: "images/Unhappy-new-year-book.jpg", // Ajoutez le lien de l'image du livre
  },
  // Ajoutez d'autres cadeaux selon vos besoins
];

function displayGifts(filteredGifts) {
  const giftsContainer = document.getElementById("gifts");
  giftsContainer.innerHTML = ""; // Effacer le contenu actuel

  filteredGifts.forEach((gift) => {
    const giftCard = document.createElement("div");
    giftCard.classList.add("gift-card");

    // Ajoutez du contenu à la carte du cadeau (nom, description, image, etc.)
    giftCard.innerHTML = `
      <h3>${gift.name}</h3>
      <img src="${gift.image}" alt="${gift.name}" />
      <p>${gift.description}</p>
      <button onclick="selectGift(${gift.id})">Sélectionner</button>
    `;

    giftsContainer.appendChild(giftCard);
  });
}

// ... (autres parties du code)

// Liste des cadeaux sélectionnés
const selectedGifts = [];

// Fonction pour sélectionner un cadeau et l'ajouter à la liste des cadeaux sélectionnés
function selectGift(giftId) {
  const selectedGift = giftsList.find((gift) => gift.id === giftId);

  if (selectedGift) {
    selectedGifts.push(selectedGift);
    // Ajoutez une logique supplémentaire si nécessaire (peut-être un message de confirmation, etc.)
  }
}

// Écouteurs d'événements pour les changements dans les filtres d'âge et de catégorie
document.getElementById("ageFilter").addEventListener("change", updateGifts);
document
  .getElementById("categoryFilter")
  .addEventListener("change", updateGifts);

// Fonction pour mettre à jour la liste des cadeaux en fonction des filtres sélectionnés
function updateGifts() {
  const ageFilter = document.getElementById("ageFilter").value;
  const categoryFilter = document.getElementById("categoryFilter").value;

  const filteredGifts = filterGifts(ageFilter, categoryFilter);
  displayGifts(filteredGifts);
}
