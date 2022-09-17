let hsb = document.getElementById("homeSB")
let gsb = document.getElementById("guestSB")
let count1 = 0
let count2 = 0
function increment1(){
    count1 += 1
    hsb.textContent = count1
}
function increment2(){
    count1 += 2
    hsb.textContent = count1
}
function increment3(){
    count1 += 3
    hsb.textContent = count1
}
function resetScore(){
    hsb.textContent = 0
}
let saveEl = document.getElementById("finalScore")
function saveScore() {
    let countStr = count1 + "  -  "
    saveEl.innerText += countStr
    countl.textContent = 0
}


function increment1g(){
    count2 += 1
    gsb.textContent = count2
}
function increment2g(){
    count2 += 2
    gsb.textContent = count2
}
function increment3g(){
    count2 += 3
    gsb.textContent = count2
}
function resetScoreg(){
    gsb.textContent = 0
}
let saveElg = document.getElementById("finalScoreg")
function saveScoreg() {
    let countStrg = count2 + " - "
    saveElg.innerText += countStrg
    count2.textContent = 0
}