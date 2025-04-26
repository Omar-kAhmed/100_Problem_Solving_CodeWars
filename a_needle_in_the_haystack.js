
function a_needle_in_the_haystack(haystack){


    for(let i =0; i < haystack.length; i++){
        if(haystack[i] == "needle"){
            return "found the needle at pisition " + i;
        }

    }


}

console.log(a_needle_in_the_haystack(["hay", "omar", "zayed", "needle", "no", "yes"]));