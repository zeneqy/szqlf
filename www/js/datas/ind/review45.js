	 var dude = final_score.split('~');
	 var dude_length = dude.length-1;
	 for(var ac=0;ac<dude_length;ac++){
		switch(ac){
		case 0:
			if(dude[ac]=='0'){
		  		exp_msg1 ='Kamu tertarik pada pria/wanita yang liberal (bebas).';
			}
			if(dude[ac]=='1'){
			   exp_msg1 ='Kamu tertarik pada pria/wanita yang baik dan penurut.';
			}
			if(dude[ac]=='2'){
		  		exp_msg1 ='Kamu tertarik pada pria/wanita yang cuek di luar, tapi sebenarnya perhatian.';
			}
			if(dude[ac]=='3'){
			   exp_msg1 ='Kamu tertarik pada pria/wanita yang rapih dan menawan.';
			}
		break;
		case 1:
			if(dude[ac]=='0'){
		  		exp_msg2 ='Saat pedekate (pendekatan), kamu termasuk orang yang suka tarik ulur.';
			}
			if(dude[ac]=='1'){
			   exp_msg2 ='Saat pedekate (pendekatan), kamu tak sabaran untuk mendapatkan hasil.';
			}
			if(dude[ac]=='2'){
		  		exp_msg2 ='Saat pedekate (pendekatan), kamu lumayan kreatif dan tak membosankan.';
			}
			if(dude[ac]=='3'){
			   exp_msg2 ='Saat pedekate (pendekatan), kamu ingin langsung mengutarakan perasaanmu, tanpa banyak basa basi.';
			}
		break;	
		case 2:
			if(dude[ac]=='0'){
		  		exp_msg3 ='Kamu ingin menunjukkan ke Dia, kalau kamu itu orangnya fleksibel.';
			}
			if(dude[ac]=='1'){
			   exp_msg3 ='Kamu ingin menunjukkan ke Dia, kalau kamu itu orangnya stylish/modis/gaya.';
			}
			if(dude[ac]=='2'){
		  		exp_msg3 ='Kamu ingin menunjukkan ke Dia, kalau kamu itu orangnya setia dan dapat dipercaya.';
			}
			if(dude[ac]=='3'){
			   exp_msg3 ='Kamu ingin menunjukkan ke Dia, kalau kamu itu orangnya optimis.';
			}
		break;
		case 3:
			if(dude[ac]=='0'){
		  		exp_msg4 ='Kamu benci orang yang pemarah.';
			}
			if(dude[ac]=='1'){
			   exp_msg4 ='Kamu benci orang yang kejam, atau kurang sensitif.';
			}
			if(dude[ac]=='2'){
		  		exp_msg4 ='Kamu benci orang yang tak percaya diri/minder.';
			}
			if(dude[ac]=='3'){
			   exp_msg4 ='Kamu benci orang yang diktator.';
			}
		break;
		case 4:
			if(dude[ac]=='0'){
		  		exp_msg5 ='Kamu ingin terus merasa disayang dan dicintai.';
			}
			if(dude[ac]=='1'){
			   exp_msg5 ='Kamu membina hubungan yang berlandaskan rasa percaya dan keterbukaan.';
			}
			if(dude[ac]=='2'){
		  		exp_msg5 ='Kamu tak berharap yang muluk-muluk dari hubungan kalian, yang penting ada saling pengertian.';
			}
			if(dude[ac]=='3'){
			   exp_msg5 ='Kamu berharap hubungan kalian serius dan untuk selamanya.';
			}
		break;
		case 5:
			if(dude[ac]=='0'){
		  		exp_msg6 ='Kamu tipe pribadi yang bebas. Menikah merupakan pilihan terakhir dalam hidupmu.';
			}
			if(dude[ac]=='1'){
			   exp_msg6 ='Kamu tipe pribadi yang mudah tergoda.';
			}
			if(dude[ac]=='2'){
		  		exp_msg6 ='Kamu berusaha untuk tak selingkuh dan tetap setia.';
			}
			if(dude[ac]=='3'){
			   exp_msg6 ='Kamu sayang pada pasanganmu dan berkomitmen untuk tak selingkuh.';
			}
		break;
		case 6:
			if(dude[ac]=='0'){
		  		exp_msg7 ='Kamu tak percaya ada pernikahan yang berakhir bahagia.';
			}
			if(dude[ac]=='1'){
			   exp_msg7 ='Kamu berpendapat, pernikahan itu sesuatu yang sakral.';
			}
			if(dude[ac]=='2'){
		  		exp_msg7 ='Kamu tipe orang yang bebas, atau tak ingin terikat oleh pernikahan.';
			}
			if(dude[ac]=='3'){
			   exp_msg7 ='Kamu ingin menikah, tapi belum punya gambaran jelas. Hal apa yang bakal kamu hadapi setelah menikah nanti.';
			}
		break;
		case 7:
			if(dude[ac]=='0'){
		  		exp_msg8 ='Menurutmu Cinta itu adalah komitmen dari kedua belah pihak pasangan.';
			}
			if(dude[ac]=='1'){
			   exp_msg8 ='Kamu sering berharap untuk cepat menikah, namun terkadang keadaan tak sesuai dengan keinginanmu.';
			}
			if(dude[ac]=='2'){
		  		exp_msg8 ='Kamu sangat pede (percaya diri), akan segera mendapatkan pasangan yang sesuai dengan keinginanmu.';
			}
			if(dude[ac]=='3'){
			   exp_msg8 ='Kamu lebih suka melajang dan tebar pesona di sana sini.';
			}
		break;
		}//endswitch;
	 }//endfor
	var msg = exp_msg1+' '+exp_msg2+' '+exp_msg3+' '+exp_msg4+' '+exp_msg5+' '+exp_msg6;