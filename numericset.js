/*
given several single figures
find out expressions like abc * ed so that numbers in:
abc
ed
abc * e
abc * d
abc * ed
are all the comosition of given figures
*/  
  
var n = Number(process.argv[2]);
var count = 0;

for (var abc = 111; abc <= 999; abc ++) {
	for (var de = 11; de <= 99; de ++) {
		var x = abc * (de % 10); 
		var y = abc * Math.floor(de / 10); 
		var z = abc * de;
		var s = '' + abc + de + x + y + z; 
		var yes = true;
		var aim = n.toString();
		for (var i = 0; i < s.length; i ++) {
			if (aim.indexOf(s.charAt(i)) === -1) {
				yes = false;
				break;
			}  
		}
		if (yes) {
			console.log('<' + (++count) + '>');
			console.log('  ' + abc + '\n' + 'X  ' + de + '\n-----\n ' + x + '\n' + y + '\n-----\n' + z + '\n\n');
		}
	}
}
 
console.log('The number of solutions = ' + count);
