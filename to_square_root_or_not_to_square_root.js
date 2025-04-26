function to_square_root_or_not_to_square_root(array){
    let newarray = [];

    for (let i=0; i <array.length; i++){
        if(Number.isInteger(Math.sqrt(array[i]))){
            newarray.push(Math.sqrt(array[i]));
        }
        else{
            newarray.push(array[i]*array[i]);
        }
    }

    return newarray;

}

console.log(to_square_root_or_not_to_square_root([4, 3, 9, 10]));