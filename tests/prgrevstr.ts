let str = "Hello Kavya";
function reversestring(str : string){
   let reverse = "";
   for(let i = str.length - 1; i >= 0; i--){
        reverse += str[i];
    }
    return reverse;
}
console.log(reversestring(str));