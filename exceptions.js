/*
try{
    //black of code 

}
catch(error){
    //error message
}
*/
try{
let num=10/0
console.log("From try block");
console.log(num);
}
catch(error){
    console.log("From catch block");
    console.error(error)
    console.error("error");
}
try{
    let num=10/0
    console.log("From try block");
    console.log(num);
    }
    catch(error){
        console.log("From catch block");
        console.error(error)
        console.log("error");
    }
    finally{
        console.log("will work  irrespective of try or catch");
    }
    /*
    //replace
    let str="Good Morning";
    console.log(str.replace("Good","Happy"));
    //Happy morning
    let str_1=" Good Morning, Good Night";
    console.log(str2.replace("Good","Happy"));
     //Happy Morning,Good Night 
     */
    console.log("Exponent values-----");
    let f=9.656;
    console.log(f.toExponential(2));
    let g=9.999;
    console.log(g.toExponential(2));
    let h=49.999;
    console.log(h.toExponential(5));
    console.log("toFixed method");
    let m=81.658;
    console.log(m.toFixed(4));
    console.log(m.toFixed(2));
    console.log("toPrecesion method");
    let n=81.658;
    console.log(n.toPrecision(4));
    console.log(n.toPrecision(2));
    console.log(n.toPrecision(3));
    console.log(n.toPrecision(1));

    console.log("date object")
    const o=new Date();
    console.log(o.getTime());
    console.log(o.getFullYear());
    console.log(o.getMonth());
    console.log(o.getDate());
    console.log(o.getHours());
    console.log(o.getMinutes());
    console.log(o.getSeconds());
    
 const p=new Date();
 p.setFullYear(2007,5,9);
 console.log(p)

let nAME=prompt("eNTER ur name")
console.log("Ur name is"+ nAME);
console.log(`Ur name is ${nAME}`);

