/* liste bouton de transformation */
$(document).ready(function(){
    $(".button_list").click(function(){
        $('#content').css({
            display: 'list-item',
            listStyle: 'none',
            paddingLeft: 'initial'
        });
    });
});
$(document).ready(function(){
    $(".button_list").click(function(){
        $('img').css({
            width: '5em'
        });
    });
});

$(document).ready(function(){
    $(".button_list").click(function(){
        $('.vignet_titre').css({
            float: 'right',
            paddingTop: '1.3em',
            paddingRight: '2em',
        });
    });
});
$(document).ready(function(){
    $(".button_list").click(function(){
        $('.vignet_texte').toggle();
    });
});
$(document).ready(function(){
    $(".button_list").click(function(){
        $('.vignet_tag').css({
            display: 'none'
        });
    });
});

$(document).ready(function(){
    $(".button_list").click(function(){
        $('.vignet').css({
            width: '25em',
            height: '5em'
        });
    });
});

/* mosaïque bouton de transformation */
$(document).ready(function(){
    $(".button_mosa").click(function(){
        $('#content').css({
            display: 'flex',
            paddingLeft: 'initial'
        });
    });
});

$(document).ready(function(){
    $(".button_mosa").click(function(){
        $('.vignet_titre').css({
            float: 'initial',
            paddingTop: 'initial',
            paddingRight: '8em'
        });
    });
});
$(document).ready(function(){
    $(".button_mosa").click(function(){
        $('.vignet_texte').show();
    });
});
$(document).ready(function(){
    $(".button_mosa").click(function(){
        $('.vignet_tag').css({
            display: 'initial'
        });
    });
});

$(document).ready(function(){
    $(".button_mosa").click(function(){
        $('img').css({
            width: '15em',
            float: 'initial'
        });
    });
});
$(document).ready(function(){
    $(".button_mosa").click(function(){
        $('img').css({
            display: 'initial'
        });
    });
});
$(document).ready(function(){
    $(".button_mosa").click(function(){
        $('.vignet').css({
            width: '15em',
            height: 'initial'
        });
    });
});
/* afficher / masquer */
$(document).ready(function(){
    $(".button_list").click(function(){
        $(".button_list").hide(200),
        $(".button_mosa").show(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_mosa").click(function(){
        $(".button_mosa").hide(200),
        $(".button_list").show(200);
        return false;
    });
});