$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".dropdown-menu li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$(function(){
  $('#frame1').click(function(){ 
      if(!$('#iframe').length) {
              $('#iframeHolder').html('<iframe width="800" height="300" src="https://www.youtube.com/embed/QuR969uMICM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      }
  });   
});

$(function(){
  $('#frame2').click(function(){ 
      if(!$('#iframe').length) {
              $('#iframeHolder').html('<iframe width="800" height="300" src="https://www.youtube.com/embed/OhCzX0iLnOc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      }
  });   
});
$(function(){
  $('#frame3').click(function(){ 
      if(!$('#iframe').length) {
              $('#iframeHolder').html('<iframe width="800" height="300" src="https://www.youtube.com/embed/k53LUZxUF50" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
      }
  });   
});






