	 var dude = final_score.split('~');
	 var dude_length = dude.length-1;
	 for(var ac=0;ac<dude_length;ac++){
		 switch(ac){
		 case 0:
			 if(dude[ac]=='0'){
				exp_msg1 ='Kamu tipe orang yang mudah jatuh Cinta.';
			}
			if(dude[ac]=='1'){
			   exp_msg1 ='Kamu tipe orang yang butuh waktu untuk jatuh Cinta. Bagimu kualitas lebih penting dari kuantitas.';
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
			exp_msg2 = 'Ketulusan kamu terhadap dia sebesar '+tulus+'.';
		break;	
		case 2:
			if(dude[ac]=='0'){
		  		exp_msg3 ='Kamu lebih memilih menghindar dari masalah.';
			}
			if(dude[ac]=='1'){
			   exp_msg3 ='kamu mampu mengatasi masalah dengan cepat.';
			}
		break;
		case 3:
			if(dude[ac]=='0'){
		  		exp_msg4 ='Kamu tak menganggap perlu untuk sering-sering bertemu dengan Dia.';
			}
			if(dude[ac]=='1'){
			   exp_msg4 ='Kamu merasa perlu untuk sering bertemu dengan Dia.';
			}
		break;
		case 4:
			if(dude[ac]=='0'){
		  		exp_msg5 ='Kamu ingin Dia berubah sesuai keinginanmu, atau demi kamu.';
			}
			if(dude[ac]=='1'){
			   exp_msg5 ='Kamu bisa menerima dia apa adanya/menjadi dirinya sendiri.';
			}
		break;
		case 5:
			if(dude[ac]=='0'){
		  		exp_msg6 ='Kamu tak sanggup berkomitmen dalam suatu hubungan, bahkan sebuah masalah sepele dapat berakhir dengan putus Cinta.';
			}
			if(dude[ac]=='1'){
			   exp_msg6 ='Kamu ingin selama-lamanya setia pada pasanganmu.';
			}
		break;
		}//endswitch;
	 }//endfor
	msg = exp_msg1+' '+exp_msg3+' '+exp_msg4+' '+exp_msg5+' '+exp_msg6+' '+exp_msg2;