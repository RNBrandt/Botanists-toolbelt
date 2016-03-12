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
