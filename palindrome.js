

function checkPalindrome(n){
    var len = n.length;
   
    for (var i=0;i<len/2;i++){
        if(n[i]!==n[len-1-i]){
            return '';
        }
    }
    return '';
}
const n=(121);
const value=checkPalindrome(n);
console.log(value);

/*function printPalindrome(n){
    let rev=0;
    for(var i=n;i>0;i/=10)
    rev = rev*10+i%10;
    return (n==rev);

}
for(var i=1;i<=50;i++){
    if(printPalindrome(i)){
        count<<i<<"";
    }
}
console.log(printPalindrome(33));

 */