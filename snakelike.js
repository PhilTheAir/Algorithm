/*
given n, output a serpentine matrix
e.g. n = 4:
10 11 12 1
9  16 13 2
8  15 14 3
7  6  5  4
*/
 
var n = Number(process.argv[2]);
var a = [];

for(var i = 0; i < n; i ++) {
	a[i] = [];
	for (var j = 0; j < n; j ++)
	{
		a[i][j] = 0;
	}
}

var total = 1;
var x = 0;
var y = n - 1;
a[0][n - 1] = 1;

while (total < Math.pow(n, 2)) {
	while ((x + 1 < n) && (a[x + 1][y] === 0)) {
		a[++x][y] = ++ total;
	}
	while ((y - 1 >= 0) && (a[x][y - 1] === 0)) {
		a[x][--y] = ++ total;
	}
	while ((x - 1 >= 0) && (a[x - 1][y] === 0)) {
		a[--x][y] = ++ total;
	}
	while ((y + 1 < n) && (a[x][y + 1] === 0)) {
		a[x][++y] = ++ total;
	} 
}

for (var i = 0; i < n; i ++) {
	var s = '';
	for (var j = 0; j < n; j ++) {
		s += (a[i][j] + "  ").slice(0, 3);
	}
	console.log(s);
}
