//block of code written at 1 place to perform specific task  
/*
function fun_name(....para....){
fun_body
return
}
fun_name(argu)//calling fun

*/

//0 para... &no return
function greet(){
    console.log("Good Morning");
}
greet()//fun_call

//para... &no return 
 function greet_p(name){
    console.log("hello"+name)
 }
 greet_p("kannah")

 //no parameter  but return
  function greet_m(){
    console.log("saranya")
    return
  }
  greet_m()
  function add(){
    let a=10
    let b=20
    return a+b
  }
  let res=add()
  console.log(res)

  //parameter and return 

function subtract(res){
    let c=15
    let d=10
    return c-d
}
let result=subtract(res)
console.log(result)

//annonyms function
let fun=function(a,b){
    console.log("From anonymous fun")
    return a*b
}
console.log(fun(3,5));

//arrow function
let arr_fun=()=>{
  console.log("From arrow fun");
}
arr_fun()
let arr_func=(add)=>{
  console.log("add 1 and 2")
  return 
}
arr_func(add)

//square
let sq=(x)=>x*x//implict return
console.log(sq(7));//49

//callback fun
function modulus(a,b){
  console.log(a%b)
}
console.log("taim lagega");
setTimeout(modulus,2000,2,9)

//for each loop
let arra=[1,2,3,4,5]
console.log("For each loop");
arra.forEach((num)=>{
  console.log(num);
})
