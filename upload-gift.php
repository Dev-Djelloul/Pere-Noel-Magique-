<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $uploadDirectory = "uploads/"; // Répertoire où les fichiers seront téléchargés

    if (!file_exists($uploadDirectory)) {
        mkdir($uploadDirectory, 0777, true); // Créer le répertoire s'il n'existe pas
    }

    $targetFile = $uploadDirectory . basename($_FILES["file"]["name"]);

    // Vérifier si le fichier a été correctement téléchargé
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)) {
        echo "Le fichier a été téléchargé avec succès.";
    } else {
        echo "Une erreur s'est produite lors du téléchargement du fichier.";
    }
}
?>
