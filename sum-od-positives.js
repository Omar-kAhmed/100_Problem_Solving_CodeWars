

// get the sum of positive

//initial value = 0

//

function SumOfPositives(arr){

    let initial =0; 

    for(let i =0; i< arr.length; i++ ){
        if(arr[i]>0){
            initial+= arr[i];
        }
    }

return initial;


}
console.log(SumOfPositives([2,4,-5,-3]));