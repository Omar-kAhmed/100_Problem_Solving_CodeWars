


function count_by_x(x, n){

    let newarray = []


    for (let i=1; i <n; i++){
        newarray.push(x*i)
    }

    return newarray;

}

console.log(count_by_x(2, 5));