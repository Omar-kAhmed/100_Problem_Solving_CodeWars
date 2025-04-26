
function sum_without_the_highest_and_the_lowest_number(array){

    let MaxValue= Math.max(array);
    let MinValue = Math.min(array);
    let filterArray= array.filter((x) => x != MaxValue && x!= MinValue)
    let sum = filterArray.reduce((acc, current) => acc + current, 0)

  

     return array = null ? 0 : sum;
     
    
}

console.log(sum_without_the_highest_and_the_lowest_number([1,2,3,4,5,6,7,8,9]));