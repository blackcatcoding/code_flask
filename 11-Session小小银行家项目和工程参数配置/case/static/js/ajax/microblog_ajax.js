function loading_more(showMicroblog) {
    $.get('/microblog/load', function (result) {
        showMicroblog(result);
    });
}
