 console.log(window.location.pathname)
 console.log(window.location.hostname)
 console.log(window.location.protocol)
 document.body.style.backgroundColor="pink"
 console.log("Hello")
 document.write("<h1>Hello</h1>")
 let head=document.getElementById("h1")
 console.log("head");
 head.style.color="purple"

 let getcls=document.getElementsByClassName("cls")
 console.log(getcls)
 getcls[0].style.backgroundColor="red"
 getcls[1].style.backgroundColor="brown"

 let tg=document.getElementsByTagName("h1")

 console.log(tg);
 tg[0].style.textDecoration="Underline";
 
 for(let i=0; i<getcls.length; i++){
    getcls[0].style.color="gold"
 }
 for(let j=0; j<tg.length; j++){
    tg[1].style.textTransform="uppercase"
 }
 let q=document.querySelector("h4")
 console.log(q)
 q.style.color="aqua"

//get ElementsById return element
//elementbycls=> html Collection
//tag name=> html collection
//queryselector=> html element
//queryAll=> nodelist

 let qa=document.querySelectorAll("h2")
 console.log(qa)
 qa[0].style.color="green"
 for(let i=0;i<qa.length;i++){
    qa[i].style.textDecoration="underline overline"
 }

 
