$('button').on('click', function() {
   $.getJSON(
      'https://api.github.com/users/octocat/repos?client_id=a37c6077034750f953fc&client_secret=8ff75658b21aa8c5830b7efeae85f559b4d36a02' )
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