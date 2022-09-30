var BASE_PATH = 'http://127.0.0.1:8000';
$('.kid-list-blog').click(function () {
    window.open(BASE_PATH + '/', '_self');
});
$('.kid-list-quiz').click(function () {
    window.open(BASE_PATH + '/quiz', '_self');
});
$('.kid-list-game').click(function () {
    window.open(BASE_PATH + '/game', '_self');
});