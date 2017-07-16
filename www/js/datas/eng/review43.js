	 var dude = final_score.split('~');
	 var dude_length = dude.length-1;
	 var ans_A=0;
	 var ans_B=0;
	 var ans_C=0;
	 var ans_D=0;
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
		if(dude[ac]=='3'){
		    ans_D++;
		}
	 }
	 if(ans_A >= 4 ){
					msg='You are a good Ex. You and your Ex are still good friends.';
				}
	else if(ans_B >= 4 ){
					msg='You are a dilemmatic guy/girl. You still Love him/her after breakup.';
				}			
				
	else if(ans_C >= 4 ){
					msg='You are a mean guy/girl. You seek for revenge after breakup.';
				}
	else if(ans_D >= 4 ){
					msg='You want to forget everything about him/her. Erase him/her from your memory and your phone book.';
				}						
	
	else {
		msg='You are very incosistent guy/girl. You don\'t know what exactly you want/do. It\'s lucky for him/her to break up with you.';
	}