console.log("From external script");
//single line comment
/*
multi line comment
*/
//dynamically typed lang
//declaration statements
var a;//
var a=10;
var a=20;
console.log(a);
var b=10;
var b=20;
console.log(b);
b=25;
console.log(b);
{
    var b=40;
    console.log("inside block"+a);
}
console.log("outside block"+b);
let c=20;
console.log(c);
c=30;
console.log(c);
{
    var d=10;
    console.log("inside the block"+d);
}
 console.log("outside the block"+d);
 const pie=3.14;
 console.log(pie);
 {
    const pie=3.14;
    console.log("inside"+pie);
 }
 console.log("outside"+pie);
  let x=10;
  console.log(x);
  x="deek";
  console.log(x);
  x=31.8;
  console.log(x);
  //hoisting->First initialize&
  //then declare
  // var hoisting=>Possible
   p=10//initializing
   var p;
   console.log(p);
   /*
   //let Hosting->Not possible
   q=20//initialization
   let q;//declaring
   console.log(q);///error

   //const-hoisting->Not possible
   r=20;
   console.log(r);
  */
 