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
					msg='Kamu adalah mantan pacar yang baik. Kamu dan mantan masih berteman baik.';
				}
	else if(ans_B >= 4 ){
					msg='Kamu adalah mantan yang dilema. Biar sudah putus tapi masih menyimpan rasa sama mantan.';
				}			
				
	else if(ans_C >= 4 ){
					msg='Kamu adalah mantan yang jahat. Setelah putus kamu siap-siap balas dendam.';
				}
	else if(ans_D >= 4 ){
					msg='Setelah putus kamu akan melupakan semuanya tentang mantanmu.';
				}						
	
	else {
		msg='Kamu orangnya sangat tak konsisten. Kamu tak tahu apa yang sebenarnya kamu inginkan/lakukan. Beruntung dia sudah putus denganmu.';
	}