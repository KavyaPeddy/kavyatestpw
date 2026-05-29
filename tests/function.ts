//functions are independent blocks of code that perform a specific task. They can be defined using the function keyword or as arrow functions.

//function declaration
function myfunction(a: number, b: number): number {
    return a + b;
}
console.log(myfunction(10, 20));


function myfunction2(a :string, b: string): string {
    return = a + b;
}
console.log(myfunction2("Hello ", "Kavya"));

function myfunction3(a: number): void {
    console.log("The value of a is: " + a + " and it does not return anything.");   
}