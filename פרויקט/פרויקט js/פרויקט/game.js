const board = document.getElementsByClassName("board")[0];
let first = "";
let second = "";
let count = 0;
let mone = 0;
let currentSound = null;
let countwin = 0;
const arrMonim = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// יצירת 24 כרטיסים
for (let i = 0; i < 24; i++) {

    let mix = Math.floor(Math.random() * 12);
    while (arrMonim[mix] == 2) {
        mix = Math.floor(Math.random() * 12);
    }
    arrMonim[mix]++;
    mone++;

    const card = document.createElement("button");
    card.classList.add('card'); // נוסיף את ה-class "card" לכל כרטיס
    board.appendChild(card);
    card.id = mix;  // כל כרטיס יקבל מזהה ייחודי
    card.className = mone; // נשתמש במונה הייחודי להפרדה בין הכרטיסים

    // הוספת מאזין לאירוע "click" לכרטיסים
    card.addEventListener("click", function () {
        if (count < 2) {
            card.style.backgroundImage = `url(./image/${card.id}.jpeg)`; // תצוגת התמונה בכרטיס
            // אם יש צליל שמתנגן – עוצרים אותו
            if (currentSound) {
                currentSound.pause();
                currentSound.currentTime = 0; // מאתחל את הצליל
            }
            if (count == 0) {
                count++;
                first = card;
            } else if (count == 1 && first.className != card.className) {
                second = card;
                count++;

                if (second.id == first.id) {
                    setTimeout(() => {
                        countwin++;
                        // מנגן את הצליל של החיה שתואמת
                        currentSound = new Audio(`audio/${first.id}.mp3`);
                        currentSound.play();

                        second.style.visibility = "hidden";
                        first.style.visibility = "hidden";
                        count = 0;

                        if (countwin == 12) {
                            console.log("you win");
                            const backgroundEnd = document.createElement("div");
                            board.appendChild(backgroundEnd)
                            backgroundEnd.textContent = "will down game over"
                            
                            const butnGameStart = document.createElement("div")
                            backgroundEnd.appendChild(butnGameStart)
                            butnGameStart.textContent = "again game🎮"
                         
                            butnGameStart.addEventListener("click", function () {
                                window.location.href = "game.html";

                            })
                            backgroundEnd.classList.add("game-over");
                            butnGameStart.classList.add("restart-button");





                        }
                    }, 500);
                } else {
                    setTimeout(() => {
                        second.style.backgroundImage = "url(./image/pic1.jpeg)"; // ברירת מחדל בתמונה
                        first.style.backgroundImage = "url(./image/pic1.jpeg)"; // ברירת מחדל בתמונה
                        count = 0;
                    }, 500);
                }
            }
        } else {
            count = 0;
        }
    });

}

console.log(arrMonim);
