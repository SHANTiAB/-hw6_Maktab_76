// 1-Create a function that takes in an array and returns an array of the accumulating sum



function accArray(array) {
    let firstNum = 0;      //firstNum=1 ---> //[2, 4, 7, 11]
    return array.map((num) => firstNum += num);
  }
  console.log(accArray([1, 2, 3, 4]));  
  console.log(accArray([1, 0, 1, 0, 1])); 
  console.log(accArray([])); 


