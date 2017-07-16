function randomIntFromInterval(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
function no_kua(year_bday,month_bday,date_bday,hour_bday,minute_bday,gender){
	var year=year_bday.toString();
	var X1= year.slice(-2);
	var X2=X1[0]+X1[1];
	if(X2.length==1){
				var X=parseInt(X2);
			} else {
				var X3=parseInt(X2[0])+parseInt(X2[1]);
				var X4=X3.toString();
				if(X4.length==1){
					var X=parseInt(X4);
				} else {
					var X=parseInt(X4[0])+parseInt(X4[1]);
				}
	}
	switch(gender){
	case 'm':
		if(year_bday<2000){
			NKO=10-X;
		} else if(year_bday>=2000){
			NKO=9-X;
		}
	break;
	case 'f':
		if(year_bday<2000){
			NKO=X+5;
		} else if(year_bday>=2000){
			NKO=X+6;
		}
	break;
	}
	var ENKA=NKO.toString();
	if(ENKA.length==1){
				var NK=parseInt(ENKA);
			} else {
				var NK2=parseInt(ENKA[0])+parseInt(ENKA[1]);
				var NK3=NK2.toString();
				if(NK3.length==1){
					var NK=parseInt(NK3);
				} else {
					var NK=parseInt(NK3[0])+parseInt(NK3[1]);
				}
	}
	return NK;
}
function group_kua(no_kua){
	switch(no_kua){
	case 1:
	case 3:
	case 4:
	case 9:
		group='E';
	break;
	case 2:
	case 5:
	case 6:
	case 7:
	case 8:
		group='W';
	break;
	}
	return group;
}
function percentage_kua_compatible(group1, group2){
	if(group1==group2)return 100;else return 50;
}
function get_arah_hoki(NK,gender){
	var ARAH=new Array();
	switch(NK){
		case 1:
			ARAH['PALING_HOKI']='TG';
			ARAH['SELALU_SEHAT']='S';
			ARAH['KAYA']='U';
			ARAH['PANJANG_USIA']='T';
			ARAH['MASALAH']='B';
			ARAH['TEROR']='BD';
			ARAH['BENCANA']='BL';
			ARAH['KEMATIAN']='TL';
		break;
		case 2:
		case 5:
		case 8:
			switch(gender){
				case 'm':
					switch(NK){
						case 2:
						case 5:
							ARAH['PALING_HOKI']='TL';
							ARAH['SELALU_SEHAT']='BL';
							ARAH['KAYA']='BD';
							ARAH['PANJANG_USIA']='B';
							ARAH['MASALAH']='T';
							ARAH['TEROR']='U';
							ARAH['BENCANA']='S';
							ARAH['KEMATIAN']='TG';	
						break;
						case 8:
							ARAH['PALING_HOKI']='BD';
							ARAH['SELALU_SEHAT']='B';
							ARAH['KAYA']='TL';
							ARAH['PANJANG_USIA']='BL';
							ARAH['MASALAH']='S';
							ARAH['TEROR']='TG';
							ARAH['BENCANA']='T';
							ARAH['KEMATIAN']='U';
						break;
					}
				break;
				case 'f':
					switch(NK){
						case 2:
							ARAH['PALING_HOKI']='TL';
							ARAH['SELALU_SEHAT']='BL';
							ARAH['KAYA']='BD';
							ARAH['PANJANG_USIA']='B';
							ARAH['MASALAH']='T';
							ARAH['TEROR']='U';
							ARAH['BENCANA']='S';
							ARAH['KEMATIAN']='TG';	
						break;
						case 5:
						case 8:
							ARAH['PALING_HOKI']='BD';
							ARAH['SELALU_SEHAT']='B';
							ARAH['KAYA']='TL';
							ARAH['PANJANG_USIA']='BL';
							ARAH['MASALAH']='S';
							ARAH['TEROR']='TG';
							ARAH['BENCANA']='T';
							ARAH['KEMATIAN']='U';
						break;
					}
				break;
			}
		break;
		case 3:
			ARAH['PALING_HOKI']='S';
			ARAH['SELALU_SEHAT']='TG';
			ARAH['KAYA']='T';
			ARAH['PANJANG_USIA']='U';
			ARAH['MASALAH']='BD';
			ARAH['TEROR']='B';
			ARAH['BENCANA']='TL';
			ARAH['KEMATIAN']='BL';
		break;
		case 4:
			ARAH['PALING_HOKI']='U';
			ARAH['SELALU_SEHAT']='T';
			ARAH['KAYA']='TG';
			ARAH['PANJANG_USIA']='S';
			ARAH['MASALAH']='BL';
			ARAH['TEROR']='TL';
			ARAH['BENCANA']='B';
			ARAH['KEMATIAN']='BD';
		break;
		case 6:
			ARAH['PALING_HOKI']='B';
			ARAH['SELALU_SEHAT']='BD';
			ARAH['KAYA']='BL';
			ARAH['PANJANG_USIA']='TL';
			ARAH['MASALAH']='TG';
			ARAH['TEROR']='S';
			ARAH['BENCANA']='U';
			ARAH['KEMATIAN']='T';
		break;
		case 7:
			ARAH['PALING_HOKI']='BL';
			ARAH['SELALU_SEHAT']='TL';
			ARAH['KAYA']='B';
			ARAH['PANJANG_USIA']='BD';
			ARAH['MASALAH']='U';
			ARAH['TEROR']='T';
			ARAH['BENCANA']='TG';
			ARAH['KEMATIAN']='S';
		break;
		case 9:
			ARAH['PALING_HOKI']='T';
			ARAH['SELALU_SEHAT']='U';
			ARAH['KAYA']='S';
			ARAH['PANJANG_USIA']='TG';
			ARAH['MASALAH']='TL';
			ARAH['TEROR']='BL';
			ARAH['BENCANA']='BD';
			ARAH['KEMATIAN']='B';
		break;
	}
	return ARAH;
}
function cek_kabisat(year_bday)
   {
      var tahun = year_bday;
      var str;
 
      if(tahun % 4 == 0)
      {
         if(tahun % 100 == 0)
         {
           if(tahun % 400 == 0)
           {
              return true;
           }
           else
           {
              return false;
           }
         }
         else
         {
             return true;
         }
      }
      else
      {
         return false;
      }
   }    
function master_tanggal(year_bday,month_bday,date_bday){
TANGGAL_LAHIR=parseInt(date_bday);
var year=year_bday.toString();
var X= year.slice(-2);
DUA_DIGIT_TAHUN_LAHIR=parseInt(X);
switch(parseInt(month_bday)){
	case 1:
		JUMLAH_BULAN_LAHIR=0;
	break;
	case 2:
		JUMLAH_BULAN_LAHIR=31;
	break;
	case 3:
		JUMLAH_BULAN_LAHIR=59;
	break;
	case 4:
		JUMLAH_BULAN_LAHIR=90;
	break;
	case 5:
		JUMLAH_BULAN_LAHIR=120;
	break;
	case 6:
		JUMLAH_BULAN_LAHIR=151;
	break;
	case 7:
		JUMLAH_BULAN_LAHIR=181;
	break;
	case 8:
		JUMLAH_BULAN_LAHIR=212;
	break;
	case 9:
		JUMLAH_BULAN_LAHIR=243;
	break;
	case 10:
		JUMLAH_BULAN_LAHIR=273;
	break;
	case 11:
		JUMLAH_BULAN_LAHIR=304;
	break;
	case 12:
		JUMLAH_BULAN_LAHIR=334;
	break;
}
if(cek_kabisat()){JUMLAH_BULAN_LAHIR++;}
JUMLAH_TANGGAL_LAHIR = JUMLAH_BULAN_LAHIR + TANGGAL_LAHIR;
if(parseInt(year_bday)>2000){
X_DUA_DIGIT_TANGGAL  =5*( ( DUA_DIGIT_TAHUN_LAHIR + 100 ) - 1 ) +
( ( DUA_DIGIT_TAHUN_LAHIR + 100 ) - 1 ) / 4 + 15 + JUMLAH_TANGGAL_LAHIR;
} else {
X_DUA_DIGIT_TANGGAL=5*(DUA_DIGIT_TAHUN_LAHIR - 1) + (DUA_DIGIT_TAHUN_LAHIR-1)/4+15+JUMLAH_TANGGAL_LAHIR;
}
ROUND_X_DUA_DIGIT_TANGGAL=Math.round(X_DUA_DIGIT_TANGGAL);
NOMOR_MASTER_TANGGAL =  ROUND_X_DUA_DIGIT_TANGGAL % 10;
if (NOMOR_MASTER_TANGGAL==10)NOMOR_MASTER_TANGGAL = 0;
return NOMOR_MASTER_TANGGAL;
}
function cocok_master_tanggal(MT1,MT2){
	switch(MT1){
		case 'JIA':
			switch(MT2){
			case 'JIA':
				COCOK=49.5;
			break;
			case 'YI':
				COCOK=99;
			break;
			case 'BING':
				COCOK=24.75;
			break;
			case 'DING':
				COCOK=74.25;
			break;
			case 'WU':
				COCOK=74.25;
			break;
			case 'JI':
				COCOK=74.25;
			break;
			case 'GENG':
				COCOK=24.75;
			break;
			case 'XIN':
				COCOK=74.25;
			break;
			case 'REN':
				COCOK=74.25;
			break;
			case 'GUI':
				COCOK=74.25;
			break;
			}
		break;
		case 'YI':
			switch(MT2){
			case 'JIA':
				COCOK=99;
			break;
			case 'YI':
				COCOK=49.5;
			break;
			case 'BING':
				COCOK=74.25;
			break;
			case 'DING':
				COCOK=74.25;
			break;
			case 'WU':
				COCOK=74.25;
			break;
			case 'JI':
				COCOK=24.75;
			break;
			case 'GENG':
				COCOK=74.25;
			break;
			case 'XIN':
				COCOK=74.25;
			break;
			case 'REN':
				COCOK=74.25;
			break;
			case 'GUI':
				COCOK=24.75;
			break;
			}
		break;
		case 'BING':
			switch(MT2){
			case 'JIA':
				COCOK=24.75;
			break;
			case 'YI':
				COCOK=74.25;
			break;
			case 'BING':
				COCOK=1;
			break;
			case 'DING':
				COCOK=49.5;
			break;
			case 'WU':
				COCOK=49.5;
			break;
			case 'JI':
				COCOK=99;
			break;
			case 'GENG':
				COCOK=1;
			break;
			case 'XIN':
				COCOK=49.5;
			break;
			case 'REN':
				COCOK=49.5;
			break;
			case 'GUI':
				COCOK=99;
			break;
			}
		break;
		case 'DING':
			switch(MT2){
			case 'JIA':
				COCOK=74.25;
			break;
			case 'YI':
				COCOK=74.25;
			break;
			case 'BING':
				COCOK=49.5;
			break;
			case 'DING':
				COCOK=99;
			break;
			case 'WU':
				COCOK=99;
			break;
			case 'JI':
				COCOK=49.5;
			break;
			case 'GENG':
				COCOK=49.5;
			break;
			case 'XIN':
				COCOK=99;
			break;
			case 'REN':
				COCOK=99;
			break;
			case 'GUI':
				COCOK=49.5;
			break;
			}
		break;
		case 'WU':
			switch(MT2){
			case 'JIA':
				COCOK=74.25;
			break;
			case 'YI':
				COCOK=74.25;
			break;
			case 'BING':
				COCOK=49.5;
			break;
			case 'DING':
				COCOK=99;
			break;
			case 'WU':
				COCOK=99;
			break;
			case 'JI':
				COCOK=49.5;
			break;
			case 'GENG':
				COCOK=49.5;
			break;
			case 'XIN':
				COCOK=99;
			break;
			case 'REN':
				COCOK=99;
			break;
			case 'GUI':
				COCOK=49.5;
			break;
			}
		break;
		case 'JI':
			switch(MT2){
			case 'JIA':
				COCOK=74.25;
			break;
			case 'YI':
				COCOK=24.75;
			break;
			case 'BING':
				COCOK=99;
			break;
			case 'DING':
				COCOK=49.5;
			break;
			case 'WU':
				COCOK=49.5;
			break;
			case 'JI':
				COCOK=1;
			break;
			case 'GENG':
				COCOK=99;
			break;
			case 'XIN':
				COCOK=49.5;
			break;
			case 'REN':
				COCOK=49.5;
			break;
			case 'GUI':
				COCOK=1;
			break;
			}
		break;
		case 'GENG':
			switch(MT2){
			case 'JIA':
				COCOK=24.75;
			break;
			case 'YI':
				COCOK=74.25;
			break;
			case 'BING':
				COCOK=1;
			break;
			case 'DING':
				COCOK=49.5;
			break;
			case 'WU':
				COCOK=49.5;
			break;
			case 'JI':
				COCOK=99;
			break;
			case 'GENG':
				COCOK=1;
			break;
			case 'XIN':
				COCOK=49.5;
			break;
			case 'REN':
				COCOK=49.5;
			break;
			case 'GUI':
				COCOK=99;
			break;
			}
		break;
		case 'XIN':
			switch(MT2){
			case 'JIA':
				COCOK=74.25;
			break;
			case 'YI':
				COCOK=74.25;
			break;
			case 'BING':
				COCOK=99;
			break;
			case 'DING':
				COCOK=99;
			break;
			case 'WU':
				COCOK=49.5;
			break;
			case 'JI':
				COCOK=49.5;
			break;
			case 'GENG':
				COCOK=99;
			break;
			case 'XIN':
				COCOK=99;
			break;
			case 'REN':
				COCOK=49.5;
			break;
			case 'GUI':
				COCOK=49.5;
			break;
			}
		break;
		case 'REN':
			switch(MT2){
			case 'JIA':
				COCOK=74.25;
			break;
			case 'YI':
				COCOK=74.25;
			break;
			case 'BING':
				COCOK=49.5;
			break;
			case 'DING':
				COCOK=99;
			break;
			case 'WU':
				COCOK=99;
			break;
			case 'JI':
				COCOK=49.5;
			break;
			case 'GENG':
				COCOK=49.5;
			break;
			case 'XIN':
				COCOK=99;
			break;
			case 'REN':
				COCOK=99;
			break;
			case 'GUI':
				COCOK=49.5;
			break;
			}
		break;
		case 'GUI':
			switch(MT2){
			case 'JIA':
				COCOK=74.25;
			break;
			case 'YI':
				COCOK=24.75;
			break;
			case 'BING':
				COCOK=99;
			break;
			case 'DING':
				COCOK=49.5;
			break;
			case 'WU':
				COCOK=49.5;
			break;
			case 'JI':
				COCOK=1;
			break;
			case 'GENG':
				COCOK=99;
			break;
			case 'XIN':
				COCOK=49.5;
			break;
			case 'REN':
				COCOK=49.5;
			break;
			case 'GUI':
				COCOK=1;
			break;
			}
		break;
	}
	return COCOK;
}
function cocok_zodiac(zodiac1,zodiac2){
	switch(zodiac1){
		case 'aries':
			switch(zodiac2){
			case 'aries':
				COCOK=66;
			break;	
			case 'taurus':
				COCOK=16.5;
			break;
			case 'gemini':
				COCOK=66;
			break;
			case 'cancer':
				COCOK=99;
			break;
			case 'leo':
				COCOK=49.5;
			break;
			case 'virgo':
				COCOK=16.5;
			break;
			case 'libra':
				COCOK=49.5;
			break;
			case 'scorpio':
				COCOK=66;
			break;
			case 'sagitarius':
				COCOK=49.5;
			break;
			case 'capricorn':
				COCOK=82.5;
			break;
			case 'aquarius':
				COCOK=82.5;
			break;
			case 'pisces':
				COCOK=82.5;
			break;
			}
		break;
		case 'taurus':
			switch(zodiac2){
			case 'aries':
				COCOK=33;
			break;	
			case 'taurus':
				COCOK=66;
			break;
			case 'gemini':
				COCOK=66;
			break;
			case 'cancer':
				COCOK=66;
			break;
			case 'leo':
				COCOK=49.5;
			break;
			case 'virgo':
				COCOK=66;
			break;
			case 'libra':
				COCOK=66;
			break;
			case 'scorpio':
				COCOK=49.5;
			break;
			case 'sagitarius':
				COCOK=16.5;
			break;
			case 'capricorn':
				COCOK=66;
			break;
			case 'aquarius':
				COCOK=99;
			break;
			case 'pisces':
				COCOK=82.5;
			break;
			}
		break;
		case 'gemini':
			switch(zodiac2){
			case 'aries':
				COCOK=99;
			break;	
			case 'taurus':
				COCOK=66;
			break;
			case 'gemini':
				COCOK=66;
			break;
			case 'cancer':
				COCOK=16.5;
			break;
			case 'leo':
				COCOK=99;
			break;
			case 'virgo':
				COCOK=99;
			break;
			case 'libra':
				COCOK=82.5;
			break;
			case 'scorpio':
				COCOK=33;
			break;
			case 'sagitarius':
				COCOK=49.5;
			break;
			case 'capricorn':
				COCOK=66;
			break;
			case 'aquarius':
				COCOK=33;
			break;
			case 'pisces':
				COCOK=82.5;
			break;
			}
		break;
		case 'cancer':
			switch(zodiac2){
			case 'aries':
				COCOK=99;
			break;	
			case 'taurus':
				COCOK=82.5;
			break;
			case 'gemini':
				COCOK=33;
			break;
			case 'cancer':
				COCOK=66;
			break;
			case 'leo':
				COCOK=66;
			break;
			case 'virgo':
				COCOK=82.5;
			break;
			case 'libra':
				COCOK=66;
			break;
			case 'scorpio':
				COCOK=33;
			break;
			case 'sagitarius':
				COCOK=66;
			break;
			case 'capricorn':
				COCOK=33;
			break;
			case 'aquarius':
				COCOK=16.5;
			break;
			case 'pisces':
				COCOK=49.5;
			break;
			}
		break;
		case 'leo':
			switch(zodiac2){
			case 'aries':
				COCOK=49.5;
			break;	
			case 'taurus':
				COCOK=66;
			break;
			case 'gemini':
				COCOK=66;
			break;
			case 'cancer':
				COCOK=66;
			break;
			case 'leo':
				COCOK=66;
			break;
			case 'virgo':
				COCOK=33;
			break;
			case 'libra':
				COCOK=49.5;
			break;
			case 'scorpio':
				COCOK=99;
			break;
			case 'sagitarius':
				COCOK=82.5;
			break;
			case 'capricorn':
				COCOK=16.5;
			break;
			case 'aquarius':
				COCOK=33;
			break;
			case 'pisces':
				COCOK=82.5;
			break;
			}
		break;
		case 'virgo':
			switch(zodiac2){
			case 'aries':
				COCOK=16.5;
			break;	
			case 'taurus':
				COCOK=66;
			break;
			case 'gemini':
				COCOK=99;
			break;
			case 'cancer':
				COCOK=66;
			break;
			case 'leo':
				COCOK=33;
			break;
			case 'virgo':
				COCOK=66;
			break;
			case 'libra':
				COCOK=82.5;
			break;
			case 'scorpio':
				COCOK=66;
			break;
			case 'sagitarius':
				COCOK=49.5;
			break;
			case 'capricorn':
				COCOK=66;
			break;
			case 'aquarius':
				COCOK=82.5;
			break;
			case 'pisces':
				COCOK=16.5;
			break;
			}
		break;
		case 'libra':
			switch(zodiac2){
			case 'aries':
				COCOK=49.5;
			break;	
			case 'taurus':
				COCOK=66;
			break;
			case 'gemini':
				COCOK=66;
			break;
			case 'cancer':
				COCOK=49.5;
			break;
			case 'leo':
				COCOK=66;
			break;
			case 'virgo':
				COCOK=82.5;
			break;
			case 'libra':
				COCOK=66;
			break;
			case 'scorpio':
				COCOK=33;
			break;
			case 'sagitarius':
				COCOK=49.5;
			break;
			case 'capricorn':
				COCOK=99;
			break;
			case 'aquarius':
				COCOK=66;
			break;
			case 'pisces':
				COCOK=16.5;
			break;
			}
		break;
		case 'scorpio':
			switch(zodiac2){
			case 'aries':
				COCOK=66;
			break;	
			case 'taurus':
				COCOK=49.5;
			break;
			case 'gemini':
				COCOK=16.5;
			break;
			case 'cancer':
				COCOK=49.5;
			break;
			case 'leo':
				COCOK=99;
			break;
			case 'virgo':
				COCOK=66;
			break;
			case 'libra':
				COCOK=33;
			break;
			case 'scorpio':
				COCOK=66;
			break;
			case 'sagitarius':
				COCOK=82.5;
			break;
			case 'capricorn':
				COCOK=66;
			break;
			case 'aquarius':
				COCOK=66;
			break;
			case 'pisces':
				COCOK=82.5;
			break;
			}
		break;
		case 'sagitarius':
			switch(zodiac2){
			case 'aries':
				COCOK=49.5;
			break;	
			case 'taurus':
				COCOK=16.5;
			break;
			case 'gemini':
				COCOK=33;
			break;
			case 'cancer':
				COCOK=66;
			break;
			case 'leo':
				COCOK=82.5;
			break;
			case 'virgo':
				COCOK=49.5;
			break;
			case 'libra':
				COCOK=66;
			break;
			case 'scorpio':
				COCOK=82.5;
			break;
			case 'sagitarius':
				COCOK=66;
			break;
			case 'capricorn':
				COCOK=33;
			break;
			case 'aquarius':
				COCOK=66;
			break;
			case 'pisces':
				COCOK=82.5;
			break;
			}
		break;
		case 'capricorn':
			switch(zodiac2){
			case 'aries':
				COCOK=66;
			break;	
			case 'taurus':
				COCOK=66;
			break;
			case 'gemini':
				COCOK=82.5;
			break;
			case 'cancer':
				COCOK=33;
			break;
			case 'leo':
				COCOK=16.5;
			break;
			case 'virgo':
				COCOK=66;
			break;
			case 'libra':
				COCOK=99;
			break;
			case 'scorpio':
				COCOK=66;
			break;
			case 'sagitarius':
				COCOK=33;
			break;
			case 'capricorn':
				COCOK=66;
			break;
			case 'aquarius':
				COCOK=66;
			break;
			case 'pisces':
				COCOK=66;
			break;
			}
		break;
		case 'aquarius':
			switch(zodiac2){
			case 'aries':
				COCOK=66;
			break;	
			case 'taurus':
				COCOK=82.5;
			break;
			case 'gemini':
				COCOK=49.5;
			break;
			case 'cancer':
				COCOK=16.5;
			break;
			case 'leo':
				COCOK=33;
			break;
			case 'virgo':
				COCOK=82.5;
			break;
			case 'libra':
				COCOK=66;
			break;
			case 'scorpio':
				COCOK=66;
			break;
			case 'sagitarius':
				COCOK=82.5;
			break;
			case 'capricorn':
				COCOK=66;
			break;
			case 'aquarius':
				COCOK=66;
			break;
			case 'pisces':
				COCOK=16.5;
			break;
			}
		break;
		case 'pisces':
			switch(zodiac2){
			case 'aries':
				COCOK=82.5;
			break;	
			case 'taurus':
				COCOK=38;
			break;
			case 'gemini':
				COCOK=66;
			break;
			case 'cancer':
				COCOK=49.5;
			break;
			case 'leo':
				COCOK=82.5;
			break;
			case 'virgo':
				COCOK=16.5;
			break;
			case 'libra':
				COCOK=16.5;
			break;
			case 'scorpio':
				COCOK=82.5;
			break;
			case 'sagitarius':
				COCOK=99;
			break;
			case 'capricorn':
				COCOK=82.5;
			break;
			case 'aquarius':
				COCOK=16.5;
			break;
			case 'pisces':
				COCOK=66;
			break;
			}
		break;
	}
	return COCOK;
}
function cocok_shio(shio1,shio2){
	switch(shio1){
		case 'boar':
			switch(shio2){
			case 'boar':
				COCOK=79.2;
			break;	
			case 'rat':
				COCOK=79.2;
			break;
			case 'ox':
				COCOK=70;
			break;
			case 'tiger':
				COCOK=70;
			break;
			case 'rabbit':
				COCOK=90;
			break;
			case 'dragon':
				COCOK=79.2;
			break;
			case 'snake':
				COCOK=39.6;
			break;
			case 'horse':
				COCOK=59.6;
			break;
			case 'sheep':
				COCOK=90;
			break;
			case 'monkey':
				COCOK=70;
			break;
			case 'cock':
				COCOK=50;
			break;
			case 'dog':
				COCOK=70;
			break;
			}
		break;
		case 'rat':
			switch(shio2){
			case 'boar':
				COCOK=79.2;
			break;	
			case 'rat':
				COCOK=90;
			break;
			case 'ox':
				COCOK=59.6;
			break;
			case 'tiger':
				COCOK=39.6;
			break;
			case 'rabbit':
				COCOK=70;
			break;
			case 'dragon':
				COCOK=99;
			break;
			case 'snake':
				COCOK=70;
			break;
			case 'horse':
				COCOK=30;
			break;
			case 'sheep':
				COCOK=39.6;
			break;
			case 'monkey':
				COCOK=99;
			break;
			case 'cock':
				COCOK=59.6;
			break;
			case 'dog':
				COCOK=79.2;
			break;
			}
		break;
		case 'ox':
			switch(shio2){
			case 'boar':
				COCOK=70;
			break;	
			case 'rat':
				COCOK=59.6;
			break;
			case 'ox':
				COCOK=79.2;
			break;
			case 'tiger':
				COCOK=39.6;
			break;
			case 'rabbit':
				COCOK=79.2;
			break;
			case 'dragon':
				COCOK=70;
			break;
			case 'snake':
				COCOK=90;
			break;
			case 'horse':
				COCOK=50;
			break;
			case 'sheep':
				COCOK=19.8;
			break;
			case 'monkey':
				COCOK=39.6;
			break;
			case 'cock':
				COCOK=90;
			break;
			case 'dog':
				COCOK=70;
			break;
			}
		break;
		case 'tiger':
			switch(shio2){
			case 'boar':
				COCOK=70;
			break;	
			case 'rat':
				COCOK=39.6;
			break;
			case 'ox':
				COCOK=39.6;
			break;
			case 'tiger':
				COCOK=50;
			break;
			case 'rabbit':
				COCOK=50;
			break;
			case 'dragon':
				COCOK=59.6;
			break;
			case 'snake':
				COCOK=30;
			break;
			case 'horse':
				COCOK=90;
			break;
			case 'sheep':
				COCOK=39.6;
			break;
			case 'monkey':
				COCOK=19.8;
			break;
			case 'cock':
				COCOK=39.6;
			break;
			case 'dog':
				COCOK=90;
			break;
			}
		break;
		case 'rabbit':
			switch(shio2){
			case 'boar':
				COCOK=90;
			break;	
			case 'rat':
				COCOK=70;
			break;
			case 'ox':
				COCOK=79.2;
			break;
			case 'tiger':
				COCOK=50;
			break;
			case 'rabbit':
				COCOK=79.2;
			break;
			case 'dragon':
				COCOK=70;
			break;
			case 'snake':
				COCOK=70;
			break;
			case 'horse':
				COCOK=50;
			break;
			case 'sheep':
				COCOK=90;
			break;
			case 'monkey':
				COCOK=39.6;
			break;
			case 'cock':
				COCOK=19.8;
			break;
			case 'dog':
				COCOK=79.2;
			break;
			}
		break;
		case 'dragon':
			switch(shio2){
			case 'boar':
				COCOK=79.2;
			break;	
			case 'rat':
				COCOK=99;
			break;
			case 'ox':
				COCOK=70;
			break;
			case 'tiger':
				COCOK=59.6;
			break;
			case 'rabbit':
				COCOK=70;
			break;
			case 'dragon':
				COCOK=90;
			break;
			case 'snake':
				COCOK=79.2;
			break;
			case 'horse':
				COCOK=79.2;
			break;
			case 'sheep':
				COCOK=70;
			break;
			case 'monkey':
				COCOK=99;
			break;
			case 'cock':
				COCOK=90;
			break;
			case 'dog':
				COCOK=19.8;
			break;
			}
		break;
		case 'snake':
			switch(shio2){
			case 'boar':
				COCOK=39.6;
			break;	
			case 'rat':
				COCOK=70;
			break;
			case 'ox':
				COCOK=90;
			break;
			case 'tiger':
				COCOK=30;
			break;
			case 'rabbit':
				COCOK=70;
			break;
			case 'dragon':
				COCOK=79.2;
			break;
			case 'snake':
				COCOK=79.2;
			break;
			case 'horse':
				COCOK=39.6;
			break;
			case 'sheep':
				COCOK=70;
			break;
			case 'monkey':
				COCOK=39.6;
			break;
			case 'cock':
				COCOK=90;
			break;
			case 'dog':
				COCOK=79.2;
			break;
			}
		break;
		case 'horse':
			switch(shio2){
			case 'boar':
				COCOK=59.6;
			break;	
			case 'rat':
				COCOK=30;
			break;
			case 'ox':
				COCOK=50;
			break;
			case 'tiger':
				COCOK=90;
			break;
			case 'rabbit':
				COCOK=50;
			break;
			case 'dragon':
				COCOK=79.2;
			break;
			case 'snake':
				COCOK=39.6;
			break;
			case 'horse':
				COCOK=79.2;
			break;
			case 'sheep':
				COCOK=79.2;
			break;
			case 'monkey':
				COCOK=50;
			break;
			case 'cock':
				COCOK=59.6;
			break;
			case 'dog':
				COCOK=90;
			break;
			}
		break;
		case 'sheep':
			switch(shio2){
			case 'boar':
				COCOK=90;
			break;	
			case 'rat':
				COCOK=39.6;
			break;
			case 'ox':
				COCOK=19.8;
			break;
			case 'tiger':
				COCOK=39.6;
			break;
			case 'rabbit':
				COCOK=90;
			break;
			case 'dragon':
				COCOK=70;
			break;
			case 'snake':
				COCOK=70;
			break;
			case 'horse':
				COCOK=79.2;
			break;
			case 'sheep':
				COCOK=90;
			break;
			case 'monkey':
				COCOK=50;
			break;
			case 'cock':
				COCOK=50;
			break;
			case 'dog':
				COCOK=39.6;
			break;
			}
		break;
		case 'monkey':
			switch(shio2){
			case 'boar':
				COCOK=70;
			break;	
			case 'rat':
				COCOK=10;
			break;
			case 'ox':
				COCOK=39.6;
			break;
			case 'tiger':
				COCOK=19.8;
			break;
			case 'rabbit':
				COCOK=39.6;
			break;
			case 'dragon':
				COCOK=99;
			break;
			case 'snake':
				COCOK=39.6;
			break;
			case 'horse':
				COCOK=50;
			break;
			case 'sheep':
				COCOK=50;
			break;
			case 'monkey':
				COCOK=90;
			break;
			case 'cock':
				COCOK=39.6;
			break;
			case 'dog':
				COCOK=79.2;
			break;
			}
		break;
		case 'cock':
			switch(shio2){
			case 'boar':
				COCOK=50;
			break;	
			case 'rat':
				COCOK=59.6;
			break;
			case 'ox':
				COCOK=90;
			break;
			case 'tiger':
				COCOK=39.6;
			break;
			case 'rabbit':
				COCOK=19.8;
			break;
			case 'dragon':
				COCOK=90;
			break;
			case 'snake':
				COCOK=90;
			break;
			case 'horse':
				COCOK=59.6;
			break;
			case 'sheep':
				COCOK=50;
			break;
			case 'monkey':
				COCOK=39.6;
			break;
			case 'cock':
				COCOK=39.6;
			break;
			case 'dog':
				COCOK=50;
			break;
			}
		break;
		case 'dog':
			switch(shio2){
			case 'boar':
				COCOK=70;
			break;	
			case 'rat':
				COCOK=79.2;
			break;
			case 'ox':
				COCOK=70;
			break;
			case 'tiger':
				COCOK=90;
			break;
			case 'rabbit':
				COCOK=79.2;
			break;
			case 'dragon':
				COCOK=19.8;
			break;
			case 'snake':
				COCOK=79.2;
			break;
			case 'horse':
				COCOK=90;
			break;
			case 'sheep':
				COCOK=39.6;
			break;
			case 'monkey':
				COCOK=79.2;
			break;
			case 'cock':
				COCOK=50;
			break;
			case 'dog':
				COCOK=70;
			break;
			}
		break;
	}
	return COCOK;
}
function elemen(MT){
switch(MT){
						case 1:
							el='JIA';
						break;
						case 2:
							el='YI';
						break;
						case 3:
							el='BING';
						break;
						case 4:
							el='DING';
						break;
						case 5:
							el='WU';
						break;
						case 6:
							el='JI';
						break;
						case 7:
							el='GENG';
						break;
						case 8:
							el='XIN';
						break;
						case 9:
							el='REN';
						break;
						case 0:
							el='GUI';
						break;
					}
					return el;
}
function signs(birthyear,month,date) {
var start = 1901;
var ZODIAC = new Array();
if (month == 1 && date >=20 || month == 2 && date <=18) {W_ZODIAC= "aquarius";}
if (month == 2 && date >=19 || month == 3 && date <=20) {W_ZODIAC= "pisces";}
if (month == 3 && date >=21 || month == 4 && date <=19) {W_ZODIAC= "aries";}
if (month == 4 && date >=20 || month == 5 && date <=20) {W_ZODIAC= "taurus";}
if (month == 5 && date >=21 || month == 6 && date <=21) {W_ZODIAC= "gemini";}
if (month == 6 && date >=22 || month == 7 && date <=22) {W_ZODIAC= "cancer";}
if (month == 7 && date >=23 || month == 8 && date <=22) {W_ZODIAC= "leo";}
if (month == 8 && date >=23 || month == 9 && date <=22) {W_ZODIAC= "virgo";}
if (month == 9 && date >=23 || month == 10 && date <=22) {W_ZODIAC= "libra";}
if (month == 10 && date >=23 || month == 11 && date <=21) {W_ZODIAC= "scorpio";}
if (month == 11 && date >=22 || month == 12 && date <=21) {W_ZODIAC= "sagittarius";}
if (month == 12 && date >=22 || month == 1 && date <=19) {W_ZODIAC= "capricorn";}
x = (start - birthyear) % 12
if (x == 1 || x == -11) {C_ZODIAC= "rat";}
if (x == 0) {C_ZODIAC= "ox";}
if (x == 11 || x == -1) {C_ZODIAC= "tiger";}
if (x == 10 || x == -2) {C_ZODIAC= "rabbit";}
if (x == 9 || x == -3)  {C_ZODIAC= "dragon";}
if (x == 8 || x == -4)  {C_ZODIAC="snake";}
if (x == 7 || x == -5)  {C_ZODIAC= "horse";}
if (x == 6 || x == -6)  {C_ZODIAC= "sheep";}
if (x == 5 || x == -7)  {C_ZODIAC= "monkey";}
if (x == 4 || x == -8)  {C_ZODIAC= "cock";}
if (x == 3 || x == -9)  {C_ZODIAC= "dog";}
if (x == 2 || x == -10)  {C_ZODIAC= "boar";}  
ZODIAC['W']=W_ZODIAC;
ZODIAC['C']=C_ZODIAC;
return ZODIAC;
}
function compatible_names(){	
first=get_bname().toUpperCase();
second=get_hname().toUpperCase();
firstlength=first.length;
secondlength = second.length;
var LoveCount=0;
for (Count=0; Count < firstlength; Count++) {
letter1=first.substring(Count,Count+1);
if (letter1=='L') LoveCount+=2; if (letter1=='O') LoveCount+=2; if
(letter1=='V') LoveCount+=2;
if (letter1=='E') LoveCount+=2; if (letter1=='Y') LoveCount+=3; if
(letter1=='O') LoveCount+=1; if (letter1=='U') LoveCount+=3;
}
for (Count=0; Count < secondlength; Count++) {
letter2=second.substring(Count,Count+1);
if (letter2=='L') LoveCount+=2;
if (letter2=='O') LoveCount+=2; if (letter2=='V') LoveCount+=2; if
(letter2=='E') LoveCount+=2;
if (letter2=='Y') LoveCount+=3;
if (letter2=='O') LoveCount+=1;
if (letter2=='U') LoveCount+=3;
}
amount=0;
if (LoveCount> 0) amount= 5-((firstlength+secondlength)/2)
if (LoveCount> 2) amount= 10-((firstlength+secondlength)/2)
if (LoveCount> 4) amount= 20-((firstlength+secondlength)/2)
if (LoveCount> 6) amount= 30-((firstlength+secondlength)/2)
if (LoveCount> 8) amount= 40-((firstlength+secondlength)/2)
if (LoveCount>10) amount= 50-((firstlength+secondlength)/2)
if (LoveCount>12) amount= 60-((firstlength+secondlength)/2)
if (LoveCount>14) amount= 70-((firstlength+secondlength)/2)
if (LoveCount>16) amount= 80-((firstlength+secondlength)/2)
if (LoveCount>18) amount= 90-((firstlength+secondlength)/2)
if (LoveCount>20) amount=100-((firstlength+secondlength)/2)
if (LoveCount>22) amount=110-((firstlength+secondlength)/2)
if (firstlength==0 || secondlength==0) amount= "Mystery";
if (amount < 0) amount= 0;
if (amount >99) amount=99;
return amount;
}