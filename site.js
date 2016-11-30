$(document).ready(function() {
  $('#w-form').on('submit', function(event) {
    var loc = $('#location').val();
    $.get(
      'https://www.zipcodeapi.com/rest/js-rTyMicsfWrUvifDkyeNHgt1EysudYy0pszcKLFZH6Udp9QJI5wqlZs0yUuMS3Niw/info.json/'+loc+'/degrees',
      function (data) {
        $('#print').append(
          <p><a href ="'https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=find+auto+shop+around+you&rflfq=1&rlha=0&rllag='+data.lat+','+data.lng+'&tbm=lcl&tbs=lf:1,lf_ui:2,lf_pqs:EAE'"></a></p>
        );
      });
      event.preventDefault();
  });
});