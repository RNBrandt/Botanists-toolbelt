// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ 


//data.photos.photo[2].id
//data.photos.photo[2].server
//data.photos.photo[2].farm
//data.photos.photo[2].secret
//data.photos.photo[2].owner


   $.ajax({
        type: "GET",
        url: "https://api.flickr.com/services/rest/?&method=flickr.photos.search&tags=angiosperm&safe_search=1&per_page=20&api_key=79ea624274bb06e96bf9e06fd2a00c74&format=json&jsoncallback=?",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        var flickrInfo = document.getElementById("flickr-template").innerHTML;
        var template = Handlebars.compile(flickrInfo)
        var flickrData = template({
          photos: data.photos.photo
        });
        document.getElementById("flickr_photos").innerHTML += flickrData;







 
        },
        error: function (errorMessage) {
          console.log(errorMessage);
        }
    });



   $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=hadrian's_wall&callback=?&redirects",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
 
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
 
            // remove any references
            blurb.find('sup').remove();
 
            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            $('#tabDetail').html($(blurb).find('p'));
 
        },
        error: function (errorMessage) {
        }
    });















  $(document).foundation();

  $('#dataCarousel').on('click', '#arrowLeft', function(e){
    e.preventDefault();
    var optionID = $(this).attr('data-id')
    
    //Fade out once complete run ajax
    $('#panel-left').css('border', '4px dotted #ec5840');
    $("#dataCarousel").animate({opacity: '0'}, function(){
      // ajax request starts
      $.ajax({
        method: "get",
        url: "/options/" + optionID
      })
      .done(function(data) {
        console.log(data);
        $("#dataCarousel").html(data).animate({opacity: '1'});
      })
      .fail(function() {
        console.log("fail")
      })
      // ajax request ends      
    });
    //Fade outAnimation Complete
  });

  $('#dataCarousel').on('click', '#arrowRight', function(e){
    e.preventDefault();
    var optionID = $(this).attr('data-id')
    
    //Fade out once complete run ajax
    $('#panel-right').css('border', '4px dotted #ec5840');
    $("#dataCarousel").animate({opacity: '0'}, function(){
      // ajax request starts
      $.ajax({
        method: "get",
        url: "/options/" + optionID
      })
      .done(function(data) {
        console.log(data);
        $("#dataCarousel").html(data).animate({opacity: '1'});
      })
      .fail(function() {
        console.log("fail")
      })
      // ajax request ends      
    });
    //Fade outAnimation Complete
  });
  


});
