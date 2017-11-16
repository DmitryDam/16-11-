 var p=document.getElementById('out1');
for(var i=4;i<=400;i++) {
	p.innerHTML+=i + " ";
}

 var p=document.getElementById('out2');
for(var i=4;i<=13;i=i+3) {
	p.innerHTML+=i + " ";
}

 var p=document.getElementById('out3');
for(var i=654;i>=0;i--) {
	p.innerHTML+=i + " ";
}

 var p=document.getElementById('out4');
for(var i=1983;i<=2017;i++) {
	p.innerHTML+=i + '<hr>';
}

 var p=document.getElementById('out5');
for(var i=-4;i<=100;i=i+2) {
	p.innerHTML+=i + " ";
}

var m = [3, 6, 1, 13, 88, 43];
console.log(m[0],m[3]);

var m1= ['Hi', "hello", 34, "prima"];
console.log(m1[0],m1[3]);

var m2=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
console.log(m2.length);

var m3 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
m3[3]="new element";
console.log(m3);

var m4=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
m4[2]=22;
m4[4]=44;
console.log(m4);

var m5=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
m5[10]=100;
console.log(m5);

var m6=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
m6[12]=200;
console.log(m6);
console.log(m6.length);
console.log(m6[11]);

// Дан массив var arr = [31, 24, 35, 47, 12]. Выведите arr[3], arr[60].
var m7 = [31, 24, 35, 47, 12];
console.log(m7[3],m7[60]);

// 9. Дан массив var arr = [31, 24, 35, 47, 12]. Выведите arr[f], где переменная f = 1, f=4, f=7 
var m8 = [31, 24, 35, 47, 12];
console.log(m8[1],m8[4],m8[7]);

// Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Выведите arr[i], где переменная i = 1,2,3,4,5.
var m9 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];
for(var i=1; i<m9[5]; i++) {
	console.log(m9[i]);
}

// Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Выведите arr[i], где переменная i - вводит пользователь.
var m10 = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43];

document.getElementById('p1').onclick=change;
function change(){
	var i1 = document.getElementById('i1').value;	
	console.log(i1);
}

// var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Выведите массив на страницу через пробел.
var m11=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]

function masOut(){
	var p = document.getElementById('out7');
	var str='';
	for (var i=0; i<m11.length; i++){
		str += i +' --- ' + m11[i]+' ';
	}
	p.innerHTML = str;
}
masOut();

 // Дан массив var arr = ['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]. Выведите массив в обратном порядке на страницу через пробел.
var m12=['Hi', "hello", 34, "prima", 3, 6, 1, 13, 88, 43]

function masOut1(){
	var p = document.getElementById('out8');
	var str='';
	for (var i=m12.length-1; i>=0; i--){
		str += i +' --- ' + m12[i]+' ';
	}
	p.innerHTML = str;
}
masOut1();