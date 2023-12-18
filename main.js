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




// Liste des cadeaux avec leurs détails
const gifts = [
  {
    id: 1,
    name: "Peluche Magique",
    age: "0-3",
    category: "jouets",
    description: "Une adorable peluche qui parle et chante",
  },
  {
    id: 2,
    name: "Livre Enchanté",
    age: "4-7",
    category: "livres",
    description: "Un livre interactif avec des histoires magiques",
  },
  {
    id: 3,
    name: "Pull-over chaud",
    age: "8-12",
    category: "vêtements",
    description: "Un joli vêtement pour tenir au chaud pour l'hiver",
  },
  // Ajoutez d'autres cadeaux avec leurs détails si nécessaire
];

document.addEventListener("DOMContentLoaded", function () {
  // Fonction pour afficher les cadeaux sur la page
  function displayGifts(filteredGifts) {
    const giftsContainer = document.getElementById("gifts");
    giftsContainer.innerHTML = "";

    filteredGifts.forEach((gift) => {
      const giftCard = document.createElement("div");
      giftCard.classList.add("gift-card");

      giftCard.innerHTML = `
        <h4>${gift.name}</h4>
        <img class="img-gift" src="./images/${gift.id}.jpg" alt="${gift.name}">
        <p>${gift.description}</p>
        <button class="button-gift" onclick="selectGift(${gift.id})">Sélectionner</button>
      `;

      giftsContainer.appendChild(giftCard);
    });
  }

  // Fonction pour filtrer les cadeaux en fonction de l'âge et de la catégorie
  window.filterGifts = function () {
    const ageFilter = document.getElementById("ageFilter").value;
    const categoryFilter = document.getElementById("categoryFilter").value;

    const filteredGifts = gifts.filter((gift) => {
      return (
        (ageFilter === "Tous" || gift.age === ageFilter) &&
        (categoryFilter === "Tous" || gift.category === categoryFilter)
      );
    });

    displayGifts(filteredGifts);
  };

  // Fonction pour afficher les détails du cadeau sélectionné
  window.selectGift = function (giftId) {
    const selectedGift = gifts.find((gift) => gift.id === giftId);

    // Vous pouvez ajouter ici le code pour afficher les détails du cadeau sélectionné.
    console.log("Cadeau sélectionné :", selectedGift);
  };

  // Initialiser l'affichage avec tous les cadeaux
  displayGifts(gifts);

  // Ajouter un écouteur d'événements pour les filtres
  document
    .getElementById("ageFilter")
    .addEventListener("change", window.filterGifts);
  document
    .getElementById("categoryFilter")
    .addEventListener("change", window.filterGifts);

  // Ajouter un écouteur d'événements pour le bouton de filtrage
  document
    .getElementById("filterButton")
    .addEventListener("click", filterGifts);
});
