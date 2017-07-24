$(document).ready(function(){
  $('.drop-down').on('change', function(event){
    event.preventDefault();
    
   $('.drop-down').empty();

    $.ajax({
      method= 'GET',
      url= 'https://api.nytimes.com/svc/topstories/v2/home.json'
    }) //end of .ajax
    
    .done (function(data){
      console.log(data);
      $.each(data.results, function(key, value){
        $('.drop-down').append('<selection> <option src="' + value.news + '">' + value.collectionName + '</selection>');
      })//end of .each
     }) //end of .done

    .fail(function(){
      console.log('anything');
     $(".drop-down").append("<li>No Results</li>");
    }) //end of .fail
  }) //end of .on

});  //end of doc.ready
