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
					ext_msg_idealis='Kamu sama sekali tak idealis.';
				}
	if(romantis==0 ){
					ext_msg_romantis='Kamu sama sekali tak romantis.';
				}
	if(positif==0 ){
					ext_msg_positif='Kamu selalu berpikiran negatif.';
				}
	if(realistis==0 ){
					ext_msg_realistis='Kamu kurang realistis.';
				}									
	 if(idealis==1 ){
					ext_msg_idealis='Kamu agak idealis.';
				}
	if(romantis==1 ){
					ext_msg_romantis='Kamu agak romantis.';
				}
	if(positif==1 ){
					ext_msg_positif='Kamu agak positif.';
				}
	if(realistis==1 ){
					ext_msg_realistis='Kamu agak realistis.';
				}
	if(idealis==2 ){
					ext_msg_idealis='Kamu idealis. Kamu punya pandangan sendiri tentang Cinta yang ideal menurutmu.';
				}
	if(romantis==2 ){
					ext_msg_romantis='Kamu romantis. Kamu sangat memuja Cinta.';
				}
	if(positif==2 ){
					ext_msg_positif='Kamu positif. Kamu selalu melihat Cinta itu bukan dari sisi buruknya, tapi dari sisi baiknya.';
				}
	if(realistis==2 ){
					ext_msg_realistis='Kamu realistis. Kamu memandang Cinta itu harus sesuai keadaan, bukan sebaliknya.';
				}
	msg = ext_msg_idealis+' '+ext_msg_romantis+' '+ext_msg_positif+' '+ext_msg_realistis;	