var quiz = new Array();
var point = new Array(); 
var r = 0; 
var o=0; 
var quest = 25;
var score = 0;
//f0,f1,f2,..
quiz[r++] =('1~Mana yang lebih kamu suka?~Musik.~Olahraga.');
point[o++] =('1~0~1');
quiz[r++] =('2~Jika beli mobil, faktor apa yang paling menentukan pilihanmu?~Desain/tampilan.~Mesin.');
point[o++] =('2~0~1');
quiz[r++] =('3~Kamu yang mana?~Mengikuti keputusan yang dibuat orang lain.~Membuat dan melaksanakan keputusan sendiri.');
point[o++] =('3~0~1');
quiz[r++] =('4~Apa yang membuat kebanyakan pria lebih sukses dari wanita?~Penampilan dan kekuatan fisik.~Kemampuan dan kecerdasannya.');
point[o++] =('4~0~1');
quiz[r++] =('5~Apa yang dapat membuat dunia kita lebih baik?~Agama.~Ilmu pengetahuan.');
point[o++] =('5~0~1');
quiz[r++] =('6~Apa kamu mudah tersinggung?~Ya.~Tidak.');
point[o++] =('6~0~1');
quiz[r++] =('7~Mana yang lebih kamu suka?~Puisi.~Cerita petualangan.');
point[o++] =('7~0~1');
quiz[r++] =('8~Atasan seperti apa yang kamu pilih?~Ramah dan baik hati.~Tak ada (kerja untuk diri sendiri).');
point[o++] =('8~0~1');
quiz[r++] =('9~Kamu punya phobia (mis:takut kucing, ketinggian, gelap,dst)?~Ya.~Tidak.');
point[o++] =('9~0~1');
quiz[r++] =('10~Mana yang lebih kamu suka?~Seni.~Politik.');
point[o++] =('10~0~1');
quiz[r++] =('11~Apa kamu merasa risih/tersinggung, jika ada orang yang berbicara vulgar (mis:menyinggung seksualitas)?~Ya.~Tidak.');
point[o++] =('11~0~1');
quiz[r++] =('12~Mana yang lebih kamu suka?~Tenis.~Bungee jumping.');
point[o++] =('12~0~1');
quiz[r++] =('13~Kamu suka ke pesta/clubbing?~Ya.~Tidak.');
point[o++] =('13~0~1');
quiz[r++] =('14~Jika ada yang bicara terlalu terus terang/blak-blakan, apa kamu dapat menerimanya?~Ya.~Tidak.');
point[o++] =('14~0~1');
quiz[r++] =('15~Mana yang lebih kamu suka?~Poodle.~Bulldog.');
point[o++] =('15~0~1');
quiz[r++] =('16~Mana yang paling pas untuk dirimu?~Wanita cantik/Pria tampan.~Wanita/Pria cerdas.');
point[o++] =('16~0~1');
quiz[r++] =('17~Kamu pernah merasa sedih ketika menonton film yang akhirnya ceritanya sedih/tragedi?~Ya.~Tidak.');
point[o++] =('17~0~1');
quiz[r++] =('18~Mana yang lebih kamu suka?~Film action.~Film drama.');
point[o++] =('18~0~1');
quiz[r++] =('19~Kamu lebih suka belanja dimana?~Mall.~Toko-toko di pinggiran jalan.');
point[o++] =('19~0~1');
quiz[r++] =('20~Jika ada masalah dengan mobil/motormu, apa yang kamu lakukan?~Cari bantuan montir.~Coba otak-atik sendiri dulu.');
point[o++] =('20~0~1');
quiz[r++] =('21~Apa sulit buatmu bangun tepat waktu?~Ya.~Tidak.');
point[o++] =('21~5~0');
quiz[r++] =('22~Kamu suka perabotan antik?~Ya.~Tidak.');
point[o++] =('22~0~5');
quiz[r++] =('23~Kamu jjik sama kecoak, tikus, atau ulat?~Ya.~Tidak.');
point[o++] =('23~0~5');
quiz[r++] =('24~Kamu merasa kasihan melihat seekor kucing mati?~Ya.~Tidak.');
point[o++] =('24~0~5');
quiz[r++] =('25~Kamu tak terlalu suka aktivitas outdoor (kotor, debu, atau berpanas-panasan)?~Ya.~Tidak.');
point[o++] =('25~0~5');