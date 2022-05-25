// 2-Given an array of five values, calculate the average star rating
// , rounded to two decimal places. The array contains user votes per star, 
// so the first element [0] contains the number of 1-star ratings and the last element [4],
//  the number of 5-star ratings.

function calculate(arr){
    let sum = 0;
    let ave;
    let getSum = arr.map((num,index) => num * (index + 1), 0).reduce((acc,value) => acc + value ,0);
    // console.log(getSum);   //123 
    for (let i of arr){
        sum += i;
        // console.log(sum); //26
    }
    ave = (getSum/sum).toFixed(2);
    return ave;    
}
let arr = [0,2,0,1,23];
console.log(calculate(arr));
    