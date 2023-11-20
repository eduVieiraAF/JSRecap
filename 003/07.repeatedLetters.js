/*
    * Repeated letters in a string
    example: "Avocado" => {'a': 2, 'v': 1, 'o': 2, 'c': 1, 'd': 1}
*/

const str = "Elementary cheese".toLowerCase().replaceAll(" ", "");
let obj = {};

for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) obj[str[i]]++;
    else obj[str[i]] = 1;
}

console.log(obj);