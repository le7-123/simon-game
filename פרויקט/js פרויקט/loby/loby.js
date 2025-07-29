
const more1=document.querySelector(".mida1")
const more2=document.querySelector(".mida2")
const more3=document.querySelector(".mida3")
const more4=document.querySelector(".mida4")
const more5=document.querySelector(".mida5")
const more6=document.querySelector(".mida6")
const more7=document.querySelector(".mida7")
const more8=document.querySelector(".mida8")
const more9=document.querySelector(".mida9")
const more10=document.querySelector(".mida10")
const more11=document.querySelector(".mida11")
const more12=document.querySelector(".mida12")
const more13=document.querySelector(".mida13")
const more14=document.querySelector(".mida14")
const more15=document.querySelector(".mida15")
const more16=document.querySelector(".mida16")
const more17=document.querySelector(".mida17")
const more18=document.querySelector(".mida18")
const more19=document.querySelector(".mida19")
const more20=document.querySelector(".mida20")
const more21=document.querySelector(".mida21")
const more22=document.querySelector(".mida22")
const more23=document.querySelector(".mida23")
const more24=document.querySelector(".mida24")




const play5=document.querySelector(".play5")

more1.addEventListener("click",()=>{
  console.log("click")
  window.location.href="infromation.html"
})
more2.addEventListener("click",()=>{
  console.log("click")
  window.location.href="infromation.html"
})
more3.addEventListener("click",()=>{
  console.log("click")
  window.location.href="infromation.html"
})
more4.addEventListener("click",()=>{
  console.log("click")
  window.location.href="infromation.html"
})
more5.addEventListener("click",()=>{
  console.log("click")
  window.location.href="infromation.html"
})
more6.addEventListener("click",()=>{
  console.log("click")
  window.location.href="infromation.html"
})
more7.addEventListener("click",()=>{
  console.log("click")
  window.location.href="infromation.html"
})
more8.addEventListener("click",()=>{
  console.log("click")
  window.location.href="infromation.html"
})
more9.addEventListener("click",()=>{
  console.log("click")
  window.location.href="infromation.html"
})
play5.addEventListener("click",()=>{
  console.log("click")
  window.location.href="../ramot/rama.html"
})
more10.onclick=()=>{  window.location.href="infromation.html"}
more11.onclick=()=>{  window.location.href="infromation.html"}
more12.onclick=()=>{  window.location.href="infromation.html"}
more13.onclick=()=>{  window.location.href="infromation.html"}
more14.onclick=()=>{  window.location.href="infromation.html"}
more15.onclick=()=>{  window.location.href="infromation.html"}
more16.onclick=()=>{  window.location.href="infromation.html"}
more17.onclick=()=>{  window.location.href="infromation.html"}
more18.onclick=()=>{  window.location.href="infromation.html"}
more19.onclick=()=>{  window.location.href="infromation.html"}
more20.onclick=()=>{  window.location.href="infromation.html"}
more21.onclick=()=>{  window.location.href="infromation.html"}
more22.onclick=()=>{  window.location.href="infromation.html"}
more23.onclick=()=>{  window.location.href="infromation.html"}
more24.onclick=()=>{  window.location.href="infromation.html"}






const see1=document.querySelector(".see1")
const allUserStr = localStorage.getItem("AllUsers")
names = JSON.parse(allUserStr)

const User = localStorage.getItem("User")
// const User1 = JSON.parse(User)

// names.map(seeItem => {
//   if(seeItem.name===User){

//      if (seeItem.see === 150) {
//           const UserSee = 0
//           see1.textContent = UserSee + " " + "= שיא "
//       }
//       else {
//           const UserSee = seeItem.see
//           see1.textContent = UserSee + " " + "= שיא "

//   }
  
//   }
// else{
//     see1.textContent="בעיה"
//   }
     
// })


///להכניס את השיא למקום

names.map(seeItem => {
  if (seeItem.name === User) {
      if (seeItem.see === 150) {
          const UserSee = 0
          see1.textContent = UserSee + " " + "= שיא "
      }
      else {
          const UserSee = seeItem.see
          see1.textContent = UserSee + " " + "= שיא "

      }

  }
})