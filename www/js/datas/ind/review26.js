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
					msg='Kamu termasuk cewek/cowok yang feminim. Jika kamu cewek, artinya kamu cewek feminim. Jika kamu cowok, artinya kamu cowok kemayu.';
				}
	else if(ans_B > ans_A ){
					msg=' kamu termasuk cewek/cowok yang maskulin. Jika kamu cewek, artinya kamu tomboy. Jika kamu cowok, artinya kamu macho.';
				}			
				
	else if(ans_A == ans_B ){
					msg='Kamu tak feminim, ataupun maskulin. Kamu cewek/cowok netral.';
				}