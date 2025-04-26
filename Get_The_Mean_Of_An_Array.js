

function Get_The_Mean_Of_An_Array(array){


let sum =0;

if(array.length == 0){
    return null;
}

for (let i=0; i < array.length ; i ++){
    sum+= array[i];
}

return Math.floor(sum / array.length);  

}


console.log(Get_The_Mean_Of_An_Array([1,3,4,5,6,7,8,9,2]))