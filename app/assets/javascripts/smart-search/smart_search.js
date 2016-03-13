/*jslint  browser: true, white: true, plusplus: true */
/*global $, families */

$(function () {


    'use strict';

    var familiesArray = $.map(families, function (value, key) { return { value: value, data: key }; });


    // Initialize ajax autocomplete:
    $('#autocomplete-ajax').autocomplete({
        // serviceUrl: '/autosuggest/service/url',
        lookup: familiesArray,
        lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
            return re.test(suggestion.value);
        },
        onSelect: function(suggestion) {
            $('#selction-ajax').html('You selected: ' + suggestion.value + ', ' + suggestion.data);
        },
        onHint: function (hint) {
            $('#autocomplete-ajax-x').val(hint);
        },
        onInvalidateSelection: function() {
            $('#selction-ajax').html('You selected: none');
        }
    });


    // Search Form Submission Capture
    $('form').on('submit', function(e){
        e.preventDefault();
        console.log("Search Form Submitted");

        var $data = $(this).serialize();
        console.log($data)

    // ajax request starts
      $.ajax({
        method: "get",
        url: "/family/",
        data: $data
      })
      .done(function(data) {
        console.log(data);
        $('#view_index').html(data);
      })

      .fail(function() {
        console.log("fail")
      })
    // ajax request ends






    });
    // Search Form Submission Capture















});