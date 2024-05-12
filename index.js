var numbersystem=document.querySelector(".number-system")
var hcf=document.querySelector(".hcf")
var decimal=document.querySelector(".Decimal")
var simple=document.querySelector(".Simplification")
var cbt5=document.querySelector(".cbt-5")
var cbt6=document.querySelector(".cbt-6")


const btn1=document.querySelector(".btn1")
const btn2=document.querySelector(".btn2")
const btn3=document.querySelector(".btn3")
const btn4=document.querySelector(".btn4")
const btn5=document.querySelector(".btn5")
const btn6=document.querySelector(".btn6")








const listbtn=document.querySelector(".main1 i")
const list=document.querySelector(".list-sub")
const cancel=document.querySelector(".chapter i")
listbtn.addEventListener("click",function(){
    list.style.display="block"

    
})
cancel.addEventListener("click",function(){
    list.style.display="none"
})




function ans1(){
    const div=document.querySelector(".ans1-div")
    div.innerHTML="Correct answer is : D)400 "
}
function ans2(){
    const div=document.querySelector(".ans2-div")
    div.innerHTML="Correct answer is: B)29"
}
function ans3(){
    const div=document.querySelector(".ans3-div")
    div.innerHTML="Correct answer is : D)16 "
}
function ans4(){
    const div=document.querySelector(".ans4-div")
    div.innerHTML="Correct answer is : D)16"
}
function ans5(){
    const div=document.querySelector(".ans5-div")
    div.innerHTML="Correct answer is : B)2010"
}
function ans6(){
    const div=document.querySelector(".ans6-div")
    div.innerHTML="Correct answer is : C)2"
}
function ans7(){
    const div=document.querySelector(".ans7-div")
    div.innerHTML="Correct answer is : B)72 "
}
function ans8(){
    const div=document.querySelector(".ans8-div")
    div.innerHTML="Correct answer is : B)224"
}
function ans9(){
    const div=document.querySelector(".ans9-div")
    div.innerHTML="Correct answer is : B)4"
}
function ans10(){
    const div=document.querySelector(".ans10-div")
    div.innerHTML="Correct answer is : A)285"
}
function ans11(){
    const div=document.querySelector(".ans11-div")
    div.innerHTML="Correct answer is : A)735"
}
function ans12(){
    const div=document.querySelector(".ans12-div")
    div.innerHTML="Correct answer is : D)1400"
}
function ans13(){
    const div=document.querySelector(".ans13-div")
    div.innerHTML="Correct answer is : A)21 "
}
function ans14(){
    const div=document.querySelector(".ans14-div")
    div.innerHTML="Correct answer is : A)10032"
}
function ans15(){
    const div=document.querySelector(".ans15-div")
    div.innerHTML="Correct answer is : A)100"
}
function ans16(){
    const div=document.querySelector(".ans16-div")
    div.innerHTML="Correct answer is : A)100"
}










btn1.addEventListener("click",function(){
    numbersystem.style.display="block"
    hcf.style.display="none"
    simple.style.display="none"
    decimal.style.display="none"
    cbt5.style.display="none"
    cbt6.style.display="none"
    btn1.style.backgroundColor="rgb(87, 252, 87)"
    btn2.style.backgroundColor="transparent"
    btn4.style.backgroundColor="transparent"
    btn3.style.backgroundColor="transparent"
    btn4.style.backgroundColor="transparent"
    btn5.style.backgroundColor="transparent"
    btn6.style.backgroundColor="transparent"

})
btn2.addEventListener("click",function(){
    hcf.style.display="block"
    numbersystem.style.display="none"
    decimal.style.display="none"
    simple.style.display="none"
    cbt5.style.display="none"
    cbt6.style.display="none"
    btn2.style.backgroundColor="rgb(87, 252, 87)"
    btn1.style.backgroundColor="transparent"
    btn3.style.backgroundColor="transparent"
    btn4.style.backgroundColor="transparent"
    btn5.style.backgroundColor="transparent"
    btn6.style.backgroundColor="transparent"
})
btn3.addEventListener("click",function(){
    hcf.style.display="none"
    decimal.style.display="block"
    numbersystem.style.display="none"
    simple.style.display="none"
    cbt5.style.display="none"
    cbt6.style.display="none"
    btn3.style.backgroundColor="rgb(87, 252, 87)"
    btn1.style.backgroundColor="transparent"
    btn4.style.backgroundColor="transparent"
    btn2.style.backgroundColor="transparent"
    btn5.style.backgroundColor="transparent"
    btn6.style.backgroundColor="transparent"
})
btn4.addEventListener("click",function(){
    hcf.style.display="none"
    decimal.style.display="none"
    numbersystem.style.display="none"
    simple.style.display="block"
    cbt5.style.display="none"
    cbt6.style.display="none"
    btn3.style.backgroundColor="transparent"
    btn4.style.backgroundColor="rgb(87, 252, 87)"
    btn1.style.backgroundColor="transparent"
    btn2.style.backgroundColor="transparent"
    btn5.style.backgroundColor="transparent"
    btn6.style.backgroundColor="transparent"
})

btn5.addEventListener("click",function(){
    hcf.style.display="none"
    decimal.style.display="none"
    numbersystem.style.display="none"
    simple.style.display="none"
    cbt5.style.display="block"
    cbt6.style.display="none"
    btn3.style.backgroundColor="transparent"
    btn4.style.backgroundColor="transparent"
    btn1.style.backgroundColor="transparent"
    btn2.style.backgroundColor="transparent"
    btn5.style.backgroundColor="rgb(87, 252, 87)"
    btn6.style.backgroundColor="transparent"
})
btn6.addEventListener("click",function(){
    hcf.style.display="none"
    decimal.style.display="none"
    numbersystem.style.display="none"
    simple.style.display="none"
    cbt5.style.display="none"
    cbt6.style.display="block"
    btn3.style.backgroundColor="transparent"
    btn4.style.backgroundColor="transparent"
    btn1.style.backgroundColor="transparent"
    btn2.style.backgroundColor="transparent"
    btn5.style.backgroundColor="transparent"
    btn6.style.backgroundColor="rgb(87, 252, 87)"
})












