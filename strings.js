let str="Good Afternoon,!"
console.log(str);
console.log(str.length);
//index-of 
console.log("index of method");
console.log(str.indexOf("o"));
console.log(str.indexOf("A"));
console.log(str.indexOf("noon"));
console.log("Last indexOf method")
console.log(str.lastIndexOf("o"));
console.log(str.lastIndexOf("n"));
console.log("Search method");
console.log(str.search("o"));
console.log(str.search("O"));
console.log(str.search("after"));

console.log("Include methods");
console.log(str.includes("o"));
console.log(str.includes("@"));
//start with method
console.log("Starts with method ");
console.log(str.startsWith("g"));
console.log(str.startsWith("Go"));
console.log(str.endsWith("Go"));
console.log(str.endsWith("noon"));
console.log(str.endsWith("!"));
//toLowercase()
//str="Good afternoon,!"
console.log("TO lower case method");
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//trim()
let str1="Parul"
console.log(str1);
console.log((str1.length));
console.log(str1.trim());
console.log((str1.length));
console.log(str1.trim());

let str2="Hello, world";
console.log(str2);
console.log(str2.split(""));
console.log(str2.split("  "));
let arr=['H','e','l','l','o']
console.log(arr);
console.log("convert to string");
console.log(arr.join());//H,e,l,l,o
console.log(typeof(arr.join()));//string

//charAt()=>return char at index
//let str2="Hello,World"
console.log("char at index");
console.log(str2.charAt(2))//1
console.log(str2.charAt(6))//nothing will print 
//charCode
console.log("Char code");
console.log(str2.charCodeAt(2));//108
console.log(str2.charCodeAt(6));//32

//slice()
console.log("slice method");
//let str2="Hello world "
console.log(str2.slice(0,5));//Hello 
//starting index,ending-1
// let str2="Hello,World"
console.log(str2.slice(5));//, world 
console.log(str2.slice(-1));//d
console.log(str2.slice(-5));//world
console.log(str2.slice(-5,-1));//worl
console.log(str2.slice(-1,-5));//nothing will print 

//substring()
//let str2="Hello, world"
console.log("Substring method");
console.log(str2.substring());
console.log(str2.substring(2));
console.log(str2.substring(2,5));
console.log(str2.substring(-1));
console.log(str2.substring(-1,-5));
console.log(str2.substring(-5,-1));
console.log(str2.substring(-5));

//substr()
console.log("substr method");
console.log(str2.substr());
console.log(str2.substr(1));
//starting index,no of char
console.log(str2.substr(1,5));
console.log(str2.substr(3,7));
console.log(str2.substr(7,20));
console.log(str2.substr(7,0));
console.log(str2.substr(-7));
console.log(str2.substr(-7,3));

let d=369;
console.log(d.toString());
console.log((369).toString());
console.log((300+69).toString());

let s=244;
console.log(s.toString());
console.log((244).toString());
console.log((122+122).toString());