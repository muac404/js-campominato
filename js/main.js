"use strict"

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

 

// const bomblist = ["1", "2"]
// i = 0
// while (let i = 0; bomblist.length < 16; i++) {
//     const bomblist = Math.floor(Math.random() * 100) + 1;
//     i++;
//     console.log(bomblist)

// }

// const Bomb = Math.floor(Math.random() * 100) + 1;
// const Bomb2 = Math.floor(Math.random() * 100) + 1;



// while (arraybombs.lenght < 16) {
//     getRndInteger(1, 10)
// }





// MAIN -------

const playBtn = document.getElementById("play-btn")
const arr = [];

let i = 0;

while (arr.length < 16) {
    const bombNumber = getRndInteger(1, 100);
    if( !arr.includes(bombNumber)){
        arr.push(bombNumber); 
    }
    
    
    i++; 
}

console.log(arr)


playBtn.addEventListener("click", function(){
    
    let userOption = document.getElementById("difficult").value;
    let nCells;
    if (userOption == "easy"){
        nCells = 100;
    } else if( userOption == "medium") {
        nCells = 81;
    }else if(userOption == "hard") {
        nCells = 49;
    }
    
    
    for (let i = 1; i <= nCells; i++) {
        const boardCell = document.createElement("div");
        const boardContainer = document.getElementById("container");
        
        boardCell.innerHTML = i
        boardCell.classList.add("cell-grid")
        boardContainer.append(boardCell)
        boardCell.addEventListener("click", function(){
            if(arr.includes(i)){
            this.classList.add("bomb");
            alert("hai perso") }
            else if (!arr.includes(i)){
            this.classList.add("blue-bg");
               
            }
        })
    }
});










// // let option = ["easy", "medium", "hard"];
// let userOption = document.getElementById("difficult").value


// console.log(userOption)




// if (userOption == "easy"){
//     playBtn.addEventListener("click", function(){
//         const boardContainer = document.getElementById("container")
//         boardContainer.innerHTML = ""
//         for (let i = 1; i <= 100; i++) {
//             const boardCell = document.createElement("div");
//             boardCell.innerHTML = i
//             boardCell.classList.add("cell-grid")
//             boardContainer.append(boardCell)
//             boardCell.addEventListener("click", function(){
//                 console.log(this.innerHTML)
//                 this.classList.add("blue-bg")
//             })
//         }
//     })
// }

// if (userOption == "medium"){
//     playBtn.addEventListener("click", function(){
//         const boardContainer = document.getElementById("container")
//         boardContainer.innerHTML = ""
//         for (let i = 1; i <= 81; i++) {
//             const boardCell = document.createElement("div");
//             boardCell.innerHTML = i
//             boardCell.classList.add("cell-grid")
//             boardContainer.append(boardCell)
//             boardCell.addEventListener("click", function(){
//                 console.log(this.innerHTML)
//                 this.classList.add("blue-bg")
//             })
//         }
//     })
// }

// if (userOption == "hard"){
//     playBtn.addEventListener("click", function(){
//         const boardContainer = document.getElementById("container")
//         boardContainer.innerHTML = ""
//         for (let i = 1; i <= 49; i++) {
//             const boardCell = document.createElement("div");
//             boardCell.innerHTML = i
//             boardCell.classList.add("cell-grid")
//             boardContainer.append(boardCell)
//             boardCell.addEventListener("click", function(){
//                 console.log(this.innerHTML)
//                 this.classList.add("blue-bg")
//             })
//         }
//     })
// }






