$(document).ready(function(){


  var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
  url += '?' + $.param({
    'api-key': '3924f5cbfd774746a80d6b85a0aa79a0'
  });

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
    console.log(result);
    $('')
    
    $('.news').append(data);
    console.log(data);

  }).fail(function(err) {
    throw err;
  });


});  //end of doc.ready

