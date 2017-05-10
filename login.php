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
<title>Labographibre accès</title>
</head>
<body>
<div id="page">
    <form action="./lab.php" method="post">
        <p>
            <p class="vignet_titre">Veuillez renseigner vos identifiants</p><br /><br/>
            <input type="password" name="id_user" /><br /><br/>
            <input type="password" name="pw_user" /><br /><br/><br/>
            <input type="submit" value="Valider" />
        </p>
     </form>
            <form action="index.php" method="post">
                    <input type="submit" value="Retour" />
            </form>
</div>
</body>
</html>