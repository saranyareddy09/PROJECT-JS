 let age=prompt("enter ur age ");
if(age<18){
console.log("not adult")
} else {
console.log("adult")
}
/*
let n=2
if(n>0){
    console.log("positive");
}  else if(n===0){
    console.log("zero");
} else {
    console.log("negative");
}
*/
let day=1
switch(day){
    case 1:
       console.log("Monday");
    break
    case 2:
        console.log("Tuesday");
    break
    case 3:
        console.log("Wednesday");
    break
    default:
        console.log("Invalid Day!!");
    break
}
 let numb=12
 
 if(numb%2===0){
    console.log("Even");
 }else {
    console.log("odd");
 }
 /*  
 for( let i=0,i<=10,i++){
    console.log( i );
 }
*/
let i=0
 while(i<=10){
    console.log(i);
    i+=2
 }
 let j=1
do {
   console.log(j*3);
   j++ 
} while (j<=10) 
