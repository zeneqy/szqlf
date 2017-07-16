	 var dude = final_score.split('~');
	 var dude_length = dude.length-1;
	 var ans_A=0;
	 var ans_B=0;
	 for(var ac=0;ac<dude_length;ac++){
		 if(dude[ac]=='0'){
		  	ans_A++;
		}
		if(dude[ac]=='1'){
		    ans_B++;
		}
	 }
	 if(ans_A > ans_B ){
					msg='you\'re feminine. If you\'re a girl then you\'re quite feminine. If you\'re a guy then you\'re a bit girlish.';
				}
	else if(ans_B > ans_A ){
					msg='you\'re masculine. If you\'re a guy then you\'re quite masculine. If you\'re a girl then you\'re a bit tomboy-ish.';
				}			
				
	else if(ans_A == ans_B ){
					msg='You are in between feminine and masculine. Normal guy/girl.';
				}