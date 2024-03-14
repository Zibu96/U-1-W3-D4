const main = document.querySelector("main")
const div = document.createElement("div")
const numbers = document.createElement("h3")
const btn = document.createElement("button")

const num = [1, 2, 3, 4, 5, 6, 7, 8]

//num.forEach((number) => {
//     numbers.innerText += `${number} `
//}
//)
 //for (i= 0; num.length; i++){
    const mainBoard = function () {
        div.classList(".numbers")
        const board = document.querySelector(".numbers")
for (i=0; i < 90; i++)
        board.innerHTML += ([i] + 1)
    }



main.appendChild(div)
