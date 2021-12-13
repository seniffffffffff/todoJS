const addMessage = document.querySelector(".message")
const addButton = document.querySelector(".add")
const todo = document.querySelector(".todo")
const todoList = []

addButton.addEventListener("click", function () {
    displayMessages()
})

function random(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}


function displayMessages() {
    const disMessage = ""
    const colorId = document.querySelectorAll("input[type=radio]:checked")[0].id
    const divinline = document.createElement("div")
    divinline.className = "divinline"

    const divkek = document.createElement("div")
    divkek.className = "divkek"
    divkek.id = "colorRew"
    divkek.style.background = colorId

    divinline.append(divkek)

    const cheak = document.createElement("input")
    cheak.type = "checkbox"
    cheak.id = "none"
    cheak.className = "superItem"
    divkek.append(cheak)
    cheak.addEventListener("click", changeColor)

    function changeColor() {
        const box = event.target
        if (box.checked){
            divkek.style.background = "grey"
            cheak.style.outline = "none"
            cheak.style.border = "grey"
            lool.style.background = "grey"
            lool.style.textDecoration = "line-through"
        }if (!box.checked){
            divkek.style.background = colorId
            lool.style.background = colorId
            lool.style.textDecoration = "none"
        }
    }
    const lool = document.createElement("div")
    lool.className = "lool"
    divkek.after(lool)
    lool.style.background = colorId
    const p = document.createElement("p")
    p.innerHTML = addMessage.value
    lool.append(p)

    document.querySelectorAll("input[type=radio]")[random(0,6)].checked = true
    console.log(divinline)
    document.querySelector('.test').before(divinline)
}





