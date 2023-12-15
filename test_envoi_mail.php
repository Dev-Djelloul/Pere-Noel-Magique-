<?php
$to = "rc.cathare@gmail.com";
$subject = "Test d'envoi d'e-mail";
$message = "Ceci est un test d'envoi d'e-mail depuis PHP.";

// Utilisez la fonction mail() pour envoyer l'e-mail
$result = mail($to, $subject, $message);

if ($result) {
  echo "E-mail envoyé avec succès.";
} else {
  echo "Erreur lors de l'envoi de l'e-mail.";
}
?>
