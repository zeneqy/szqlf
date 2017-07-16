	 var dude = final_score.split('~');
	 var dude_length = dude.length-1;
	 for(var ac=0;ac<dude_length;ac++){
		switch(ac){
		case 0:
			if(dude[ac]=='0'){
		  		exp_msg1 ='You are attracted to a liberal guy/girl.';
			}
			if(dude[ac]=='1'){
			   exp_msg1 ='You are attracted to a nice and obedience guy/girl.';
			}
			if(dude[ac]=='2'){
		  		exp_msg1 ='You are attracted a cold personality but caring in the inside.';
			}
			if(dude[ac]=='3'){
			   exp_msg1 ='You are attracted to a neat and charming guy/girl.';
			}
		break;
		case 1:
			if(dude[ac]=='0'){
		  		exp_msg2 ='When approaching someone you like, You\'re so inconsistent.';
			}
			if(dude[ac]=='1'){
			   exp_msg2 ='When approaching someone you like, you\'re impatient to get the result.';
			}
			if(dude[ac]=='2'){
		  		exp_msg2 ='When approaching someone you like, you\'re creative and not a boring person.';
			}
			if(dude[ac]=='3'){
			   exp_msg2 ='When approaching someone you like, you\'re very straightforward.';
			}
		break;	
		case 2:
			if(dude[ac]=='0'){
		  		exp_msg3 ='You want to show him/her that you are very flexible.';
			}
			if(dude[ac]=='1'){
			   exp_msg3 ='You want to show him/her that you are very stylish/modist.';
			}
			if(dude[ac]=='2'){
		  		exp_msg3 ='You want to show him/her that you are very loyal to your partner.';
			}
			if(dude[ac]=='3'){
			   exp_msg3 ='You want to show him/her that you are very optimistic.';
			}
		break;
		case 3:
			if(dude[ac]=='0'){
		  		exp_msg4 ='You don\'t like bad temper guy/girl.';
			}
			if(dude[ac]=='1'){
			   exp_msg4 ='You don\'t like an insensitive guy/girl.';
			}
			if(dude[ac]=='2'){
		  		exp_msg4 ='You don\'t like an insecure guy/girl.';
			}
			if(dude[ac]=='3'){
			   exp_msg4 ='You don\'t like a \'dictactor\' guy/girl.';
			}
		break;
		case 4:
			if(dude[ac]=='0'){
		  		exp_msg5 ='You want to be Loved and cared forever.';
			}
			if(dude[ac]=='1'){
			   exp_msg5 ='Relationship between you and your partner is built on trust and openess.';
			}
			if(dude[ac]=='2'){
		  		exp_msg5 ='You think, understanding is key of good relationship.';
			}
			if(dude[ac]=='3'){
			   exp_msg5 ='You want a long lasting and serious relationship.';
			}
		break;
		case 5:
			if(dude[ac]=='0'){
		  		exp_msg6 ='You\'re a free guy/girl. Marriage is not in your dictionary.';
			}
			if(dude[ac]=='1'){
			   exp_msg6 ='You get seduced easily.';
			}
			if(dude[ac]=='2'){
		  		exp_msg6 ='You consistently not cheating (loyal).';
			}
			if(dude[ac]=='3'){
			   exp_msg6 ='You truely Love him/her.';
			}
		break;
		case 6:
			if(dude[ac]=='0'){
		  		exp_msg7 ='You don\'t believe in a happy married.';
			}
			if(dude[ac]=='1'){
			   exp_msg7 ='Marriage is sacred for you.';
			}
			if(dude[ac]=='2'){
		  		exp_msg7 ='You don\'t want to get married.';
			}
			if(dude[ac]=='3'){
			   exp_msg7 ='You want to get married but not sure what is going to happen to your marriage.';
			}
		break;
		case 7:
			if(dude[ac]=='0'){
		  		exp_msg8 ='You think, Love is a two-side commitment.';
			}
			if(dude[ac]=='1'){
			   exp_msg8 ='You want to get married early, but things don\'t happen as you wish.';
			}
			if(dude[ac]=='2'){
		  		exp_msg8 ='You are so confident to get your ideal match.';
			}
			if(dude[ac]=='3'){
			   exp_msg8 ='You like being single and have fun with many guys/girls.';
			}
		break;
		}//endswitch;
	 }//endfor
	var msg = exp_msg1+' '+exp_msg2+' '+exp_msg3+' '+exp_msg4+' '+exp_msg5+' '+exp_msg6;