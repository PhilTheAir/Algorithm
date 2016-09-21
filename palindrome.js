var readline = require('readline');

var rl = readline.createInterface({ input: process.stdin,
  									output: process.stdout });

rl.question("Please input a line of words ... ", function(words) {
	// the 'words' variety is a string with the content equivalent to the array process.argv.slice(2)
	var transformed = '$#';
	for (var index in words){
		transformed += words.charAt(index);
	}
	var p = [];
    var mx = 0;
    var id = 0;
    for (var i = 1; i <= transformed.length; i++) {
        if (mx > i) {
            p[i] = (p[2 * id - i] < (mx - i) ? p[2 * id - i] : (mx - i));
        }
        // http://www.cnblogs.com/biyeymyhjob/archive/2012/10/04/2711527.html
        else {
            p[i] = 1;
        }
        while(transformed.charAt(i - p[i]) == transformed.charAt(i + p[i])) {
        	p[i]++;
       	}    
        if (i + p[i] > mx) {
            mx = i + p[i];
            id = i;
        }
    }
    var max = 0;
    var ii;
    for(var  i = 1; i < transformed.length; i++) {
        if (p[i] > max) {
            ii = i;
            max = p[i];
        }
    }
    max--;
    var start = ii - max ;
    var end = ii + max;
    var s = '';
    for (var i = start; i <= end; i++) {
        if (transformed.charAt(i) != '#') {
            s += transformed.charAt(i);
        }
    }
    console.log(s);
    rl.close();
});

/*
original_string					   1     2     2     1     2     3     2     1
transformed						#  1  #  2  #  2  #  1  #  2  #  3  #  2  #  1  #
length_of_palindrome_per_char	1  2  1  2  5  2  1  4  1  2  1  6  1  2  1  2  1
index							0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16
						  						  edge  -i       spot     i     edge
														-i = 2 * spot - i       edge = spot + length_of_palindrome(spot)
																		  length_of_palindrome(i)



*/
