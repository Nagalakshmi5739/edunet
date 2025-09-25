let a=100;
let b=500;
let c=a+b;
console.log('result:'+`${c}`);

let kms=3;
let miles=kms*0.621371
console.log('miles:'+`${miles}`);

let weight=49;
let h=157;
let height=h/100;
let BMI=weight/(height*height);
console.log('BMI:'+`${BMI}`);
  
if(BMI<18.5){
    console.log('underweight');
}else if(18.5>BMI<22.9){
    console.log('Normal');
}else if(23>BMI<24.9){
    console.log('overweight');
}else{
    console.log('obese');
}