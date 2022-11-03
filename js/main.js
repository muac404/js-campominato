"use strict"

const playBtn = document.getElementById("play-btn")

// let option = ["easy", "medium", "hard"];
let userOption = document.getElementById("difficult").value


console.log(userOption)




if (userOption == "easy"){
    playBtn.addEventListener("click", function(){
        const boardContainer = document.getElementById("container")
        boardContainer.innerHTML = ""
        for (let i = 1; i <= 100; i++) {
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i
            boardCell.classList.add("cell-grid")
            boardContainer.append(boardCell)
            boardCell.addEventListener("click", function(){
                console.log(this.innerHTML)
                this.classList.add("blue-bg")
            })
        }
    })
}

if (userOption == "medium"){
    playBtn.addEventListener("click", function(){
        const boardContainer = document.getElementById("container")
        boardContainer.innerHTML = ""
        for (let i = 1; i <= 81; i++) {
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i
            boardCell.classList.add("cell-grid")
            boardContainer.append(boardCell)
            boardCell.addEventListener("click", function(){
                console.log(this.innerHTML)
                this.classList.add("blue-bg")
            })
        }
    })
}

if (userOption == "hard"){
    playBtn.addEventListener("click", function(){
        const boardContainer = document.getElementById("container")
        boardContainer.innerHTML = ""
        for (let i = 1; i <= 49; i++) {
            const boardCell = document.createElement("div");
            boardCell.innerHTML = i
            boardCell.classList.add("cell-grid")
            boardContainer.append(boardCell)
            boardCell.addEventListener("click", function(){
                console.log(this.innerHTML)
                this.classList.add("blue-bg")
            })
        }
    })
}





