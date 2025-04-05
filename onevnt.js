
document.getElementById("btn").onclick=()=>{
    alert("btn clicked")

}

document.getElementById('dbtn').onclick=()=>{
    alert("dbtn clicked")
}

document.getElementById("submit").onchange=()=>{
    alert("Input changed!")
}

document.getElementById("submit").onsubmit=()=>{
    alert("Form submitted")
}

let  in_htm=document.getElementById('head')
in_htm.textContent="This is heading tag"
 console.log(in_htm);

 let  in_html=document.getElementById('inhtml')
 in_html.innerHTML="<i>Royal Challengers Bengalore</i>"
  console.log(in_html);
 