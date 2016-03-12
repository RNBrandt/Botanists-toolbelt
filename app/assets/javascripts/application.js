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
  

  $(document).foundation();
  $('#arrowLeft').click(function(){
    $('#dataCarousel').animate({'margin-left': '-=1720px'}, 1000);
    // make an ajax request to root/options/12876876
    // receive a JSON
    // json = [{id: 123123123, text: "sdfsdfsdfds"}, {id: 123123123, text: "sdfsdfsdfds"}]
    // populate the divs using JSON data


  });

  $('#arrowRight').click(function(){
    $('#dataCarousel').animate({'margin-right': '-=1720px'}, 1000);
    $('#dataCarousel').show()
  });
  


});
