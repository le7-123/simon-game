const form = document.querySelector(".form")
const nameInput=document.querySelector("#name")
const passwordInput=document.querySelector("#password")
const confirmPasswordInput=document.querySelector("#confrimPassword")
console.log("ky")
form.addEventListener("submit", (e) => {
    let users=JSON.parse(localStorage.getItem("Users"))
    console.log(users)
    if(users===null){
        alert("שם המשתמש אינו קיים במערכת\n עבור לדף ההרשמה🔙")
    }
    else{
        let i
        for(i=0;i<users.length;i++){
            if(users[i]["name"]===nameInput.value){
                if(users[i]["password"]!==passwordInput.value){
                    alert("❌סיסמא שגויה❌")
                    break
                }
                else{
                    e.preventDefault()
                    alert(`ברוך שובך ${nameInput.value}🎉`)
                    const CurrentUser=JSON.stringify({name:nameInput.value, score:users[i]["score"]})
                    sessionStorage.setItem("CurrentUser",CurrentUser)
                    window.location.href="../html/loby.html"
                    break
                }
            }
        }
        if(i===users.length){
            alert("שם המשתמש אינו קיים במערכת\n עבור לדף ההרשמה🔙")
            window.location.href="../html/register.html"
        }
    }
    
})