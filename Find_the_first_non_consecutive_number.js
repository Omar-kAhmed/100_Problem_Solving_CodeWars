


function Find_the_first_non_consecutive_number(array){


    for ( let i=1; i< array.length; i ++){
        if(array[i] !== array[i - 1 ] +1 ){
            return array[i];
        }
       
    }



return null


}

console.log(Find_the_first_non_consecutive_number([1,2,3,4,5,6,7,9]));