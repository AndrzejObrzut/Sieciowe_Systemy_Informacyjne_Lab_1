function hideList() {
	$.ajax({
   complete: function(){
   	if( !$('#demo').contents().length == 0){
    $("#demo").hide("slow", function(){
           
        });
   }}
 });
}

function showList() {
	$.ajax({
   complete: function(){
   	
    $("#demo").show("slow", function(){
        });
   }
 });
}

