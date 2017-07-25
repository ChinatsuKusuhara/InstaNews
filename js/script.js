$(document).ready(function(){
  $('.drop-down').on('change', function(){
    $('header').addClass('shrink');
    $('loader').show();
    
    var selected = $('.drop-down').val();
    var  url = 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json';  //translation from computer language to English
         url += '?' + $.param({
          'api-key': '3924f5cbfd774746a80d6b85a0aa79a0'
    })     //'+=' assigns the result of the var, '?' connects api keys to url, .param = parameter
    $.ajax({
      method: 'GET',
      url: url
    }) //end of .ajax 
    .done (function(data){
      var article = '';
      var results = data.results.filter(function(value){
            return value.multimedia.length >= 5;
          })  //multimdia array 
          results.splice(12);  // .splice reduce the set of matched elements to a subset specified by a range of indices.

      $.each(results, function(key, value){
        var images = value.multimedia[4].url, 
            abstract = value.abstract,
            newsUrl = value.url; //will take client to a linked site from News App
        article += '<li>';
        article += '<a href=' + newsUrl + '>' ;  //extracting news articles
        article += '<div class="background" style="background-image:url(' + images + ')" ><p class="abstract">'; //giving a class to the background, assign background, abstract class created.ccccccccccc
        article += abstract;  
        article += '</p></div></a></li>';
      });//end of .each
      
      $('.news').html(article)//to load within <ul>
      
     }) //end of .done
  })  //end of .on
}); //end of doc.ready