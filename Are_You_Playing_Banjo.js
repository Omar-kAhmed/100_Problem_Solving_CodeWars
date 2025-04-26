

function areYouPlayingBanjo(name) {
    if (name.charAt(0) === "R" || name.charAt(0) === "r") {
        return `${name} plays Banjo`;
    } else {
        return `${name} does not play Banjo`;
    }
}

console.log(areYouPlayingBanjo("Omar"));


