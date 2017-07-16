if(final_score <= 1){
					msg='He/she doesn\'t like you (even hate you).';
				}
				if(final_score >= 2 && final_score <= 6){
					msg='You are just friend (not close friend) for him/her.';
				}
				if(final_score >= 7 && final_score <= 11){
					msg='You are close/best friend for him/her.';
				}
				if(final_score >= 12 && final_score <= 19){
					msg='He/she potentially likes you.';
				}
				if(final_score >= 20){
					msg='He/she really likes you. What are you waiting for?!';
				}