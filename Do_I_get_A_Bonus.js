

function Do_i_get_a_bonus (salary,bonus){

    if(bonus == true){
        return "$" + salary * 10;
    }
    else {
        return "$" + salary;
    }


}


console.log(Do_i_get_a_bonus(5000, false))