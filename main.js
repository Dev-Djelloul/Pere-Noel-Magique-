// main.js

// Fonction pour mettre à jour le compte à rebours
function updateCountdown() {
  // ... (votre code de mise à jour du compte à rebours)
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
// Appel initial de la fonction
updateCountdown();

// Fonction pour soumettre la lettre de Noël
function soumettreLettre() {
  // ... (votre logique de soumission de lettre)
}

// ... (ajoutez d'autres fonctions au besoin)
