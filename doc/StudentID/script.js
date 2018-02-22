function inputNum0(){
	document.forms[0].elements[2].value = "あ";
	return false;
}
function inputNum() {
	if(document.forms[0].elements[0].value.length < 7){
		window.alert("文字数が七文字未満です。\n文字数は七文字にしてください。");
	}else{
		char0 = document.forms[0].elements[0].value.charAt(0);
		char1 = document.forms[0].elements[0].value.charAt(1);
		char2 = document.forms[0].elements[0].value.charAt(2);
		char3 = document.forms[0].elements[0].value.charAt(3);
		char4 = document.forms[0].elements[0].value.charAt(4);
		char5 = document.forms[0].elements[0].value.charAt(5);
		char6 = document.forms[0].elements[0].value.charAt(6);

		reCha0 = checkNum(char0);
		reCha1 = checkNum(char1);
		reCha2 = checkAlp(char2);
		reCha3 = checkNum(char3);
		reCha4 = checkNum(char4);
		reCha5 = checkNum(char5);
		reCha6 = checkNum(char6);

		if(!checkIllegalCharacter(reCha0,reCha1,reCha2,reCha3,reCha4,reCha5,reCha6)){
			window.alert("不当な文字が使用されているため認識できません。");
		}else{
			if(!cheakIllegalClass(reCha2)){
				window.alert("3文字目のアルファベットが間違っています。\n使用できるのはL,S,A,P,Tの5つです。");
			}else{
				gradeVal   = mod( (reCha0*(-8) + reCha1 * (-1)) , 11);
				facultyVal = checkFacultyVal(reCha2);
				subjectVal = checkSubjectVal(reCha3,reCha4);
				privateVal = checkPrivateVal(reCha5,reCha6);

				resultNum  = mod( (gradeVal + facultyVal + subjectVal + privateVal), 11 );

				document.forms[0].elements[2].value = checkResultAlp(resultNum);
			}
		}
	}
}

function checkNum(num){
	reNum = -1;
	if((num=="0") || (num=="０") || (num=="零") || (num=="〇")) reNum=0;
	if((num=="1") || (num=="１") || (num=="一") || (num=="Ⅰ")) reNum=1;
	if((num=="2") || (num=="２") || (num=="二") || (num=="Ⅱ")) reNum=2;
	if((num=="3") || (num=="３") || (num=="三") || (num=="Ⅲ")) reNum=3;
	if((num=="4") || (num=="４") || (num=="四") || (num=="Ⅳ")) reNum=4;
	if((num=="5") || (num=="５") || (num=="五") || (num=="Ⅴ")) reNum=5;
	if((num=="6") || (num=="６") || (num=="六") || (num=="Ⅵ")) reNum=6;
	if((num=="7") || (num=="７") || (num=="七") || (num=="Ⅶ")) reNum=7;
	if((num=="8") || (num=="８") || (num=="八") || (num=="八")) reNum=8;
	if((num=="9") || (num=="９") || (num=="九") || (num=="Ⅸ")) reNum=9;
	return reNum;
}

