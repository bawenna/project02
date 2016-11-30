$(document).ready(function() {
  $('#w-form').on('submit', function(event) {
    var loc = $('#location').val();
    var lat;
    var lng;
    $.get(
      'https://www.zipcodeapi.com/rest/js-rTyMicsfWrUvifDkyeNHgt1EysudYy0pszcKLFZH6Udp9QJI5wqlZs0yUuMS3Niw/info.json/'+loc+'/degrees',
      function (data) {
        lat = Math.round(data.lat);
        lng = Math.round(data.lng);
        $('#print').append(
        document.createTextNode("Lat/Long" + lat + "," + lng);
        );
      });
      event.preventDefault();
  });
});