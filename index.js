const breakLine = () => console.log(`--------------------------------`);
const arr = [23,21,161,42,151,612,15,62,52];
arr.forEach((value , index) => {
    console.log(`${index} - ${value}`);
})
breakLine();
const new_arr1 = arr.map((value) => {
    return value/10;
})
new_arr1.forEach((value) => {
    console.log(`${value}`);
})
breakLine();
const new_arr2 = arr.filter((value) => {
    return value % 2 !=0 ;
})
new_arr2.forEach((value) => {
    console.log(`${value}`);
})
breakLine();
const total =arr.reduce((previous, value) => {
    previous += value;
    return previous;
},0)
console.log(total);
breakLine();
const result1 = arr.some((value) => {
    return value %2 !=0;
})
console.log(`Is any element in arr is odd?: ${result1}`);
breakLine();
const result2 = arr.every((value) => {
    return value %2 !=0;
})
console.log(`Are all element in arr is odd?: ${result2}`);
breakLine();
const result3 = arr.find((value) => {
    return value %2 == 0;
})
console.log(`First even number in arr is: ${result3}`);
breakLine();
const result4 = arr.findLast((value) => {
    return value %2 == 0;
})
console.log(`Last even number in arr is: ${result4}`);
breakLine();
const result5 = arr.findIndex((value) => {
    return value %2 == 0;
})
console.log(`First even index in arr is: ${result5}`);
breakLine();
const result6 = arr.findLastIndex((value) => {
    return value %2 == 0;
})
console.log(`Last even last index in arr is: ${result6}`);
breakLine();
const obj ={name:"Mohammad" , age: 27};
console.log(obj);
breakLine();
console.log(`name is: ${obj.name}`);
breakLine();
console.log(`age is: ${obj.age}`)
breakLine();
const printDetails = ({name, age}) => {
    console.log(`name is: ${name}`);
    console.log(`age is: ${age}`);
}
printDetails(obj);
breakLine();
let number_1 = 15;
let number_2 = 35;
console.log(`----------Before---------`)
console.log(`Number 1 is: ${number_1}`);
console.log(`Number 2 is: ${number_2}`);
console.log(`----------After---------`);
[number_1,number_2] = [number_2,number_1];
console.log(`Number 1 is: ${number_1}`);
console.log(`Number 2 is: ${number_2}`);
