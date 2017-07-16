	 var dude = final_score.split('~');
	 var dude_length = dude.length-1;
	 var idealis=0;
	 var realistis=0;
	 var positif=0;
	 var romantis=0;
	 for(var ac=0;ac<dude_length;ac++){
		switch(ac){
		case 0:
			if(dude[ac]=='0'){
				idealis++;
			}
		break;
		case 1:
			if(dude[ac]=='1'){
				realistis++;
			}
		break;
		case 2:
			if(dude[ac]=='1'){
				idealis++;
			}
		break;
		case 3:
			if(dude[ac]=='1'){
				positif++;
			}
		break;
		case 4:
			if(dude[ac]=='0'){
				romantis++;
			}
		break;
		case 5:
			if(dude[ac]=='0'){
				realistis++;
			}
		break;
		case 6:
			if(dude[ac]=='1'){
				romantis++;
			}
		break;
		case 7:
			if(dude[ac]=='1'){
				positif++;
			}
		break;
		}
	 }
	 if(idealis==0 ){
					ext_msg_idealis='You are not idealistic at all.';
				}
	if(romantis==0 ){
					ext_msg_romantis='You are not romantic at all.';
				}
	if(positif==0 ){
					ext_msg_positif='You always think negatively.';
				}
	if(realistis==0 ){
					ext_msg_realistis='You are not realistic.';
				}									
	 if(idealis==1 ){
					ext_msg_idealis='You are a bit idealistic.';
				}
	if(romantis==1 ){
					ext_msg_romantis='You are a bit romantic.';
				}
	if(positif==1 ){
					ext_msg_positif='You are a bit positive.';
				}
	if(realistis==1 ){
					ext_msg_realistis='You are bit realistic.';
				}
	if(idealis==2 ){
					ext_msg_idealis='You\'re idealistic person. You have your own thought about ideal Love.';
				}
	if(romantis==2 ){
					ext_msg_romantis='You\'re romantic person. You really adore Love.';
				}
	if(positif==2 ){
					ext_msg_positif='You\'re positive person. You always see the best side of Love.';
				}
	if(realistis==2 ){
					ext_msg_realistis='You\'re realistic person. Love must adapt not vice versa.';
				}
	msg = ext_msg_idealis+' '+ext_msg_romantis+' '+ext_msg_positif+' '+ext_msg_realistis;	