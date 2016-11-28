var big = (n) => {
    
    var a = [];
    a.push(1);  
    for (var m = 0; m < 100; m ++ ) {
        a.push(0);
    } 
    
    var carry = 0;  
    for (var i = 2; i <=n; i ++) {  
        for (var j = 0; j < a.length; j ++ ) { 
            var s = a[j] * i + carry;  
            a[j] = s % 10;  
            carry = Math.floor(s / 10);  
        }  
    }    
    var result = '';   
    for (var k = a.length - 1; k >= 0; k --) {
        result += a[k] + '';
    }   
    return result;
};

console.time('calculation');
console.log(big(30));
console.timeEnd('calculation');
 
 
