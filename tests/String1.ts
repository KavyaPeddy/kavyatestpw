

let msg: string = "I love Playwright";
console.log(msg.length); //length of string

console.log(msg.indexOf("love")); //index of substring
console.log(msg.replace("Playwright", "AI")); //replace substring

console.log(msg.toUpperCase()); //convert to uppercase
console.log(msg.toLowerCase()); //convert to lowercase
console.log(msg.substring(2, 6)); //substring from index 2 to 6 (exclusive)

console.log(msg[5]);    //access character at index 5
console.log(msg.charAt(10));  //access character at index 10 using charAt method

let res  = msg.split(" "); //split string into an array of substrings based on space delimiter
console.log(res);

let strarray = ["I", "love", "Playwright"];  //array of strings
