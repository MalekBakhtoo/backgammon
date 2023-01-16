let ct1 = document.getElementById("culomn1");
let ct2 = document.getElementById("culomn2");
let ct3 = document.getElementById("culomn3");
let ct4 = document.getElementById("culomn4");
let ct5 = document.getElementById("culomn5");
let ct6 = document.getElementById("culomn6");
let ct7 = document.getElementById("culomn7");
let ct8 = document.getElementById("culomn8");
let ct9 = document.getElementById("culomn9");
let ct10 = document.getElementById("culomn10");
let ct11 = document.getElementById("culomn11");
let ct12 = document.getElementById("culomn12");
let ct13 = document.getElementById("culomn13");
let ct15 = document.getElementById("culomn15");
let ct16 = document.getElementById("culomn16");
let ct17 = document.getElementById("culomn17");
let ct18 = document.getElementById("culomn18");
let ct19 = document.getElementById("culomn19");
let ct20 = document.getElementById("culomn20");
let ct14 = document.getElementById("culomn14");
let ct21 = document.getElementById("culomn21");
let ct22 = document.getElementById("culomn22");
let ct23 = document.getElementById("culomn23");
let ct24 = document.getElementById("culomn24");


class Stack {
    constructor() {
        this.items = [];
    }
    add(element) {
        return this.items.push(element);
    }
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    pop() {
        let l = this.peek();
        this.remove();
        return l;
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}
const colStacks = [];
const colTags = [ct1, ct2, ct3, ct4, ct5, ct6, ct7, ct8, ct9, ct10, ct11, ct12, ct13, ct14, ct15, ct16, ct17, ct18, ct19, ct20, ct21, ct22, ct23, ct24]
for (i = 0; i < 24; i++) {
    s = new Stack();
    colStacks.push(s);
}

let whiteT = true;
let turn = "white";
function turnSeter() {
    if (whiteT) {
        turn = "white";
    }
    else if (!whiteT) {
        turn = "black";
    }
}

bBlocks = new Stack();
wBlock = new Stack();

for (i = 0; i < 15; i++) {
    let blackBlock = document.createElement("img");
    blackBlock.setAttribute("src", "./images/bb.png");
    blackBlock.setAttribute("name", "black");
    blackBlock.setAttribute("class", "block");
    bBlocks.add(blackBlock);

    let whiteBlock = document.createElement("img");
    whiteBlock.setAttribute("src", "./images/wb.png");
    blackBlock.setAttribute("name", "white");
    whiteBlock.setAttribute("class", "block");
    wBlock.add(whiteBlock);
}

firstDesin();
function firstDesin() {
    let item = [1, 12, 17, 19];
    for (j = 0; j < 4; j++) {
        if (item[j] == 1)
            i = 2;
        if (item[j] == 12 || item[j] == 19)
            i = 5;
        if (item[j] == 17)
            i = 3;
        for (l = 0; l < i; l++) {
            colTags[item[j] - 1].appendChild(wBlock.peek());
            colStacks[item[j] - 1].add(wBlock.peek());
            wBlock.remove();
            colTags[24 - item[j]].appendChild(bBlocks.peek());
            colStacks[24 - item[j] - 2].add(bBlocks.peek());
            bBlocks.remove();
        }
    }
}

function rollDice(id) {
    let dice = document.getElementById(id);
    let diceNum = 0;
    let i = 0;
    let interval = setInterval(() => {
        let x = Math.floor((Math.random() * 6) + 1);
        i++;
        dice.setAttribute("src", "./images/dice/dice-" + x + ".png")
        if (i == 30) {
            clearInterval(interval);
            diceNum = x;
            console.log(diceNum);
            return diceNum;
            -0
        }
    }, 50);
}

const diceValues = [];

document.getElementById("roll").addEventListener("click", () => {
    let d1 = rollDice("d1");
    let d2 = rollDice("d2");
    if (d1 == d2) {
        for (let i = 0; i < 4; i++) {
            diceValues.push(d1);
        }
    }
    else {
        diceValues.push(d1);
        diceValues.push(d2);
    }
});



function sugustiions(id) {

    let col = document.getElementById(id);
    let column = parseInt(id.slice(6));
    let sugusts = new Stack();

    if (diceValues.length == 2) {
        let dic1 = diceValues[0];
        let dic2 = diceValues[1]
        sugusts.add(dic1);
        sugusts.add(dic2);
        sugusts.add(dic1 + dic2);
    }
    if (diceValues.length == 4) {
        for (let i = 1; i < 4; i++) {
            let sum = 0;
            for (let j = 0; j < i; j++) {
                sum += diceValues[0];
            }
            sugusts.add(sum);
        }
    }
    let colsug = [];
    for (let i = 0; i < sugusts.size(); i++) {
        destcol = document.getElementById("culomn" + (column + sugusts.pop()));
        if (destcol.children.length <= 1) {
            colsug.push(destcol);
        }
    }
    return { "originColumn": col, "validColumns": colsug };
}

function setSegustion(sugs) {
    for (i = 0; i < sugs["validColumns"].length; i++) {
        sugs["valicColumns"][i].classlist.add("sugustCol");
    }
}
function removeSegustions() {
    for (i = 0; i < 24; i++) {
        colTags[i].classList.remove("sugustCol");
    }
}

function moveBlock(id, validCols) {
    let destColNum = parseInt(id.slice(6));
    let orgColNum = parseInt(validCols["originColumn"].id.slice(6));
    let MovedBlock = colStacks[orgColNum - 1].pop();
    colStacks[destColNum - 1].add(MovedBlock);
    colTags[destColNum - 1].appendChild(MovedBlock);
}


for (let i = 0; i < 24; i++) {
    colTags[i].addEventListener("click", (e) => {
        let sugsts = sugustiions(e.target.id);
        if(!(colTags[i].classList.contains("sugustCol"))){
            removeSegustions();
            setSegustion(sugsts);
        }
        if(colTags[i].classList.contains("sugustCol")){
            moveBlock(e.target.id , sugstsst);
        }
    });

}


