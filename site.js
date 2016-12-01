$(document).ready(function() {
  $('#zipform').on('submit', function(event) {
    var loc = $('#zipcode').val();
    var lat;
    var lng;
    $.get(
      'https://www.zipcodeapi.com/rest/js-rTyMicsfWrUvifDkyeNHgt1EysudYy0pszcKLFZH6Udp9QJI5wqlZs0yUuMS3Niw/info.json/'+loc+'/degrees',
      function (data) {
        lat = data.lat;
        lng = data.lng;
        $('#print').append(
        document.createTextNode("https://www.google.com/maps/search/auto+repair/@" + lat +"," + lng +",11z/data=!3m1!4b1")
        );
      });
      event.preventDefault();
  });
});