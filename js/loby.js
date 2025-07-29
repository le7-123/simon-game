const games=document.querySelectorAll(".game")
const comingSoon=document.createElement("div")
const head=document.querySelector(".head")
comingSoon.classList.add("comingSoon")

const CurrentUser=JSON.parse(sessionStorage.getItem("CurrentUser"))
const text=document.createElement("div")
text.innerHTML=`Welcome ${CurrentUser["name"]}`
head.append(text)




for(let i=0;i<games.length;i++){
    if(i!==4){
        const button=games[i].innerHTML
        games[i].addEventListener("mouseenter",e=>{
            games[i].append(comingSoon)
        })
        games[i].addEventListener("mouseleave",e=>{
            games[i].innerHTML=button
        })
    }
}

const button= games[4].innerHTML
games[4].addEventListener("mouseenter",e=>{
    const simon=document.createElement("div")
    const CurrentUser=JSON.parse(sessionStorage.getItem("CurrentUser"))
    const mes=`name: ${CurrentUser["name"]}  \n Your high score: ${CurrentUser["score"]}\n👏👏🏻👏🏼👏🏽👏🏾👏🏿`
    simon.innerHTML=mes
    simon.classList.add("simon")
    games[4].append(simon)
})
games[4].addEventListener("mouseleave",e=>{
    games[4].innerHTML=""
    games[4].innerHTML=button
})

