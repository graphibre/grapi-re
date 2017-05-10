<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- responsive meta tag -->
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- -->
    <script src="node_modules/jquery/dis/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="css/global.css">
    <link rel="stylesheet" type="text/css" href="css/vignet.css">
<title>labo.graphi&re.labo</title>
</head>
<body>
<?php
    // Si le mot de passe est bon
    if (isset($_POST['id_user']) AND $_POST['id_user'] ==  "graphibre") 
    
        {
         if (isset($_POST['pw_user']) AND $_POST['pw_user'] ==  "")
            {
        ?>
        
        <?php include('modules/header_lab.php') ?>
        <?php include('modules/content_lab.php') ?>
        <?php include('modulesfooter.php') ?>

        <?php
            }
        }
    else // Sinon, on affiche un message d'erreur
    {
        echo '<form action="login.php" method="post"><p>Vous pas être graphibre  ...<br /><input type="submit" value="Déconnexion" /></p></form>';
    }
    ?>
    
</body>
</html>