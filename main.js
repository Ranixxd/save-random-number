let randomNum = 0
let myNum = []
let pickNum = document.getElementById('pick-number')
let buttonArea = document.querySelector('.button-area')
let pickButton = document.getElementById('pick-button')
let saveButton = document.getElementById('save-button')
let finishMessage = document.getElementById('finish-message')
let feedbackMessage = document.getElementById('feedback-message')
let emptyNum = document.getElementById('empty-number')

pickButton.addEventListener('click', pickRandomNum)
saveButton.addEventListener('click', addNum)

pickNum.textContent = randomNum
feedbackMessage.textContent = ""

function pickRandomNum() {
    randomNum = Math.round(Math.random(randomNum) * 100)
    pickNum.textContent = randomNum
}

function addNum() {
    if (myNum.includes(randomNum)) {
        feedbackMessage.textContent = "이미 저장한 숫자예요🙄"
        return;
    }

    myNum.push(randomNum)
    render()

    emptyNum.style.display = "none"
    feedbackMessage.textContent = "저장했어요😍"

    if (myNum.length == 6) {
        feedbackMessage.textContent = "6개의 숫자를 모두 저장했어요😊"
        buttonArea.style.display = "none"
        pickNum.textContent = "끝"
        return;
    }
}

function render() {
    let resultHTML = ""

    for (let i = 0; i < myNum.length; i++) {
        resultHTML += `<div id="number-item">${myNum[i]}</div>`
    }
    document.getElementById("number-list").innerHTML = resultHTML
}

