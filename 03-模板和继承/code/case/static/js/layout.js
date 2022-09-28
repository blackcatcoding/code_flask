var BASE_PATH = 'http://localhost:8000';
$('.kid-list-blog').click(function () {
    window.open(BASE_PATH + '/microblog/index', '_self');
});
$('.kid-list-quiz').click(function () {
    window.open(BASE_PATH + '/quiz/index', '_self');
});
$('.kid-list-game').click(function () {
    window.open(BASE_PATH + '/game/index', '_self');
});