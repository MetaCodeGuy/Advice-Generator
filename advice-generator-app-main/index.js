const advice= document.querySelector('.advice')
const adviceId = document.querySelector(".advice__id")
const dice = document.querySelector('.dice')

const GetAdvice= ()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((res)=>res.json())
    .then((data)=>UpdateUi(data))
}

const UpdateUi = (data)=>{
    advice.innerHTML = `<p>&quot;${data.slip.advice}&quot;</p>`
    adviceId.innerHTML = `<span>ADVICE #${data.slip.id}</span>`
}

dice.addEventListener("click",()=>{
   GetAdvice(); 
})

GetAdvice();