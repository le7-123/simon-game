const light = document.querySelectorAll(".color")//מערך כפתורים
const start = document.querySelector(".start")//כפתור התחלה
const life = document.querySelector(".live")//חי בודד
const live = document.querySelector(".lives")//אלמנט עוטף לחיים
const restart = document.querySelector(".restart")
const loby = document.querySelector(".loby")
const exit=document.querySelector(".exit")
const mes=document.querySelector(".mes")//גיפים של מסרים
const timerDiv=document.querySelector(".timer")//דיב של הטיימר
let colors = []//הצבעים שהוגרלו
let canClick = false//דגל מתי השחקן יכול להתחיל ללחוץ על הצבעים
let currentIndex = 0 // ספירה של לחיצות המשתמש
let level=0//שלב
let startNow=1//כפתור תחילת משחק זמין
let loss=false//האם השלב האחרון נגמר בהפסד
let livesLeft = 3//כמות חיים
let time=10
let intervalId = null; // נשמור את ה-id של הטיימר

// document.addEventListener("DOMContentLoaded", () => {
//     loading.style.display = "block"; // הצגה מיידית
//     loadingSound.currentTime = 0; // מתחיל מההתחלה
//     loading.click()
// });

// loading.addEventListener("click",e=>{
//     loadingSound.play();
//     setTimeout(() => {
//         loading.style.display = "none";
//     }, 15100); 
// })

function timerOn() {
    clearInterval(intervalId); 
    time = 5 + Math.ceil((level+1)/3)* 2;      // נעדכן את הזמן לפי השלב
    timerDiv.innerHTML = time;

    intervalId = setInterval(() => {
        time--;
        timerDiv.innerHTML = time;
        if (time < 0) {
            clearInterval(intervalId); // עצירת הטיימר
            removeLife();              // הורדת חיים
        }
    }, 1000); // כל שנייה
}

function timerOff() {
    clearInterval(intervalId);
    timerDiv.innerHTML = "";
}

//כפתורי ניווט במשחקים
restart.addEventListener("click", () =>{
    newRecord()
    alert("New game")
    window.location.href="simon.html"
})
loby.addEventListener("click", () =>{
    newRecord()
    window.location.href="loby.html"
})
exit.addEventListener("click", () =>{
    newRecord()
    window.location.href="logIn.html"
})

// לחיצה על כפתור Start להתחלת המשחק
start.addEventListener("click", e => {
    if(startNow){
        const loading=document.querySelector(".loading")
        loading.style.display = "block"; // הצגה מיידית
        const loadingSound = document.getElementById(`loadingSound`);
        loadingSound.currentTime = 0; // מתחיל מההתחלה
        loadingSound.play();
        setTimeout(() => {
            loading.style.display = "none"; gameRun.click();
        }, 15000); 
        if(startNow===2){
            mes.style.backgroundImage=""
            livesLeft = 3;
            for (let l = 0; l < livesLeft; l++) {
                const newLife = document.createElement("div");
                newLife.classList.add("live");
                live.appendChild(newLife);
            }
        }
    }
    startNow=0
})

//סיבוב הדלקת אורות ע"י המחשב
const gameRun=document.querySelector(".run")
gameRun.addEventListener("click", async e=>{
    if(!loss){
        const randomColor = light[Math.floor(Math.random() * 4)].id; // נשמר id 
        colors.push(randomColor);
    }else{
        loss=false
    }
    canClick = false;
    currentIndex = 0; // איפוס אינדקס בתחילת כל סיבוב
    timerOff()
    await activateOneByOne(colors) // המתנה לסיום ההבהובים
    canClick = true;
    timerOn()
})

// הצגת הצבעים ע"י המחשב אחד-אחד
async function activateOneByOne(colors){
    canClick = false
    for(let j=0;j<colors.length;j++)
    {
       
       flashColor(document.getElementById(colors[j]));
       await delay(700);
    }
}

// הארה זמנית של כפתור
function flashColor(colorElement) {
    playSound(colorElement)
    console.log(colorElement.id)
    colorElement.classList.add(`active${colorElement.id}`);
    setTimeout(() => colorElement.classList.remove(`active${colorElement.id}`), 400);
}

function playSound(colorElement) {
    const sound = document.getElementById(`${colorElement.id}Sound`);
    sound.currentTime = 0; // מתחיל מההתחלה
    sound.play();
}

// השוואת הצבע הנלחץ לזה שציפינו לו
const correctColor = (colorElement, i) => colorElement.id === colors[i]; 

//האזנה ללחיצות המשתמש
for (let k = 0; k < light.length; k++) {
    light[k].addEventListener("click", e => {
        if (!canClick) return;
        flashColor(light[k]);
        if (!correctColor(light[k], currentIndex)) {
            canClick=false
            removeLife()
        } else {
            currentIndex++;
            if (currentIndex === colors.length) {
                // הצלחה מלאה בסיבוב
                canClick = false;
                level++
                newRecord()
                if(level%3===0){
                    win()
                }
                setTimeout(() => gameRun.click(), 1000); // אוטומטי לסיבוב הבא
            }
        }
    });
}

function removeLife() {
    livesLeft--;
    if (livesLeft > 0) {
        const sound = document.getElementById(`wrongSound`);
        sound.currentTime = 0; // מתחיל מההתחלה
        sound.play();
        mes.style.backgroundImage = "url('../gif/wrong.webp')";
        mes.style.backgroundColor ="#FFF300"
        setTimeout(() => mes.style.backgroundImage = "", 700);
        setTimeout(() => mes.style.backgroundColor = "", 700);
        live.innerHTML = "";
        for (let l = 0; l < livesLeft; l++) {
            const newLife = document.createElement("div");
            newLife.classList.add("live");
            live.appendChild(newLife);
        }
        loss = true;
        setTimeout(() => gameRun.click(), 1000);
    } else {
        gameOver();
    }
}
// פונקציית השהיה
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//gif Game over
function gameOver(){
    timerOff()
    const sound = document.getElementById(`gameOverSound`);
    sound.currentTime = 0; // מתחיל מההתחלה
    sound.play();
    colors=[]
    live.innerHTML=""
    newRecord()
    level=0
    canClick=false
    mes.style.backgroundImage="url('../gif/GAMEOVER.gif')";
    startNow=2
}

function win(){
    time=level
    const sound = document.getElementById(`wellDoneSound`);
    sound.currentTime = 0; // מתחיל מההתחלה
    sound.play();
    mes.style.backgroundImage="url('../gif/WELLDONE\ .gif')";
    setTimeout(() => mes.style.backgroundImage = "", 700);
}

function newRecord(){
    const CurrentUser=JSON.parse(sessionStorage.getItem("CurrentUser"))
    if(CurrentUser===null){
        alert("הכנס דרך דף ההרשמה🔙")
        window.location.href="login.html"
    }
    if(level>CurrentUser["score"]){
        CurrentUser["score"]=level
        sessionStorage.setItem("CurrentUser",JSON.stringify(CurrentUser))
        const users=JSON.parse(localStorage.getItem("Users"))
        for(let i=0;i<users.length;i++){
            if(CurrentUser["name"]===users[i]["name"]){
                users[i]["score"]=CurrentUser["score"]
            }
        }
        localStorage.setItem("Users",JSON.stringify(users))
    }
}
