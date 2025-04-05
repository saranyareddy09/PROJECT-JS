//Arthematic operator +,-,*,/,%
 let s=10
 g=20
 console.log(s+g);
 console.log(s-g);
 console.log(s*g);
 console.log(s/g);
 console.log(s%g);
 let m=20
 let v=15
 let r="str"
 console.log(m+v);
 console.log(s+m);
 console.log(s+r);
 console.log(g+m);

 console.log(2>4);
 console.log(2<4);
 console.log(2>=4);
 console.log(2<=4);
 //===,!==,==,!=,
 console.log("------------------")
 let data=123
 let data1='12'
 console.log(data==data1);
 console.log(data===data1);

 //logical &&,||,!
  console.log("logical operations");
  console.log(true && false);
  console.log(true && true);
  console.log(true || false);
  console.log(false || false);
  console.log(!true);
  console.log(!false);

  let num1=2
  let num2=3
  console.log(num1&num2);

//        2^3  2^2   2^1   2^0
//          8    4     2     1
//num1=4=>  0    1     0     0
//num2=3=>  0    0     1     1
//& ===>    0    1     0     0=>4
//! ==>     1    1     0     1=>13
//^ ==>     1    1     0     1
// => xor=>
//0^0 =>0  0^1=>1  1^0=>1  1^1=>0 xor
//0&0 =>0  0&1=>0  1&0=>0  1&1=>1 and
//0|0 =>0  0|1=>1  1|0=>1  1|1=>1 or

let num3=10
console.log(~num3);
//n => ~n=> -(n+1)
/*
//left shift =>  <<
//right shift =>  >>
console.log("rotational operators");
 let num4=3
 let num5=5
 console.log(num4<<num5);
 //a<<b=> a*2^b=>3  *2^5=>32*3//96
 console.log(num4>>num5);
 //a>>b=> a/2^b =>3/2^5 =>3/32=0//0
 //unary operator
 let number=10
 console.log("unary operators");
 console.log("Pre increment & decrement");
 console.log(++number);
 console.log(--number);
 console.log("post increment &decrement");
 console.log(number++);
 console.log(number--);
let n=5
console.log(n++ + --n+ n-- +n++ - n--+ ++n -n--);
*/
console.log("Math Functions");
console.log(Math.round(2.3));
console.log(Math.round(2.5));
console.log(Math.ceil(3.8));
console.log(Math.ceil(2.3));
console.log(Math.floor(4.7));
console.log(Math.floor(3.2));
console.log(Math.trunc(2.8532));
console.log(Math.trunc(31.097));
console.log(Math.sign(-2));
console.log(Math.sign(0));
console.log(Math.sign(4));
console.log(Math.pow(4,9));
console.log(Math.pow(3,1));
console.log(Math.sqrt(81));
console.log(Math.cbrt(8));
console.log(Math.abs(243.99));
console.log(Math.max(23,5,3,9,31,2));
console.log(Math.min(23,5,3,9,31,2));
console.log("Random number--");
console.log(Math.random());
// 1 to 10
console.log(Math.random()*10);
console.log(Math.trunc(Math.random()*100));
console.log(Number(true));
console.log(Number(false));
 console.log(Number("10"));
 console.log(Number("  10"));
 console.log(Number("10  "));
 console.log(Number("10.33"));
 console.log(Number("10,33"));
 console.log(Number("10*3"));
 console.log(parseInt("-10"));
 console.log(parseInt("-10.33"));
 console.log(parseInt("10"));
 console.log(parseInt("10.33"));
 console.log(parseInt("10 20 30"));
 console.log(parseInt("10 years"));
 console.log(parseInt("years 10"));
 console.log(parseFloat("10"));
 console.log(parseFloat("-10"));
 console.log(parseFloat("10.33"));
 console.log(parseFloat("10 20 30"));
 console.log(parseFloat("10.9413"));

