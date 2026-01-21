

const add = (a,b)=> a+b;
const divide = (a,b)=> (b==0)?"num can't divide by zero":a/b;
const multiply = (a,b)=> a*b;
const subtract = (a,b)=> a-b;

const calculator = (a,b,operation)=>{
    return operation(a,b);
}
console.log(calculator(1,2,add));
console.log(calculator(1,0,divide));
console.log(calculator(1,2,divide));