function checkAlp(alp){
	reAlp = "error";
	if((alp=="a") || (alp=="A") || (alp=="ａ") || (alp=="Ａ")) reAlp="A";
	if((alp=="b") || (alp=="B") || (alp=="ｂ") || (alp=="Ｂ")) reAlp="B";
	if((alp=="c") || (alp=="C") || (alp=="ｃ") || (alp=="Ｃ")) reAlp="C";
	if((alp=="d") || (alp=="D") || (alp=="ｄ") || (alp=="Ｄ")) reAlp="D";
	if((alp=="e") || (alp=="E") || (alp=="ｅ") || (alp=="Ｅ")) reAlp="E";
	if((alp=="f") || (alp=="F") || (alp=="ｆ") || (alp=="Ｆ")) reAlp="F";
	if((alp=="g") || (alp=="G") || (alp=="ｇ") || (alp=="Ｇ")) reAlp="G";
	if((alp=="h") || (alp=="H") || (alp=="ｈ") || (alp=="Ｈ")) reAlp="H";
	if((alp=="i") || (alp=="I") || (alp=="ｉ") || (alp=="Ｉ")) reAlp="I";
	if((alp=="j") || (alp=="J") || (alp=="ｊ") || (alp=="Ｊ")) reAlp="J";
	if((alp=="k") || (alp=="K") || (alp=="ｋ") || (alp=="Ｋ")) reAlp="K";
	if((alp=="l") || (alp=="L") || (alp=="ｌ") || (alp=="Ｌ")) reAlp="L";
	if((alp=="m") || (alp=="M") || (alp=="ｍ") || (alp=="Ｍ")) reAlp="M";
	if((alp=="n") || (alp=="N") || (alp=="ｎ") || (alp=="Ｎ")) reAlp="N";
	if((alp=="o") || (alp=="O") || (alp=="ｏ") || (alp=="Ｏ")) reAlp="O";
	if((alp=="p") || (alp=="P") || (alp=="ｐ") || (alp=="Ｐ")) reAlp="P";
	if((alp=="q") || (alp=="Q") || (alp=="ｑ") || (alp=="Ｑ")) reAlp="Q";
	if((alp=="r") || (alp=="R") || (alp=="ｒ") || (alp=="Ｒ")) reAlp="R";
	if((alp=="s") || (alp=="S") || (alp=="ｓ") || (alp=="Ｓ")) reAlp="S";
	if((alp=="t") || (alp=="T") || (alp=="ｔ") || (alp=="Ｔ")) reAlp="T";
	if((alp=="u") || (alp=="U") || (alp=="ｕ") || (alp=="Ｕ")) reAlp="U";
	if((alp=="v") || (alp=="V") || (alp=="ｖ") || (alp=="Ｖ")) reAlp="V";
	if((alp=="w") || (alp=="W") || (alp=="ｗ") || (alp=="Ｗ")) reAlp="W";
	if((alp=="x") || (alp=="X") || (alp=="ｘ") || (alp=="Ｘ")) reAlp="X";
	if((alp=="y") || (alp=="Y") || (alp=="ｙ") || (alp=="Ｙ")) reAlp="Y";
	if((alp=="z") || (alp=="Z") || (alp=="ｚ") || (alp=="Ｚ")) reAlp="Z";
	return reAlp;
}

function checkIllegalCharacter(a,b,c,d,e,f,g){
	result = true;

	if(a==-1 || b==-1 || d==-1 || e==-1 || f==-1 || g==-1) result = false;
	if(c=="error") result = false;

	return result;
}

function cheakIllegalClass(c){
	result = true;
	if(c!="L" && c!="S" && c!="A" && c!="P" && c!="T") result = false;
	return result;
}

function checkFacultyVal(val){
	reVal = 10;
	if(val == "L") reVal = -1;
	if(val == "S") reVal = 0;
	if(val == "A") reVal = 1;
	if(val == "P") reVal = 5;
	if(val == "T") reVal = 6;
	return reVal;
}

function checkSubjectVal(i,j){
	return (i*2 + j*(-2));
}

function checkPrivateVal(i,j){
	priNum = i*10 + j;

	if((priNum-5)<0) groupNum = -1;
	else groupNum = ((priNum-5) - mod( (priNum-5) ,10 ))/10;

	superPriNum = mod( mod( (priNum-5) ,10 ), 5 );

	return (groupNum*5 + superPriNum);
}

function checkResultAlp(val){
	result = "";
	if(val == 0)  result = "T";
	if(val == 1)  result = "N";
	if(val == 2)  result = "G";
	if(val == 3)  result = "Y";
	if(val == 4)  result = "S";
	if(val == 5)  result = "L";
	if(val == 6)  result = "F";
	if(val == 7)  result = "X";
	if(val == 8)  result = "R";
	if(val == 9)  result = "H";
	if(val == 10) result = "A";
	return (reCha0 + "" + reCha1 + "" + reCha2 + "" + reCha3 + "" + reCha4 + "" + reCha5 + "" + reCha6 + "" + result);
}

function mod(a,b){
	if(a>=0) return (a%b);
	else if(a<0){
		while(a<0){
				a += b;
		}
		return (a%b);
	}
}
