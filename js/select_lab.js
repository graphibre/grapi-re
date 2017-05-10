/* DEV section */
$(document).ready(function(){
    $(".button_lab_back").click(function(){
        $(".vignet_lab_back").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_lab_front").click(function(){
        $(".vignet_lab_front").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_lab_degen").click(function(){
        $(".vignet_lab_degen").fadeToggle(200);
        return false;
    });
});
/* UI / UX section */
$(document).ready(function(){
    $(".button_lab_ux").click(function(){
        $(".vignet_lab_ux").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_lab_ui").click(function(){
        $(".vignet_lab_ui").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_lab_market").click(function(){
        $(".vignet_lab_market").fadeToggle(200);
        return false;
    });
});
/* Typographie section */
$(document).ready(function(){
    $(".button_lab_typop").click(function(){
        $(".vignet_lab_typop").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_lab_typow").click(function(){
        $(".vignet_lab_typow").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_lab_grille").click(function(){
        $(".vignet_lab_grille").fadeToggle(200);
        return false;
    });
});
/* Divers section */
$(document).ready(function(){
    $(".button_lab_photo").click(function(){
        $(".vignet_lab_photo").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_lab_objet").click(function(){
        $(".vignet_lab_objet").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_lab_conf").click(function(){
        $(".vignet_lab_conf").fadeToggle(200);
        return false;
    });
});


/* header panels */
/* Affiche toutes les vignettes divers ( Back / Front / Degen ) */
$(document).ready(function(){
    $(".button_lab_dev").click(function(){
        // affiche
        $(".dev_select").show(200),
            $(".vignet_lab_back").show(200),
            $(".vignet_lab_front").show(200),
            $(".vignet_lab_degen").show(200)
        // cache
        $(".divers_select").hide(200),
            $(".vignet_lab_photo").hide(200),
            $(".vignet_lab_objet").hide(200),
            $(".vignet_lab_conf").hide(200)
        $(".uiux_select").hide(200),
            $(".vignet_lab_ux").hide(200),
            $(".vignet_lab_ui").hide(200),
            $(".vignet_lab_market").hide(200),
        $(".typo_select").hide(200),
            $(".vignet_lab_typop").hide(200),
            $(".vignet_lab_typow").hide(200),
            $(".vignet_lab_grille").hide(200)
        return false;
    });
});
/* Affiche toutes les vignettes divers ( UX / UI / Marketing ) */
$(document).ready(function(){
    $(".button_lab_uiux").click(function(){
        // affiche
        $(".uiux_select").show(200),
            $(".vignet_lab_ux").show(200),
            $(".vignet_lab_ui").show(200),
            $(".vignet_lab_market").show(200)
        // cache
        $(".dev_select").hide(200),
            $(".vignet_lab_back").hide(200),
            $(".vignet_lab_front").hide(200),
            $(".vignet_lab_degen").hide(200)
        $(".divers_select").hide(200),
            $(".vignet_lab_photo").hide(200),
            $(".vignet_lab_objet").hide(200),
            $(".vignet_lab_conférences").hide(200)
        $(".typo_select").hide(200),
            $(".vignet_lab_typop").hide(200),
            $(".vignet_lab_typow").hide(200),
            $(".vignet_lab_grille").hide(200)
        return false;
    });
});
/* Affiche toutes les vignettes divers ( typo print / typo web / grille ) */
$(document).ready(function(){
    $(".button_lab_typo").click(function(){
        // affiche
        $(".typo_select").show(200),
            $(".vignet_lab_typop").show(200),
            $(".vignet_lab_typow").show(200),
            $(".vignet_lab_grille").show(200)
        // cache
        $(".uiux_select").hide(200),
            $(".vignet_lab_ux").hide(200),
            $(".vignet_lab_ui").hide(200),
            $(".vignet_lab_market").hide(200)
        $(".dev_select").hide(200),
            $(".vignet_lab_back").hide(200),
            $(".vignet_lab_front").hide(200),
            $(".vignet_lab_degen").hide(200)
        $(".divers_select").hide(200),
            $(".vignet_lab_photo").hide(200),
            $(".vignet_lab_objet").hide(200),
            $(".vignet_lab_conf").hide(200)
        return false;
    });
});
/* Affiche toutes les vignettes divers ( photographie / objet / conférences ) */
$(document).ready(function(){
    $(".button_lab_divers").click(function(){
        // affiche
        $(".divers_select").show(200),
            $(".vignet_lab_photo").show(200),
            $(".vignet_lab_objet").show(200),
            $(".vignet_lab_conf").show(200)
        // cache  
        $(".dev_select").hide(200),
            $(".vignet_lab_back").hide(200),
            $(".vignet_lab_front").hide(200),
            $(".vignet_lab_degen").hide(200);
        $(".uiux_select").hide(200),
            $(".vignet_lab_ux").hide(200)
            $(".vignet_lab_ui").hide(200),
            $(".vignet_lab_market").hide(200),
        $(".typo_select").hide(200),
            $(".vignet_lab_typop").hide(200),
            $(".vignet_lab_typow").hide(200),
            $(".vignet_lab_grille").hide(200)
        return false;
    });
});
/* Affiche toutes les vignettes */
$(document).ready(function(){
    $(".button_lab_all").click(function(){
        // affiche
        $(".dev_select").show(200),
            $(".vignet_lab_back").show(200),
            $(".vignet_lab_front").show(200),
            $(".vignet_lab_degen").show(200);
        $(".uiux_select").show(200),
            $(".vignet_lab_ux").show(200)
            $(".vignet_lab_ui").show(200),
            $(".vignet_lab_market").show(200),
        $(".typo_select").show(200),
            $(".vignet_lab_typop").show(200),
            $(".vignet_lab_typow").show(200),
            $(".vignet_lab_grille").show(200),
        $(".divers_select").show(200),
            $(".vignet_lab_photo").show(200),
            $(".vignet_lab_objet").show(200),
            $(".vignet_lab_conf").show(200)
        // cache   
        return false;
    });
});