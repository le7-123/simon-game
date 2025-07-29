
const button = document.querySelector("#buttonNew")
const namee = document.querySelector("#name")
const password = document.querySelector("#password")
const epassword = document.querySelector("#epassword")
const text = document.querySelector(".text")


let names = []

// if(button.textContent==="הרשמה"){
  

button.addEventListener("click", () => {
if(namee.value ===""){
    text.textContent= "אין שם"
// alert("אין שם")
return false  
}

if(epassword.value==="" || password.value ==="" || namee.value ==="")
    {
          text.textContent= "שדה חובה"
    // alert("שדה חובה")
    return fals
}
        if (password.value !== epassword.value) {
            text.textContent="סיסמה לא זהה"
            return fals
        }
        const allUserStr =localStorage.getItem("AllUsers")
        if (allUserStr) {
             names = JSON.parse(allUserStr)
        }
    // const loKayam=
      names.map(nameItem=>{
    if(namee.value===nameItem.name){
        text.textContent="השם הזה כבר קיים"

        // alert("השם הזה כבר קיים")
        return fals
    }  })
    
    // if((namee.value).length<5){
    //     alert("השם צריך להכיל לפחות 5 תווים")
    //     return fals 
    // }
    if((password.value).length<5){
           text.textContent="הסיסמה צריכה להכיל לפחות 5 תווים"
        // alert("הסיסמה צריכה להכיל לפחות 5 תווים")
        return false
    }
    else{
     //להכניס למערך את השם והסיסמה
        names.push({name: namee.value, password: password.value , see: 150}) 
        let names2 = JSON.stringify(names)
        localStorage.setItem("AllUsers", names2)
        console.log(names, 'names');
      
        localStorage.setItem("User", namee.value)
        namee.value=""
        password.value=""
        epassword.value=""
        window.location.href="../../loby/loby.html"
    }
    alert("נרשמת בהצלחה")    
    //  text.textContent="נרשמת בהצלחה"
})

