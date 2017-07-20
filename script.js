$('button').on('click', function() {
   $.getJSON(
      '' )
    .done(function(data) {
    console.log(data);
      $.each(data, function( key, repos){
        console.log(repos.blobs_url);
      $(".repo-list").append("<li>" + repos.name + "</li>");
    })
     .fail(function(){
        alert("URL broken")
      })
   });
});