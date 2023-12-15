<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Récupérer les données du formulaire
  $prenom = htmlspecialchars($_POST["prenom"]);
  $nom = htmlspecialchars($_POST["nom"]);
  $age = htmlspecialchars($_POST["age"]);
  $email = htmlspecialchars($_POST["email"]);
  $adresse = htmlspecialchars($_POST["adresse"]);
  $message = htmlspecialchars($_POST["message"]);

  // Adresse e-mail de destination (adresse e-mail où le mail sera envoyé)
  $destinataire = "adresse_email_destinataire@example.com";

  // Sujet du mail
  $sujet = "Nouvelle demande de contact de $prenom $nom";

  // Corps du mail
  $corps_message = "Prénom : $prenom\nNom : $nom\nÂge : $age\nE-mail : $email\nAdresse : $adresse\n\nMessage :\n$message";

  // En-têtes du mail
  $headers = "From: $email";

  // Envoyer l'e-mail
  mail($destinataire, $sujet, $corps_message, $headers);

  // Redirection vers une page de confirmation
  header("Location: confirmation.php");
  exit();
}
?>
