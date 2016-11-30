$(document).ready(function() {
  $('#w-form').on('submit', function(event) {
    var loc = $('#location').val();
    var lat;
    var lng;
    $.get(
      'https://www.zipcodeapi.com/rest/js-rTyMicsfWrUvifDkyeNHgt1EysudYy0pszcKLFZH6Udp9QJI5wqlZs0yUuMS3Niw/info.json/'+loc+'/degrees',
      function (data) {
        $('#print').append(
        lat = Math.round(data.lat);
        lng = Math.round(data.lng);
          document.createTextNode("Lat/Long" + lat + "," + lng);
        );
      });
      event.preventDefault();
  });
});