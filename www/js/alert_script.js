//$(document).ready(function(){
	
	//$('#testing').click(function(){
		//var elem = $(this).closest('.item');
	function confirm_exit(){ 	
		$.confirm({
			'title'		: 'Delete Confirmation',
			'message'	: 'Are you sure want to exit?',
			'buttons'	: {
				'Yes'	: {
					'class'	: 'blue',
					'action': function(){
						//elem.slideUp();
						navigator.app.exitApp();
					}
				},
				'No'	: {
					'class'	: 'yellow',
					'action': function(){}	// Nothing to do in this case. You can as well omit the action property.
				}
			}
		});
	}
	//});
	
//});