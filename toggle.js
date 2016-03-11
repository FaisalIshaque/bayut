$(function(){


	
	$("#toggle-amenities").click(function(){
			$("#amenities-table").slideToggle("","linear","");
				
	});
	
	$("#toggle-map").click(function(){
			$("#map").slideToggle("","linear","");
				
	});

	$("#toggle-floorplan").click(function(){
			$("#floorplan").slideToggle("","linear","");
				
	});

	$("#hide-property").hide();
	$("#show-hide").click(function(){
		$("#hide-property").slideToggle("","linear","");
			if ($(this).val() == "View All") {
				$(this).val("Show Less");
			}
			else {
				$(this).val("View All");
			}
	});
});


