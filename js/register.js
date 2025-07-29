//const button = document.querySelector("button")
const form = document.querySelector(".form")
const nameInput=document.querySelector("#name")
const passwordInput=document.querySelector("#password")
const confirmPasswordInput=document.querySelector("#confrimPassword")

form.addEventListener("submit", (e) => {
    if(passwordInput.value!==confirmPasswordInput.value){
        alert("אופס🤭 \n הסיסמאות אינן תואמות")
    }
    else{
        let users=JSON.parse(localStorage.getItem("Users"))
        console.log(users)
        if(users===null){
            users=[]
        }
        let i
        for(i=0;i<users.length;i++){
            if(users[i]["name"]===nameInput.value){
                alert("שם המשתמש כבר קיים במערכת ❌\nהכנס שם אחר/ הכנס בתור משתמש שמור")
                return
            }
        }
        if(i===users.length){
            const newUser={name:nameInput.value, password:passwordInput.value, score:0}
            alert(`✅${nameInput.value} נרשמת בהצלחה למערכת עם סיסמא: ${passwordInput.value}`)
            users.push(newUser)
            localStorage.setItem("Users",JSON.stringify(users))
            window.location.href="../html/login.html"
        }
    }
    
})