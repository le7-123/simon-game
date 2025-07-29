const r = document.querySelector(".r")
const body = document.querySelector("body")
const ggg = document.querySelector(".gg")
const zug = document.querySelector(".zug")
const losee = document.querySelector(".lose")
const smail = document.querySelector(".smail")
const music = document.querySelector(".music")
const musicwin = document.querySelector(".musicwin")
const hello = document.querySelector(".hello")
const overr = document.querySelector(".over")
const see1 = document.querySelector(".see")
const gameOver = document.querySelector(".gameOver")
const newgame = document.querySelector(".newgame1")
const toLobi = document.querySelector(".newgame2")
const out = document.querySelector(".newgame3")


const timeout = document.querySelector(".timeout")
const gameOve = document.querySelector(".gameOve")
const win = document.querySelector(".win")
const www = document.querySelector(".www")
const caf = document.querySelector(".caf")
const newButton = document.querySelector(".new")

newgame.addEventListener("click", () => {
    alert("משחק חדש")
    window.location.href = "rama2.html"
})

toLobi.addEventListener("click", () => {
    // alert("עובר ללובי")
    window.location.href = "../loby/loby.html"
})
out.addEventListener("click", () => {
    // alert("יציאה")
    window.location.href = "../enter game/harshama/enter.html"
})

const User = localStorage.getItem("User")
// names = JSON.parse(User)
hello.textContent = " שלום " + User


let arr = []//מערך אפסים
let arrAll = []//מערך של כל המיקומים של הכרטיסים
let goral1
let arr2 = []//מערך של מקומות 2 הכרטיסים הפתוחים
let mone = 0
let timeOut = 0
let c = []
let flag = true
Zugote = 0
lose = 0
let see = 150

let names = []
const allUserStr = localStorage.getItem("AllUsers")
names = JSON.parse(allUserStr)

smail.style.backgroundImage = `url(img/look.gif)`

// ///להכניס את השיא למקום
// names.map(seeItem => {
//     if (seeItem.name === User) {
//         if (seeItem.see === 150) {
//             const UserSee = 0
//             see1.textContent = UserSee + " " + "= שיא "
//         }
//         else {
//             const UserSee = seeItem.see
//             see1.textContent = UserSee + " " + "= שיא "

//         }

//     }
// })

//מערך אפסים
for (let j = 1; j <= 10; j++) {
    arr[j] = 0
}

//הגרלה ומילוי המשחק
for (let i = 1; i <= 20; i++) {
    goral1 = (Math.floor(Math.random() * 10) + 1)
    while (arr[goral1] > 1) {
        goral1 = (Math.floor(Math.random() * 10) + 1)
    }
    if (arr[goral1] < 2) {
        const newDiv1 = document.createElement("div")
        newDiv1.classList.add("gg")
        arr[goral1]++
        const g1 = document.querySelector(".r" + i)
        newDiv1.style.backgroundImage = `url(img/${goral1}.png)`
        g1.append(newDiv1)
        arrAll[i] = goral1

        // const kk = document.querySelector(".r" + i)
        //כשלוחצים
        g1.addEventListener("click", () => {


            if (mone === 1) {
                clearTimeout(timeOut);
            }
            if (flag == true) {
                smail.style.backgroundImage = `url(img/look.gif)`
                if (mone !== 2) {
                    clearTimeout(timeOut)
                    arr2.push(i)
                    c.push(newDiv1)
                    mone++
                    music.play()
                    newDiv1.style.display = "flex"
                    console.log(arr2)
                }
                //בודק שלא לחץ על קלף פעמיים
                if (arr2[0] === arr2[1]) {
                    arr2 = []
                    arr2.push(i)
                    mone = 1
                    c = []
                    c.push(newDiv1)
                    clearTimeout(timeOut);
                }
                console.log("mone after", mone)

                //בודק שלא לחץ על קלף פתוח
                if (arrAll[arr2[0]] === 0) {
                    arr2 = []
                    mone = 0
                    c = []
                }
                if (arrAll[arr2[1]] === 0) {
                    const a = arr2[0]
                    arr2 = []
                    arr2.push(a)
                    mone = 1

                    const b = c[0]
                    c = []
                    c.push(b)
                    clearTimeout(timeOut);
                }
                timeOut = setTimeout(() => {

                    // setTimeout(() => {
                    if (mone === 2) {

                        if (arrAll[arr2[0]] === arrAll[arr2[1]]) {
                            caf.play()
                            smail.style.backgroundImage = `url(img/good.gif)`
                            console.log("זוג")
                            clearTimeout(timeOut)

                            Zugote++
                            zug.textContent = Zugote + " " + "= זוגות "
                            //למצוא את השיא
                            if (Zugote === 10) {
                                see = 60 - timer
                                   smail.style.backgroundImage = `url(img/win.gif)`
                                gameOver.textContent = "-אתה אלוף ניצחת ב" + see + " " + "שניות"
                                // alert("ניצחת" + see)
                                clearInterval(interval)
                                flag = false
                                win.style.display = "flex"
                                www.play()

                                // names.map(seeItem => {
                                //     if (seeItem.name === User) {
                                //         if (see < seeItem.see)
                                //             seeItem.see = see
                                //         let names2 = JSON.stringify(names)
                                //         localStorage.setItem("AllUsers", names2)
                                //     }
                                // })
                            }
                            arrAll[arr2[0]] = 0
                            arrAll[arr2[1]] = 0
                            console.log(arrAll)

                            arr2 = []
                            c = []
                            mone = 0
                            // clearTimeout(timeOut)
                        }
                        else {
                            // smsile(() => {
                            //    
                            // },500)
                            smail.style.backgroundImage = `url(img/loss.gif)`
                            console.log("לא זוג")
                            // clearTimeout(timeOut)
                            lose++
                            losee.textContent = lose + " " + "= נסיונות "
                            const y = c[0]
                            const x = c[1]
                            y.style.display = "none"
                            x.style.display = "none"
                            arr2 = []
                            c = []
                            mone = 0
                        }

                    }
                }, 1000)
            }
        })
    }
}

// טיימר 
const time = document.querySelector(".time")
const over = document.querySelector(".over")
// let timer = 179
let timer =60
let v
v =0
const interval = setInterval(() => {
    timer--
    if (timer % 60 < 10) {
        time.textContent = v + ":0" + timer % 60
        if (v == 0) {
            time.classList.add("time2")
            timeout.play()
        }
    }
    else {
        time.textContent = v + ":" + timer % 60
    }

    if (timer % 60 === 0) {
        v = (timer / 60) - 1

    }
    if (timer === 0) {
      
        time.classList.add("time3")
        time.classList.remove("time2")
        smail.style.backgroundImage = `url(img/meki.gif)`
        gameOver.textContent= "פשלן לא הצלחת"
        // alert("נגמר הזמן")
        flag = false
        overr.style.display = "flex"
        gameOve.play()        
        clearInterval(interval)
        {

        }
        console.log("0000000000");
    }

}, 1000)
console.log(arrAll)