// Code goes here

$(document).ready(function() {
  $(".change").click(function(e) {
  		$('body').hide();
  		var link = $(this).attr('data-theme');
   		$('link').attr('href','//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/'+link+'/bootstrap.min.css');
   		$('body').fadeIn(2000);
   		e.preventdefault();
  });
});
