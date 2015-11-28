$(document).ready(function(){
	$(".team-members img.second").hide();
 	$(".team-members img.first").hover(function(){
 		$(this).hide();
 		$(this).next("img.second").show();
 	},
 	function(){
 		$(this).show();
 		$(this).next("img.second").hide();

	});

});

