

function basic_mathematical_equations(oper, number1, number2){

    if(oper == '+'){
        return number1 + number2;
    }
    else if(oper == '-'){
        return number1 - number2;
    }
    else if(oper == '*'){
        return number1 * number2;
    }
    else if (oper == '%'){
        return number1 % number2;
    }
    else if(oper == '/'){
        return number1 / number2;

    }
    else{
        return "Enter a Valid operator, or number!!"
    }

}

console.log(basic_mathematical_equations('*', 5, 8))