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
	 if(ans_A > ans_B && ans_A > ans_C ){
					msg='Your partner is very dominating. You don\'t argue him/her (for the sake of relationship).';
				}
	else if(ans_B > ans_A && ans_B > ans_C ){
					msg='It\'s a healthy relationship. No one is more dominant than the other.';
				}			
				
	else if(ans_C > ans_A && ans_C > ans_B ){
					msg='You are more dominant than your partner.';
				}
	else if(ans_A == ans_C && ans_B==0 ){
					msg='Both of you are equally egoistic. Both want to dominate the relationship.';
				}
	else if(ans_A == ans_B || ans_B==ans_C ){
					msg='You or your partner want to dominate each other, but in the end both can compromise on disagreement.';
				}									
	
	else {
		if(ans_B > ans_A || ans_B > ans_C ){
					msg='You two solve problems in a professional manner, when there is a disagreement.';
				}	else {
			msg='It\'s gonna be a long argument between you two when there is a disagreement.';
			}
	}