	 var dude = final_score.split('~');
	 var dude_length = dude.length-1;
	 for(var ac=0;ac<dude_length;ac++){
		 switch(ac){
		 case 0:
			 if(dude[ac]=='0'){
				exp_msg1 ='You can fall in Love easily.';
			}
			if(dude[ac]=='1'){
			   exp_msg1 ='You need time to fall in Love with someone. You think, quality of relationship is the most important.';
			}
		break;
		case 1:
			if(dude[ac]=='0'){
		    	tulus = '0%';
			}
			if(dude[ac]=='1'){
				tulus = '10%';
			}
			if(dude[ac]=='2'){
				tulus = '20%';
			}
			if(dude[ac]=='3'){
				tulus = '30%';
			}
			if(dude[ac]=='4'){
		    	tulus = '40%';
			}
			if(dude[ac]=='5'){
				tulus = '50%';
			}
			if(dude[ac]=='6'){
				tulus = '60%';
			}
			if(dude[ac]=='7'){
				tulus = '70%';
			}
			if(dude[ac]=='8'){
		    	tulus = '80%';
			}
			if(dude[ac]=='9'){
				tulus = '90%';
			}
			if(dude[ac]=='10'){
				tulus = '100%';
			}
			exp_msg2 = 'Your loyalty to him/her: '+tulus+'.';
		break;	
		case 2:
			if(dude[ac]=='0'){
		  		exp_msg3 ='You prefer to avoid (run away from) the problems in the first place.';
			}
			if(dude[ac]=='1'){
			   exp_msg3 ='You solve your problems quickly.';
			}
		break;
		case 3:
			if(dude[ac]=='0'){
		  		exp_msg4 ='You think, not necessary to see him/her often.';
			}
			if(dude[ac]=='1'){
			   exp_msg4 ='You think, you have to see him/her often.';
			}
		break;
		case 4:
			if(dude[ac]=='0'){
		  		exp_msg5 ='you want to change him/her for your own good.';
			}
			if(dude[ac]=='1'){
			   exp_msg5 ='You can accept him/her the way he/she is.';
			}
		break;
		case 5:
			if(dude[ac]=='0'){
		  		exp_msg6 ='You are unable to sustain a long term relationship, even a small difference could lead to breakup.';
			}
			if(dude[ac]=='1'){
			   exp_msg6 ='You want to stay faithful to your partner forever.';
			}
		break;
		}//endswitch;
	 }//endfor
	msg = exp_msg1+' '+exp_msg3+' '+exp_msg4+' '+exp_msg5+' '+exp_msg6+' '+exp_msg2;