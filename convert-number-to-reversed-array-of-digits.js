


function convert_number_to_reversed_array_of_digits(number){

   return number.toString().split("")
    .map((m) => Number(m))
    .reverse();

}


console.log(convert_number_to_reversed_array_of_digits(927983983))