$(document).ready(function(){

    if (!$.cookie('offerTimer')){
        var now = new Date(); 
        timer = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 3);
        $.cookie('offerTimer', timer.format("yyyy, mm, dd"), { expires: 7, path: '/' });
    }

    var cookie = $.cookie('offerTimer');

    $('#until3d').countdown({until: new Date(cookie), format: 'HMS'});
});