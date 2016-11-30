$(document).ready(function() {
  $('#w-form').on('submit', function(event) {
    var loc = $('#location').val();
    $.get(
      'https://www.zipcodeapi.com/rest/js-rTyMicsfWrUvifDkyeNHgt1EysudYy0pszcKLFZH6Udp9QJI5wqlZs0yUuMS3Niw/info.json/'+loc+'/degrees',
    var lat = Math.round(data.lat)  
    var lng = Math.round(data.lng)
      function (data) {
        $('#print').append(
          document.createTextNode(lat+lng)
        );
      });
      event.preventDefault();
  });
});