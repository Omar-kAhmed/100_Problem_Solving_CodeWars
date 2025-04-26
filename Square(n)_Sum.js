

function Square_Sum(array){



    let sum =0;

    for (let i =0; i <array.length; i++){
        sum+= (array[i] *array[i]);
    }

    return sum;


}



console.log(Square_Sum([1,2,2]));