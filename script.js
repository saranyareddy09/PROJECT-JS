document.getElementById("colorpickker").addEventListener('input',()=>{
    let color=document.getElementById("colorpickker").value;
    document.body.style.backgroundColor=color;
    document.getElementById("box").value=color;

});


setTimeout(()=>{
    console.log("javascript");

},2000);

setInterval(()=>{
    console.log("GOOD FOOD AND SLEEP ARE EVERYTHING TO ME ")
},3000);