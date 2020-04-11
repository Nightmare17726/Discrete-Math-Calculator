var a, b, c, r, n, m;
var aVals = [];
var bVals = [];
var cVals = [];
var rVals = [];
var primeNums = [];

function init(){
	console.log("Made by Chase Franse (SLU, SP 20)");
	
	alert("Please know that, for all of the following functions, you will need to RELOAD the page before you enter new sets of numbers.");
	
	document.getElementById("gcf").addEventListener('click', function() {
		location.href = "gcf.html";
		a = 0;
		b = 0;
		c = 0;
		r = 0;
		n = 0;
		m = 0;
		aVals = [];
		bVals = [];
		cVals = [];
		rVals = [];
		document.getElementById("gcfValOne").value = 0;
		document.getElementById("gcfValTwo").value = 0;
	});
	
	document.getElementById("lcm").addEventListener('click', function() {
		location.href = "lcm.html";
		a = 0;
		b = 0;
		c = 0;
		r = 0;
		n = 0;
		m = 0;
		aVals = [];
		bVals = [];
		cVals = [];
		rVals = [];
		document.getElementById("lcmValOne").value = 0;
		document.getElementById("lcmValTwo").value = 0;
	});
	
	document.getElementById("linComb").addEventListener('click', function() {
		location.href="linearComb.html";
		a = 0;
		b = 0;
		c = 0;
		r = 0;
		n = 0;
		m = 0;
		aVals = [];
		bVals = [];
		cVals = [];
		rVals = [];
		document.getElementById("gcfValOne").value = "";
		document.getElementById("gcfValTwo").value = "";
	});
	
	document.getElementById("prime").addEventListener('click', function() {
		location.href="primeCheck.html";
		a = 0;
		b = 0;
		c = 0;
		r = 0;
		n = 0;
		m = 0;
		aVals = [];
		bVals = [];
		cVals = [];
		rVals = [];
	});
	
	/*document.getElementById("conv").addEventListener('click', function() {
		location.href = "bconversion.html";
		a = 0;
		b = 0;
		c = 0;
		r = 0;
		n = 0;
		m = 0;
		aVals = [];
		bVals = [];
		cVals = [];
		rVals = [];
		document.getElementById("bConvF").value = 0;
		document.getElementById("bConvT").value = 0;
		document.getElementById("bConv").value = 0;
	});*/
	
}

var Element = {
	setGvals: function() {
		a = document.getElementById("gcfValOne").value;
		b = document.getElementById("gcfValTwo").value;
		console.log(`${a}, ${b}`);
		c = findGCF(a, b);
		//console.log(c);
		document.getElementById("GCFresult").value = c;
	},
	setLvals: function() {
		a = document.getElementById("lcmValOne").value;
		b = document.getElementById("lcmValTwo").value;
		console.log(`${a}, ${b}`);
		c = findLCM(a, b);
		document.getElementById("LCMresult").value = c;
	},
	baseConversion: function(){
		var convF = document.getElementById("bConvF").value;
		var convT = document.getElementById("bConvT").value;
		var val = document.getElementById("bConv").value;
		c = baseConv(convF, convT, val);
		console.log(c);
		document.getElementById("bConvResult").value = c;
	},
	linearComb: function() {
		a = document.getElementById("lcValOne").value;
		b = document.getElementById("lcValTwo").value;
		linearCombination(a, b);
	},
	primeCheck: function() {
		a = document.getElementById("primeVal").value;
		c = primeNumCheck(a);
		document.getElementById("PRIMEres").value = c;
		
	}
	
	
}

function back(){
	location.href = "index.html";
}

function findGCF(a, b){
	//Euclidean Algorithm
	while(r != 0){
		r = b % a;
		b = a;
		a = r;
		console.log(a);
	}
	return b;
}

function findLCM(a, b){
	m = a;
	n = b;
	//Euclidean Algorithm
	while (r != 0){
		r = b % a;
		b = a;
		a = r;
		//console.log(b);
	}
	console.log(`${c}, ${b}`);
	c = ((m*n)/b);
	return c;
}

function baseConv(convF, convT, val){
	var indArr = [val.length];
	var divAlg = [];
	var x = 0;
	var r = 0;
	
	//Split up the input into an array of individual numbers
	for(var e = 0; e < val.length; e++){
		indArr[e] = val[e];
		//console.log(indArr[e]);
	}
	
	//Division Algorithm
	do{
		x = Math.floor(val / convT);
		r = val % convT;
		divAlg.unshift(r);
		val = x;
	}while(r != 0);
	divAlg.shift();
	console.log(divAlg);
	
	return (divAlg.valueOf());
	
}

function linearCombination(a, b){
	var e = 0;
	var m = 0;
	var n = 0;
	var k = 0;
	var j = 0;
	
	while(r != 0){
		r = b % a;
		aVals[e] = a;
		bVals[e] = b;
		rVals[e] = r;
		cVals[e] = Math.floor(b/a);
		console.log(`${b} = ${a} * ${cVals[e]} + ${r}`);
		b = a;
		a = r;
		e++;
		console.log(r);
	}
	var gcd = b;
	var x = e - 1;
	//console.log(`${rVals[x]} = ${bVals[x]} - ${cVals[x]} * ${aVals[x]}`);
	
	console.log(" ");
	
	console.log(aVals[0], rVals[0], bVals[0]);
	
	if(aVals[0] < bVals[0]){
		m = aVals[0]; //x
		n = bVals[0]; //y
	}
	else if(aVals[0] > bVals[0]){
		m = bVals[0];
		n = aVals[0];
	}
	
	while(m*j + n*k != gcd){
		if(m*j + n*k > gcd){
			j -= 1;
		}
		else if(m*j + n*k < gcd){
			k += 1;
		}
	}
	console.log (j, k);
	var finalRes = [j, k];
	
	document.getElementById("LCresult").value = `${gcd} = ${j}*${m} + ${k}*${n}`;
	
}

function primeNumCheck(a){
	console.log(`Number to check: ${a}`);
	primeNums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 53, 59, 61, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
	
	var e = 0;
	var x = 1;
	var y = 0;
	
	if(a > 1000){
		return "Value too large. Please input smaller number.";
	}
	
	//Comparason between a / primeNums[e] && Math.floor(a / primeNums[e]);
	while(x != y){
		x = a / primeNums[e];
		y = Math.floor(a / primeNums[e]);
		e++;
	}
	
	console.log(e - 1);
	console.log(primeNums[e - 1]);
	
	if(a == primeNums[e-1]){
		return `Value ${a} is a Prime Number.`;
	}
	else{
		return `Value ${a} is divisible by ${primeNums[e-1]}.`;
	}
}







