function Exclusive_Xor_Operator(a,b){


    if ((a == true && b == false) || (a == false && b == true) ){
        return true;
    }
    else {
        return false;
    }


}

console.log(Exclusive_Xor_Operator(true, false))