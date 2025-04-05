let div=document.getElementById("div")
 let btn=document.getElementById('btn')

btn.addEventListener("mouseover",()=>{
    div.style.backgroundColor="black"
    div.style.color="white"
    div.style.fontSize="30px"
    div.style.fontFamily="cursive"
    div.style.padding="20px"
    div.textContent="Heyy Guyys "
    btn.style.backgroundColor="beige"
    btn.textContent="click "
})

btn.addEventListener('click',()=>{
    div.style.backgroundColor="pink"
    div.style.color="purple"
    div.textContent="view ur results"
    btn.textContent="clicked"
})

btn.addEventListener("mouseout",()=>{
    div.style.backgroundColor="aqua"
    div.style.color="pink"
    div.textContent="ERROR 404"
    btn.textContent="reload"
})
document.addEventListener('keydown',(event)=>{
    console.log(event.key);
})
console.log("----------")
document.addEventListener('keyup',(event)=>{
    console.log(event.key);
})