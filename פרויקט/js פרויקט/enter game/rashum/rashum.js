const button = document.querySelector("#buttonNew")
const namee = document.querySelector("#name")
const password = document.querySelector("#password")
const text = document.querySelector(".text")
let names = []

const allUserStr = localStorage.getItem("AllUsers")

button.addEventListener("click", () => {

    if (password.value !== "" || namee.value !== "") {
        names = JSON.parse(allUserStr)
        
        // if (allUserStr) {
        //     names = JSON.parse(allUserStr)
        //  }

        // else {
        //     text.textContent = "לא קיים במערכת"

        //     // alert("לא קיים במערכת")
        //     return fals
        // }

        const Kayam = names.map(nameItem => {
            if (nameItem.name === namee.value) {
                if (nameItem.password === password.value) {
                    alert("לקוח רשום")
                    localStorage.setItem("User", "")
                    localStorage.setItem("User", namee.value)
                    password.value = ""
                    namee.value = ""
                    window.location.href = "../../loby/loby.html"

                    return teru
                }
                else {
                    text.textContent = "סיסמה שגויה"
                    // alert("סיסמה שגויה")
                    return teru
                }
            }
        })
        text.textContent = "לא נרשמת"
        // alert("לא נרשמת")
        return fals
    }

})
