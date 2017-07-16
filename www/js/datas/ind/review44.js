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
					msg='Kamu berpikiran dewasa dan siap menerima konsekuensi dari pacaran jarak jauh. Pacaran jarak jauh tak akan jadi masalah buat dirimu.';
				}
	else if(paling_besar= 'B' ){
					msg='Kamu belum siap untuk pacaran jarak jauh, yang tentu menuntut komitmen besar dan kesetian, kecuali kamu bisa memenuhi syarat-syarat tersebut.';
				}			
				
	else if(paling_besar= 'C' ){
					msg='Kamu tak cocok untuk pacaran jarak jauh. Kamu belum mampu berpikiran secara dewasa dan tak siap menerima konsekuensi pacaran jarak jauh.';
				}				
	