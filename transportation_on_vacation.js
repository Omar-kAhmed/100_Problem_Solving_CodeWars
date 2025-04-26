

function carRental (d){

    let rental_price = 40;

    if(d >= 7){
        return (rental_price * d) - 50 + "$"; 
    }
    else if(d < 3){
        return rental_price * d ;
    }
    else{
        return (rental_price * d) - 20 + "$";
    }
    
}

console.log(carRental(7));