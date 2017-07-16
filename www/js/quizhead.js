function screen_height(){return screen.availHeight;};
function get_window_height(){
	localStorage.height=$(window).height()-90;
	return localStorage.height;
}
function set_default_height(){
	set_div_height_tab_others();
}
function set_div_height_tab_others(){
	var frame_height=get_windowheight()-80;
$('#listview').height(frame_height);	
$('#panel_setting').css('max-height',frame_height+'px');
$('#panel_about').css('max-height',frame_height+'px');
}
function get_windowheight(){
	return localStorage.windowheight;
}
function get_scrollheight(){
	return localStorage.scrollheight;
}
function get_scrollwrapperheight(){
	return localStorage.scrollwrapperheight;
}
function get_scrollerheight(){
	return localStorage.scrollerheight;
}
function store_windowheight(){
	localStorage.windowheight=parseInt($(window).height());
}
function store_scrollheight(){
	localStorage.scrollheight=parseInt(myScroll.maxScrollY);
}
function store_scrollwrapperheight(){
	localStorage.scrollwrapperheight=parseInt(myScroll.wrapperHeight);
}
function store_scrollerheight(){
	localStorage.scrollerheight=parseInt(myScroll.scrollerHeight);
}
function setCursorToEnd(id){
	el=document.getElementById(id);
	el.focus();
	var range=document.createRange();
	range.selectNodeContents(el);
	range.collapse(false);
	sel=window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}
