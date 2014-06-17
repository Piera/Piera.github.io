$(document).ready(function(){
  $('.list-item input[type="checkbox"]').click(function() {
  	if (this.checked) {
  	   $(this).parent().addClass("checked-item");
    } else 
    { 
  	   $(this).parent().removeClass("checked-item");
	}
	});

//make the edit button disappear when clicked
  $('.edit-btn').click(function(){
  	$(this).hide();
//make the list item and checkbook disappear when clicked
  	$(this).siblings(".not-editing").hide();
//make the input box show up when edit button clicked
	  $(this).siblings(".editing").show();
   });

//this is the save button stuff!
  $('.save-btn').click(function(){
    console.log("I clicked");
//make the save button disappear
    $(this).hide();
//the input box disappears too
    $(this).siblings('.editing').hide();
//show the new input
//make the edit button show up again too
    $(this).siblings('.not-editing').show();
//Show the edited text after Save is clicked
    var textInput = $(this).siblings('.edit-text').val();
    console.log(textInput);
    $(this).siblings('div.not-editing').find('.item-label').text(textInput);
  });



});