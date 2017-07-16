	 var dude = final_score.split('~');
	 var dude_length = dude.length-1;
	 var ans_A=0;
	 var ans_B=0;
	 var ans_C=0;
	 for(var ac=0;ac<dude_length;ac++){
		 if(dude[ac]=='0'){
		  	ans_A++;
		}
		if(dude[ac]=='1'){
		    ans_B++;
		}
		if(dude[ac]=='2'){
		    ans_C++;
		}
	 }
	 if( (ans_A >ans_B) && (ans_A >ans_C) )paling_besar='A';
	 if( (ans_B >ans_A) && (ans_A >ans_C) )paling_besar='B';
	 if( (ans_C >ans_A) && (ans_A >ans_B) )paling_besar='C';
	 if(paling_besar= 'A' ){
					msg='You are emotionally mature to handle the responsibility of a relationship. A long distance relationship won\'t be a problem for you.';
				}
	else if(paling_besar= 'B' ){
					msg='You shouldn\'t be in a long distance relationship, unless you are willing to improve your commitment and loyalty.';
				}			
				
	else if(paling_besar= 'C' ){
					msg='Long distance relationship is not made for you. You aren\'t emotionally mature enough to handle the responsibility of a relationship.';
				}				
	