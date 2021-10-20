$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    
    const name = $("#userName").val();
    $("#nameSection").append("To: " + name);

    $("#invisibility").show();
    $("#formOne").hide();
  });
}); 