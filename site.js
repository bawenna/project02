$(document).ready(function() {
  $('#w-form').on('submit', function(event) {
    var loc = $('#location').val();
    $.get(
      'https://www.zipcodeapi.com/rest/js-rTyMicsfWrUvifDkyeNHgt1EysudYy0pszcKLFZH6Udp9QJI5wqlZs0yUuMS3Niw/info.json/'+loc+'/degrees',
      function (data) {
            var lat = Math.round(data.lat);
    var lng = Math.round(data.lng);
        $('#print').append(
          document.createTextNode(lat+lng)
        );
      });
      event.preventDefault();
  });
});