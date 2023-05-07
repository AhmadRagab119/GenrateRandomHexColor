let genrate = document.querySelector(".generate");
let DivColor = document.querySelector(".showcolor span");
let DivText = document.querySelector(".showcode");
let copy = document.querySelector(".copy");
let alertCopy = document.querySelector(".alertCopyed");


if(localStorage.getItem("color")){
DivColor.style.backgroundColor = `#${localStorage.getItem("color")}`
DivText.value=`#${localStorage.getItem("color")}`
}

genrate.addEventListener("click",()=>{
    DivColor.style.width ="0"
    DivColor.style.height ="0"
    setTimeout(() => {
        DivColor.style.width ="120px"
        DivColor.style.height ="120px"
    }, 300);
let randomColor =Math.random().toString(16).slice(2,8)
localStorage.setItem("color",randomColor)
DivColor.style.backgroundColor = `#${randomColor}`
DivText.value=`#${randomColor}`
})
copy.addEventListener("click",()=>{
    DivText.select();
    document.execCommand("copy");
    setTimeout(() => {
        alertCopy.style.right= "20px"
        setTimeout(() => {
            alertCopy.style.right= "-300px"
        }, 2000);
    }, 100);
})