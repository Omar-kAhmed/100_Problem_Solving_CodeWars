


function Remove_Exclamation_Marks(string){


    return string.split("").filter((s) => s!== '!').join("");



}


console.log(Remove_Exclamation_Marks('hello! world!! this !! is !!! omar!'))