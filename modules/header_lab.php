<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    
</head>
<body>
    <div id="header">
        <div class="navbar">
            <ul>
                <li class="link_list">
                    <ul>
                        <li><a href="login.php" class="button_lab_all" style="font-weight: bold">graphi&re.labo</a></li>
                    </ul>
                </li>

                <li class="link_list">
                    <ul class="main_select">
                        <li><a href="" class="button_lab_dev"><span>Dev</span></a></li>
                        <li><a href="" class="button_lab_uiux">Ui / Ux</a></li>
                        <li><a href="" class="button_lab_typo">Typographie</a></li>
                        <li><a href="" class="button_lab_divers">Divers</a></li>
                    </ul>
                </li>
                <li class="link_list">
                    <ul class="dev_select">
                        <script>
                        $(".uiux_select").toggle(),$(".clock_section").toggle();
                        </script>
                        <li><a href="" class="button_lab_back">╳ Back End</a></li>
                        <li><a href="" class="button_lab_front">╳ Front End</a></li>
                        <li><a href="" class="button_lab_degen">╳ Design génératif</a></li>
                    </ul>
                </li>
                <li class="link_list">
                    <ul class="uiux_select">
                        <li><a href="" class="button_lab_ux">╳ Expérience Utilisateur</a></li>
                        <li><a href="" class="button_lab_ui">╳ Interface Utilisateur</a></li>
                        <li><a href="" class="button_lab_market">╳ Marketing</a></li>
                    </ul>
                </li>
                <li class="link_list">
                    <ul class="typo_select">
                        <li><a href="" class="button_lab_typop">╳ Typo Print</a></li>
                        <li><a href="" class="button_lab_typow">╳ Typo Web</a></li>
                        <li><a href="" class="button_lab_grille">╳ Grille / Composition</a></li>
                    </ul>
                </li>
                <li class="link_list">
                    <ul class="divers_select">
                        <li><a href="" class="button_lab_photo">╳ Photographie</a></li>
                        <li><a  href="" class="button_lab_objet">╳ Objet</a></li>
                        <li><a href="" class="button_lab_conf">╳ Conférences</a></li>
                    </ul>
                </li>
                <li class="link_list">
                    <ul>
                        <li><a href="index.php">⎋ Déconnection</a></li>
                        <li><a href="#" class="button_list">⊟ Liste</a></li>
                        <li><a href="#" class="button_mosa">⊞ Mosaïque</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <!-- SCRIPT -->
    <script type="text/javascript" src="js/date_heure.js"></script>
    <script type="text/javascript" src="js/jour_nuit.js"></script>
    <script src="js/select_lab.js"></script>
    <script src="js/mosa_list_lab.js"></script>