<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    
</head>
<body>

    <div id="header">
        <div class="navbar">
            <ul>
                <li class="link_list">
                    <ul>
                        <li><a href="index.php" class="button_all" style="font-weight: bold">graphi&re</a></li>
                    </ul>
                </li>

                <li class="link_list">
                    <ul class="main_select">
                        <li><a href="" class="button_work"><span>work</span></a></li>
                        <li><a href="" class="button_cv">À propos</a></li>
                        <li><a href="" class="button_contact">Contact</a></li>
                    </ul>
                </li>
                <li class="link_list">
                    <ul class="work_select">
                        <script>
                        $(".cv_select").toggle(),$(".clock_section").toggle();
                        </script>
                        <li><a href="" class="button_dg">╳ Design graphique</a></li>
                        <li><a href="" class="button_do">╳ Design objet</a></li>
                        <li><a href="" class="button_dm">╳ Design multimédia</a></li>
                    </ul>
                </li>
                <li class="link_list">
                    <ul class="cv_select">
                        <li><a href="" class="button_edit">╳ Edito</a></li>
                        <li><a href="" class="button_comp">╳ Compétences</a></li>
                        <li><a href="" class="button_form">╳ Formation</a></li>
                    </ul>
                </li>
                <li class="link_list">
                    <ul>
                        <li><a href="login.php">⌂ Lab</a></li>
                        <li><a href="#" class="button_list">⊟ Liste</a></li>
                        <li><a href="#" class="button_mosa">⊞ Mosaïque</a></li>
                    </ul>
                </li>
                <li class="link_list">
                    <ul class="clock_section">
                        <li>
                            <span id="date_heure"></span>
                            <script type="text/javascript">window.onload = date_heure('date_heure');</script>
                            <span id="jour_nuit"></span>
                            <script type="text/javascript">window.onload = jour_nuit('jour_nuit');</script>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <!-- SCRIPT -->
    <script type="text/javascript" src="js/date_heure.js"></script>
    <script type="text/javascript" src="js/jour_nuit.js"></script>
    <script src="js/select.js"></script>
    <script src="js/mosa_list.js"></script>
