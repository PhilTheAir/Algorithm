/*
calculate the last 6 digits of the result S = 1! + 2! + 3! + ... + n!
n <= 1000000
*/

var startTime = Date.now();
var n = Number(process.argv[2]);
var s = 0;
var MOD = 1000000;
var sixZero = 25;
n = Math.min(n, sixZero);

for (var i = 1; i <= n; i ++)
{
	var f = 1;
	for (var j = 1; j <= i; j ++)
	{
		f *= j;
	}
	s = (s + f) % MOD;
}

// Number.MAX_VALUE // 1.7976931348623157e+308
// Number.MIN_VALUE // 5e-324
console.log(s);
console.log('Time used : ' + (Date.now() - startTime) / 1000);