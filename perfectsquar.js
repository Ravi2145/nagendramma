

//144,196,121,81,484
const num=484;
const isPerfectSquare = function(num){

    for(let x=1;x<=num;x++){
    /*let x =1;
    while(x*x<=num){
        if(x*x!=num){
            x++;
            continue;
        }*/
        return true;
    }
    return false;
}
console.log(isPerfectSquare(num));
