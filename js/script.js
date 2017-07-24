$(document).ready(function(){
  $('.drop-down').on('change', function(){
    
    var selected = $('.drop-down').val();
    var  url = 'https://api.nytimes.com/svc/topstories/v2/'+ selected + '.json';  //translation from computer language to English
         url += '?' + $.param({
          'api-key': '3924f5cbfd774746a80d6b85a0aa79a0'
    })     //'+=' assigns the result of the var, '?' connects api keys to url, .param = parameter
    $.ajax({
      method: 'GET',
      url: url
    }) //end of .ajax 
    .done (function(data){
      var article = '';
      var dataResults = data.results.filter(function(value){
            return value.multimedia.length >= 5;
          })  //.filter reduces the set of matched elements 
          dataResults.splice(12);  // .splice reduce the set of matched elements to a subset specified by a range of indices.

      $.each(dataResults, function(key, value){
        var images = value.multimedia[4].url, 
            abstract = value.abstract,
            newsUrl = value.url; //will take client to a linked site from News App

        article += '<li>';
        article += '<a href=' + newsUrl + '>' ;  //extracting news articles
        article += '<div class="background" style="background-image:url('; //giving a class to the background
        article += images; //images will become a background
        article += ') "><p class="abstract">';  //created a class called abstract
        article += abstract;  
        article += '</p></div></a></li>';
      });//end of .each
      
      $('.news').html(article)//to load within <ul>
      
     }) //end of .done
  })  //end of .on
}); //end of doc.ready