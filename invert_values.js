


function invert_values(array){


    let newarray = []

    for(let i =0; i <array.length; i++){
        newarray.push(array[i]*-1)
    }

    return newarray;

}

console.log(invert_values([-2,-3,2,4,-5]))