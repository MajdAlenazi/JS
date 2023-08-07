// even and odd number

let numbers =2;

if(numbers %2==0){
    console.log("The number is even");

}else{
    console.log("The number is odd");
}
console.log("----------Grade of student------------");

// Grade of student
let Grade=95;

if(Grade>=90){
    console.log("A");
}
else if(Grade>=80 && Grade<89){
    console.log("B");
}
else if(Grade>=70 && Grade<79){
    console.log("C");
}
else{
    console.log("F");
}
console.log("-----------feez and beez------------");

let number11=15
if(number11 % 3==0 && number11 % 5 ==0){
    console.log("feez and beez");
}
else if(number11 %3==0){
    console.log("feez");
}
else if(number11 %5==0){
    console.log("beez");
}

console.log("------------square number -------------");

// square number 
for(let i=0; i<=10; i++){
    console.log((i* i));
}
console.log("------------odd number------------");

// odd number
for(let i=0; i<=20; i++){
    
    if(i %2==1){
      console.log(i);
    }
  }
  
  console.log("-----------Even number--------------");

// Even number
for(let i=0; i<=25; i++){
    
  if(i %2==0){
    console.log(i);
  }
}
console.log("-------------------------");

let n = 9;
let num='' 
for (let i = 1; i <= n; i++) {
  for (let j= 1; j < i; j++) {
    num += j ;
  }
  num+= "\n";
}
console.log(num);


console.log("--------------Fibonacci sequence----------");


let number = 0
let number2 = 1
let sum ;

for (let i = 0; i <= 19; i++) {
    console.log(number);

    sum = number + number2;
    number = number2;
    number2 = sum;
}
