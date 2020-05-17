(function () {
    var token = $.cookie('token');
    if (token !== undefined) {
        return;
    }
    var message = 'Password';
    while (true) {
        var password = prompt(message, '');
        if (password === 'jhua0037') {
            $.cookie('token', 'token', {path: '/'});
            break;
        } else {
            message = 'Error！';
        }
    }
})();