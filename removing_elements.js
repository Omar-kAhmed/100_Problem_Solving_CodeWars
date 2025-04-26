function removing_elements(array){


    let newarray= []

    for (let i =0; i< array.length; i++){
        if(i % 2 === 0){
            newarray.push(array[i]);
        }
    }
    return newarray;



}


console.log(removing_elements(['keep', 'remove', 'keep', 'remove', 'keep']))