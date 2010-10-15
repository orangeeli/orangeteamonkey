$(document).ready(function()
{
        var email = '';
        var firstPart = 'eliseu';
        var dot = '.';
        var secondPart = 'martinho';
        var at = '@';
        var host = 'gmail.com';
        email = firstPart+dot+secondPart+at+host;
        email = '<a href=\"mailto:'+email+'\">'+email+'</a>';
        $('#email').html(email);
});
