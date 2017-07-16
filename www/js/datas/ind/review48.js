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
					msg='Dia mendominasi hubungan kalian. Kamu selalu mengalah untuk menjaga keutuhan hubungan kalian.';
				}
	else if(ans_B > ans_A && ans_B > ans_C ){
					msg='Ini sebuah hubungan yang sehat dan seimbang.';
				}			
				
	else if(ans_C > ans_A && ans_C > ans_B ){
					msg='Kamu lebih dominan daripada pasanganmu.';
				}
	else if(ans_A == ans_C && ans_B==0 ){
					msg='Kedua pihak sama-sama kuat dan ingin menang sendiri.';
				}
	else if(ans_A == ans_B || ans_B==ans_C ){
					msg='Kedua pihak ingin lebih mendominasi hubungan, tapi akhirnya mungkin kalian mau menempuh jalan kompromi.';
				}									
	
	else {
		if(ans_B > ans_A || ans_B > ans_C ){
					msg='Jika ada beda pendapat, maka kalian sanggup menyelesaikan dengan cara baik/profesional.';
				}	else {
			msg='Saat beda pendapat, maka bisa terjadi debat panjang yang tak berkesudahan.';
			}
	}