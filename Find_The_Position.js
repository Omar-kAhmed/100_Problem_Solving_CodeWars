
function Find_The_Position(letter){

const alphapet="abcdefghijklmnopqrstuvwxyz"

for (let i=0; i <alphapet.length; i++){
    if(alphapet[i] == letter){
        return i+1
    }
}
return null;


}

console.log(Find_The_Position("d"));
