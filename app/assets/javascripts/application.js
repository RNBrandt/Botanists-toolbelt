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
//= require_tree .

$(function(){ 

$(document).foundation();
$('#div-search').show();
$('#div-tabs').hide();
$('#wikipediaDiv').hide();
$('#flickrDiv').hide();

  // Capture tooltip click
  $('.has-tip, #tab-wikipedia').on('click', function(e){
      $('#div-search').hide();
      $('#div-tabs').show();
      $('#wikipediaDiv').show();
      $('#flickrDiv').hide();
      $('#tab-flickr').removeClass('alert');
      $('#tab-wikipedia').addClass('alert');


      var $wikipediaKeyword = $(this).attr('data-keyword');
      $('#tab-wikipedia').attr("data-keyword", $wikipediaKeyword)
      $('#tab-flickr').attr("data-keyword", $wikipediaKeyword)
      $('#tab-twitter').attr("data-keyword", $wikipediaKeyword)


      $wikipediaKeyword = $wikipediaKeyword.toLocaleLowerCase().replace(/ /g,"_");
      // API Request to Wikipedia
      $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=" + $wikipediaKeyword + "&callback=?&redirects",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",

        success: function (data, textStatus, jqXHR) {
          try { 
            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            
            // remove links as they will not work
            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });

            // remove any references
            blurb.find('sup').remove();

            // remove cite error
            blurb.find('.mw-ext-cite-error').remove();
            blurb = ($(blurb).find('p'));

            // Handlebars Template Starts Here
            var wikipediaInfo = document.getElementById("wikipedia-template").innerHTML;
            var template = Handlebars.compile(wikipediaInfo)
            var wikipediaData = template({
              title: $wikipediaKeyword,
              info: blurb
            });
            document.getElementById("wikipediaDiv").innerHTML = wikipediaData;
            // Handlebars Template Ends Here
          }
          
          catch(err) {
            console.log("======333333=====")
            console.log("Wikipedia Fetch Error");
            document.getElementById("wikipediaDiv").innerHTML = '<h4>Sorry, Wikipedia does not have an entry for this keyword...</h4>';
          }
        },

        error: function (errorMessage) {
        }
      });
      // API Request to Wikipedia


  });
  // Capture tooltip click

  // Capture flickr click
  $('#tab-flickr').on('click', function(e){
    console.log("Flickr Tab Clicked")
    $('#wikipediaDiv').hide();
    $('#flickrDiv').show();
    $('#tab-flickr').addClass('alert');
    $('#tab-wikipedia').removeClass('alert');
    $('#tab-twitter').removeClass('alert');
    var $flickrKeyword = $(this).attr('data-keyword');
    //data.photos.photo[2].id
    //data.photos.photo[2].server
    //data.photos.photo[2].farm
    //data.photos.photo[2].secret
    //data.photos.photo[2].owner


   $.ajax({
        type: "GET",
        url: "https://api.flickr.com/services/rest/?&method=flickr.photos.search&tags=" + $flickrKeyword + "&safe_search=1&per_page=20&api_key=79ea624274bb06e96bf9e06fd2a00c74&format=json&jsoncallback=?",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
          console.log("======444444=====")
          console.log(data);
          console.log("===========")
          console.log($flickrKeyword)
          console.log("===========")
          var flickrInfo = document.getElementById("flickr-template").innerHTML;
          var template = Handlebars.compile(flickrInfo)
          var flickrData = template({
            title: $flickrKeyword,
            photos: data.photos.photo
          });

          document.getElementById("flickr_photos").innerHTML = flickrData;
        },
        error: function (errorMessage) {
          console.log("======555555=====")
          console.log(errorMessage);
        }
    });
  });

  // Capture twitter click
  $('#tab-twitter').on('click', function(e){
    console.log("Twitter Tab Clicked")
    $('#wikipediaDiv').hide();
    $('#flickrDiv').hide();
    $('#twitterDiv').show();
    $('#tab-flickr').removeClass('alert');
    $('#tab-wikipedia').removeClass('alert');
    $('#tab-twitter').addClass('alert');
    var $twitterKeyword = $(this).attr('data-keyword');
    // ajax request starts
    $.ajax({
      method: "get",
      url: "/options/twitter/"
    })
    .done(function(data) {
      console.log(data);
      document.getElementById("twitterDiv").innerHTML = data;
    })
    .fail(function() {
      console.log("fail")
    })
  // ajax request ends
  });

  // Capture close click
  $('#tab-close').on('click', function(e){
    $('#div-tabs').hide();
    $('#wikipediaDiv').hide();
    $('#flickrDiv').hide();
    $('#div-search').show();
    $('#tab-flickr').removeClass('alert');
    $('#tab-wikipedia').removeClass('alert');
  });
 
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
