//Global vars
var entry = [];
//End of Vars

//QUESTION ONE: Sort out which of two numbers are the largest
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

//QUESTION TWP: Sort out which of two numbers are the largest
function maxOfThree(a,b,c){
	a = parseInt(a,10);
	b = parseInt(b,10);
	c = parseInt(c,10);
	var big1 = bigger(a,b);
	var big2 = bigger(b,c);
	var ultimateBig = bigger(big1,big2);
	return ultimateBig;
}

//QUESTION 3: Checks whether input character is a vowel
function isVowel(a){
	var vowel = "aeiou";
	a = a.toLowerCase();
	var vow = false;
	for(var i = 0; i < vowel.length; i++){
		if(a == vowel.charAt(i) || a == " "){
			vow = true;
		}
	}
	return vow;
}


/*QUESTION 4: takes in a string of characters, doubling every
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

//QUESTION 5
function addValue(a){
	document.getElementById('5A').value = '';
	a = parseInt(a,10);
	entry.push(a);
}

function arrSUM(){
	var som = entry[0];
	if(entry.length == 0)
	{
		return "Put some numbers in will ya?!";
	}
	for(var i = 1; i < entry.length; i++){
		som += entry[i];
	}
	return som;
}

function arrPROD(){
	var prod = entry[0];
	if(entry.length == 0)
	{
		return "Put some numbers in will ya?!";
	}
	for(var i = 1; i < entry.length; i++){
		prod *= entry[i];
	}
	return prod;
}

function arrSHOW(){
	if(entry.length == 0)
	{
		return "There are no numbers to show!";
	}
	return entry;
}

function arrCLEAR(){
	entry.length = 0;
	return "The number bank is now empty!";
}
//END OF QUESTION 5. IT WAS A DOOZIE

//QUESTION 6: take a string and reverse it!
function strFLIP(a){
	var x = "";
	for (var i = 0; i < a.length; i++){
		x = a[i] + x;
	}
	return x;
}

//QUESTION 7
function strTranslate(a){
	for(var i = 0; i < a.length; i++){
		a = a.toLowerCase();
	}
	a = a.replace("merry","god");
	a = a.replace("christmas","jul");
	a = a.replace("and","och");
	a = a.replace("happy","gott");
	a = a.replace("new","nytt");
	a = a.replace("year","år");
	
	return a;
}

//QUESTION 8
function findLongestWord(a){
	var word = a.split(" ");
    var longest = "";
    for (var i = 0; i < word.length; i++) {
        if (longest.length < word[i].length) {
            longest = word[i];
        }
    }
    return longest + " is the longest word";
}

function filterLongWords(a, b){
	var word = a.split(" ");
    var longest = "";
    for (var i = 0; i < word.length; i++) {
        if (b < word[i].length) {
            longest = word[i];
        }
    }
    return longest + " is/are the word(s) longer than " + b + ' letters.';
}
