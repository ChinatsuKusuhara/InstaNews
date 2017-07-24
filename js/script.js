$(document).ready(function(){
  $('.drop-down').on('change', function(event){
    event.preventDefault();
    
    var selected = $('.drop-down').val();
    var  url = 'https://api.nytimes.com/svc/topstories/v2'+ selected + '.json';  //translation from computer language to English
         url += '?' + $.param({
          'api-key': '3924f5cbfd774746a80d6b85a0aa79a0'
    })     //'+=' assigns the result of the var, '?' connects api keys to url, .param = parameter
    $.ajax({
      method: 'GET',
      url: url
    }) //end of .ajax 

  })  //end of .on
}); //end of doc.ready