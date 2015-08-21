var readline = require('readline');

var rl = readline.createInterface({ input: process.stdin,
  									output: process.stdout });

rl.question("Please input a line of words ... ", function(words) 
{
	// words is string with the content equivalent to the array process.argv.slice(2)
	
	
	
  	rl.close();
});