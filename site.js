$(document).ready(function() {
  $('#w-form').on('submit', function(event) {
    var loc = $('#location').val();
    $.get(
      'https://www.zipcodeapi.com/rest/gL0WYM5K5cwQDKCWQudvv6qeWwqV2kVi6Wf5JlPOxlEb5g8WKmrgtRupoVkqggJm/info.json/'+loc+'/degrees',
      function (data) {
        $('#print').append(
          document.createTextNode("Lat/Long: " + data.lat  + ", " + data.lng)
        );
      });
      event.preventDefault();
  });
});