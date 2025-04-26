

function double_char(str){

return str.split("").map((s) => s.repeat(2)).join("");
}

console.log(double_char("ahmed"));