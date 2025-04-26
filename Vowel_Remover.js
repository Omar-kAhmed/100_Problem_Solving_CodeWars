function Vowel_Remover(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let newarray = [];

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      newarray.push(string[i]);
    }
  }
  return newarray.join("");
}

console.log(Vowel_Remover("hello"));
 