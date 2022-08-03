
function findMaxProfit(array){

    let maxProfit = 0;
    let buyingPrice = 0;
    let sellingPrice = 0;
    let changeBuyingPrice=true;

    for(let i=0;i<array.length-1;i++){
        sellingPrice = array[i+1];
        buyingPrice = array[i];

        if(changeBuyingPrice){
            buyingPrice=array[i];
        }


        if(sellingPrice<buyingPrice){
            //loss
            changeBuyingPrice = true;
            continue;
        }else{

            //profit
            let profit = sellingPrice-buyingPrice;
            if(profit>maxProfit){
                maxProfit=profit;
            }
            changeBuyingPrice = false;
        }

    }
    console.log(maxProfit);
}
findMaxProfit([100,180,260,310,40,535,695])







// function maxProfit(price, start, end){
//     if(end<=start)
//     return 0;
//     let profit = 0;
//     for(let i=start;i<end;i++){
//     for(let j=i+1;j<=end;j++){
//         if(price[j]>price[i]){
//         let curr_profit = price[j]-price[i]
//                      +maxProfit(price, start,i-1)
//                      +maxProfit(price, j+1, end);
//                 profit= Math.max(profit, curr_profit);

//             }
//         }
//     }
//     return profit;
// }
// var val=(100,180,260,310,40,535,695);
// console.log(maxProfit(val));
