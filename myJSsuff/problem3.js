function bigger(a,b) {
	a = parseInt(a, 10);
	b = parseInt(b, 10);
	if (a > b)
	{
		return a;
	}
	else {
		return b;
	}
	
}

function maxOfThree(a,b,c){
	a = parseInt(a,10);
	b = parseInt(b,10);
	c = parseInt(c,10);
	var big1 = bigger(a,b);
	var big2 = bigger(b,c);
	var ultimateBig = bigger(big1,big2);
	return ultimateBig;
}


function isVowel(a){
	var vowel = "aeiou";
	var vow = false;
	for(var i = 0; i < vowel.length; i++){
		if(a == vowel.charAt(i) || a == " "){
			vow = true;
		}
	}
	return vow;
}


/*takes in a string of characters, doubling every
consonant and place an o in between each pair*/ 
function fanslate(a){
	var result = "";
	for (var i=0; i < a.length; i++){
		if (isVowel(a.charAt(i)) == false){
			result += a.charAt(i) + "o" + a.charAt(i);
		}
		else{
			result += a.charAt(i);
		}
	}
	return result;
}