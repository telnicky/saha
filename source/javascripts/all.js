//= require jquery-1.9.1.min.js
//= require bootstrap/bootstrap.js
//= require underscore-min.js

$(function() {
    var page = $("title").text();
    var selector = ".nav ." + page;
    $(".nav > .active").removeClass("active");
    $(selector).addClass("active");
});

$.ajax({
    type: "GET",
    url : "http://api.tumblr.com/v2/blog/saha-labs.tumblr.com/posts",
    dataType: "jsonp",
    data: {
        api_key : "v1FQMVG7KLZwyhUvHbMOkYbPXe1CWFSrIwTvZNLV8rwgX5Cckv",
        jsonp : "populateLogs"
    }
});

buildHtml = function (posts) {
  
  var logs = _.map(posts, function(post) {
    var log = "<h2>" + 
                post.title + 
              "</h2>" +
              post.body +
              "<hr>";
    return log;
  });

  var els = _.reduce(logs, function(el, log) {
    return el += log;
  }, '');

  return els;
}

populateLogs = function (data) {
  if(data.meta.status == 200) {
    elements = buildHtml(data.response.posts);
    $('.logs-container').prepend(elements);
  }
}