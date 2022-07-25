<?php
//récupération de données post
if (isset($_POST['log']) && !empty($_POST['log'])) {
    //vérification et sécurisation des données reçu en POST
    // ...
    echo "OK";
} else {
    echo "PAS OK";
}
