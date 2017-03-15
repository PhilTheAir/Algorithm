/*
there are N lights, which are numbered as 1 ~ n
the first person switches all of the lights to turn them on
the second person switches those lights whose number is a multiple of 2
the third person switches those lights whose number is a multiple of 3
......
there are k persons in total
given n and k, k <= n <= 1000
output the number of lights which are still on 
*/ 

var n = Number(process.argv[2]);
var k = Number(process.argv[3]);

var a = [];
  
for (var i = 0; i < n; i ++) { 
	a.push(false);
} 

for (var i = 1; i <= k; i ++) {
	for (var j = 1; j <= n; j ++) {
		if (j % i === 0) {
			a[j] = !a[j];
		}
	} 
}

for (var i = 1; i <=n; i ++) {
	if (a[i]) {
		console.log(i);
	}
}
 
 
