/* work section */
$(document).ready(function(){
    $(".button_dg").click(function(){
        $(".vignet_dg").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_do").click(function(){
        $(".vignet_do").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_dm").click(function(){
        $(".vignet_dm").fadeToggle(200);
        return false;
    });
});
/* cv section */
$(document).ready(function(){
    $(".button_edit").click(function(){
        $(".vignet_edit").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_comp").click(function(){
        $(".vignet_comp").fadeToggle(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_form").click(function(){
        $(".vignet_form").fadeToggle(200);
        return false;
    });
});
/* header panels */
$(document).ready(function(){
    $(".button_work").click(function(){
        $(".cv_select").hide(200),
        $(".work_select").show(200),
        $(".vignet_form").hide(200),
        $(".vignet_comp").hide(200)
        $(".vignet_edit").hide(200),
        $(".vignet_dg").show(200),
        $(".vignet_do").show(200),
        $(".vignet_dm").show(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_cv").click(function(){
        $(".work_select").hide(200),
        $(".cv_select").show(200),
        $(".vignet_form").show(200),
        $(".vignet_comp").show(200)
        $(".vignet_edit").show(200),
        $(".vignet_dg").hide(200),
        $(".vignet_do").hide(200),
        $(".vignet_dm").hide(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_clear").click(function(){
        $(".cv_select").hide(200), 
        $(".work_select").hide(200),
        $(".vignet_form").hide(200),
        $(".vignet_comp").hide(200),
        $(".vignet_edit").hide(200),
        $(".vignet_dg").hide(200),
        $(".vignet_do").hide(200),
        $(".vignet_dm").hide(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_all").click(function(){
        $(".cv_select").show(200), 
        $(".work_select").show(200),
        $(".vignet_form").show(200),
        $(".vignet_comp").show(200),
        $(".vignet_edit").show(200),
        $(".vignet_cont").show(200),
        $(".vignet_dg").show(200),
        $(".vignet_do").show(200),
        $(".vignet_dm").show(200);
        return false;
    });
});
$(document).ready(function(){
    $(".button_contact").click(function(){
        $(".cv_select").hide(200), 
        $(".work_select").hide(200),
        $(".vignet_form").hide(200),
        $(".vignet_comp").hide(200),
        $(".vignet_edit").hide(200),
        $(".vignet_cont").show(200),
        $(".vignet_dg").hide(200),
        $(".vignet_do").hide(200),
        $(".vignet_dm").hide(200);
        return false;
    });
});