function get_language(){
	if(localStorage.language!=undefined &&localStorage.language!='') {
		return localStorage.language;
	}
	return 'eng';
}
function get_localstorage_data(item_no){
	var lang=get_language();
	var stored_msg=localStorage.getItem('result_msg_'+lang+item_no);
	return stored_msg;
}
function get_localstorage_anu(item_no){
	var stored_anu=localStorage.getItem('result_anu'+item_no);
	return stored_anu;
}
function show_result(item_no){
	var lang=get_language();
	var result_id='#result'+item_no;
	var review_file='review'+item_no;
	$.getScript('js/datas/'+lang+'/'+review_file+'.js', function() {
		anu=localStorage.getItem('result_anu'+item_no);
		msg=results[anu];
		reset_ul_question_height(item_no,0);
		$(result_id).html(msg).fadeIn(3000);
	});
}
function set_default_checked_language(){
	radio_id ='#lang_'+get_language();
	$(radio_id).prop("checked", true);
}
function reset_ul_question_height(no,height){
	var ul_q_id='ul_questions'+no;
	$('#'+ul_q_id).height(height);
}
function get_review(no){
	var lang=get_language();	
	var review_file='review'+no;
	var result_id='#result'+no;
	$(result_id).hide();
	var msg=get_localstorage_data(no);
	$(result_id).html(msg).fadeIn(3000);
}
function store_cookies_number(anu){
	localStorage.setItem('cookies_number', anu);
}
function store_fortune_cookies_date(){
	localStorage.setItem('fortune_cookies_date', todays_date());
}
function clear_panel(item_no,option){
	$('#ul_questions'+item_no).html('');	
	var result_id='#result'+item_no;
	if(option=='all'){	
		$(result_id).hide();	
		$(result_id).html('');
		localStorage.removeItem('result_anu'+item_no);
	} 
}
function reset_result(item_no){
	clear_panel(item_no,'all');
}
function get_buttontry_name(lang){
	switch(lang){
		case 'eng':
			lbl='Try Again?';
		break;
		case 'ind':
			lbl='Coba Lagi?';
		break;
	}
	return lbl;
}
function save_fresh(){
	localStorage.setItem('fresh','1');
}
function get_fresh(){
	fresh_status=localStorage.getItem('fresh');
	if(fresh_status=='' || fresh_status==undefined)fresh_status='0';
	return fresh_status;
}
function default_settings_values(){
	save_fresh();
}
function new_settings_values(){
	//nothing
}
function uppercase_first_letter(string){
	return string.charAt(0).toUpperCase()+string.slice(1);
}
function get_list_pos_top(){
	return localStorage.getItem('list_pos_top');
}
function randQuiz(num,arry) {if (arry.length < num) return arry;var rndary = new Array();for (var i = 0; i<arry.length; i++) {var x = Math.floor(Math.random()*500)+100;var y = 101+i;rndary[i] = ''+x+y+':'+arry[i];}rndary.sort();var newary = new Array();var sel = '';for (var i=0; i<num; i++) {sel += rndary[i].substr(3,3); newary[i] = rndary[i].substr(7);}document.cookie = 'quizSel='+sel;return newary;}
function sameQuiz(quiz,sel) {var newary = new Array();for (var i=0; i< sel.length/3;i++) {var n = sel.substr(i*3,3);var m = parseInt(n) - 101;newary[i] = quiz[m];}return newary;}
function readCookie(cname) {thisCookie = document.cookie.split('; ');for (var i=0; i<thisCookie.length;i++) {if (thisCookie[i].split('=')[0] == cname) return thisCookie[i].split('=')[1];} return false;}
function screen_height(){return screen.availHeight;};
function get_window_height(){
	localStorage.height=$(window).height()-90;
	return localStorage.height;
}
function get_review(no){
	var lang=get_language();	
	var review_file='review'+no;
	var result_id='#result'+no;
	$(result_id).hide();
	var msg=get_localstorage_data(no);
	$(result_id).html(msg).fadeIn(3000);
}
function store_result(item_no){
	var review_file='review'+item_no;
	$.getScript('js/datas/eng/'+review_file+'.js', function() {
		localStorage.setItem('result_msg_eng'+item_no, msg);
	});
	$.getScript('js/datas/ind/'+review_file+'.js', function() {
		localStorage.setItem('result_msg_ind'+item_no, msg);
	});
}
function processAnswer(lang,item_no,num_questions,q_no,cor){
var review_file='review'+item_no;	
var score_id='#score'+item_no;
var adv_score_id='#adv_score'+item_no;
var result_id='#result'+item_no;
switch (item_no){
	case 27:
	case 43:
	case 45:
	case 46:
		var adv_score='y';
		var temp_score = cor+'~';
		$(adv_score_id).append(temp_score);
	break;
	default:
	var adv_score='n';
	var temp_score = parseInt($(score_id).val())+parseInt(cor);
	var score=$(score_id).val(temp_score);
}//endof switch
	var cur_question_no=parseInt(q_no);
	var next_question_no=parseInt(cur_question_no+1);
	var next_question='q'+item_no+'_'+next_question_no;
	var cur_question='q'+item_no+'_'+cur_question_no;
	$('#'+cur_question).slideUp(1000);	
	$('#'+next_question).slideDown(1000);
	if(cur_question_no>=num_questions){
				if(adv_score=='y'){
					final_score=$(adv_score_id).html();
				}else
					final_score=$(score_id).val();
				$.getScript('js/datas/'+lang+'/'+review_file+'.js', function() {
					reset_ul_question_height(item_no,0);
					$(result_id).html(msg).fadeIn(3000);
					$('#btn_reset'+item_no).fadeIn(1000);
					var quesl_id='#quesl_'+item_no+' a';
					$(quesl_id).css('text-decoration','line-through');
					$(score_id).val('');
					$(adv_score_id).html('');
					msg='';
				});
				store_result(item_no);
		}
}
function clear_panel(item_no,option){
	$('#ul_questions'+item_no).html('');	
	var result_id='#result'+item_no;
	var score_id='#score'+item_no;
	var storage_msg_eng='result_msg_eng'+item_no;
	var storage_msg_ind='result_msg_ind'+item_no;
	if(option=='all'){	
		$(result_id).hide();	
		$(result_id).html('');
		$(score_id).val('0');
		localStorage.removeItem(storage_msg_eng);
		localStorage.removeItem(storage_msg_ind);
	} 
}
function reset_result(item_no){
	clear_panel(item_no,'all');
}
function get_buttontry_name(lang){
	switch(lang){
		case 'eng':
			lbl='Try Again?';
		break;
		case 'ind':
			lbl='Coba Lagi?';
		break;
	}
	return lbl;
}