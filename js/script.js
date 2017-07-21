$(document).ready(function(){
  $('.drop-down').on('change', function(event){
    event.preventDefault();
    $.ajax({
      method= 'GET',
      dataType= 'jsonp',
      url= 'https://api.nytimes.com/svc/topstories/v2/home.json'+$(".drop-down").val().replace(" ", "+")
    }) //end of .ajax

  }); //end of .on
});  //end of doc.ready

