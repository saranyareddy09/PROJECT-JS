 let numbers=[1,2,3,4,5];
 console.log(numbers);
 
 for(let x of numbers){
    console.log(x);
 }
 //access the elements
 console.log(numbers[0]);
 console.log("length of array");
 console.log(numbers.length);
 //updating
 console.log("Updating array");
 numbers[0]=10;
 console.log(numbers);

  let arr=[1,2,3,4,5,6,7,8,9]
  //delete splice()
  console.log("splice() method");
  let arr2= arr.splice(3,2);
 console.log(arr);

 //delete and replace
 //(index,no_of_elm,replaced_elm)
 arr.splice(2,1,2)
 console.log(arr);
 arr.splice(4,0,2,9,10)
 console.log(arr);
 //[1,2,2,,6,2,9,10,7,8,9]=>arr

 let arr1=[1,2,3]
 console.log("concatination of arrays");
 console.log(arr.concat(arr1));//merged array
 
 //push and pop methods
 arr1.push(10)
 console.log("push method");
 console.log(arr1);//1,2,3,10
 arr.push(100)//1,2,3,10,100
 arr1.pop()//delete from last 
 console.log(arr1);//1,2,3,10
 /*
 //shift&unshift methods
 //arr1=1,2,3,10
 arr1.shift()//delete from first
 console.log(arr1);//2,3,10
 arr1 )//add at first 
 console.log(arr1);//10,2,3,10
//reverse 
arr1.reverse()
console.log(reversed arr+ arr1);

let arr2=[...arr,...arr1,"str",100]
console.log(arr2);
*/
