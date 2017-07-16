(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
        $("#homebtn").click(function(evt)
        {
         activate_subpage("#mainsub"); 
        });
        $("#tab1").click(function(evt)
        {
			set_default_height();
		 	$('#tab2_page').hide();
			$('#tab3_page').hide();
			$('#tab1_page').show();
			activate_subpage("#tab1_page");
        });
        $("#tab2").click(function(evt)
        {	
			set_default_height();
			$('#tab1_page').hide();
			$('#tab3_page').hide();
			$('#tab2_page').show();
         	activate_subpage("#tab2_page");
			
        });
        $("#tab3").click(function(evt)
        {
			set_default_height();
			$('#tab1_page').hide();
			$('#tab2_page').hide();
			$('#tab3_page').show();
         	activate_subpage("#tab3_page");
        });
}
 $(document).ready(register_event_handlers);
})();