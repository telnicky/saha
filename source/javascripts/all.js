//= require jquery-1.9.1.min.js
//= require bootstrap/bootstrap.js

$(function() {
    var page = $("title").text();
    var selector = ".nav ." + page;
    $(".nav > .active").removeClass("active");
    $(selector).addClass("active");
});