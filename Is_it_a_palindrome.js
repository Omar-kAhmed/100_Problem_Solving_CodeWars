

function IsItAPalindrome(x){

   if( x.toLowerCase().split("").reverse().join("") === x){
    return true;
   }
   else{
    return false;
   }
}


console.log(IsItAPalindrome('omar'))