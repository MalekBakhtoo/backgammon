let whiteT = true;
let turn = "white";
const colStacks = [];
const diceValues = [];
let sugsts;


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

        if (this.items.length > 0) {
            return this.items.pop();

        }
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
bBlocks = new Stack();
wBlock = new Stack();
const colTags = [ct1, ct2, ct3, ct4, ct5, ct6, ct7, ct8, ct9, ct10, ct11, ct12, ct13, ct14, ct15, ct16, ct17, ct18, ct19, ct20, ct21, ct22, ct23, ct24]
for (i = 0; i < 24; i++) {
    s = new Stack();
    colStacks.push(s);
}
function turnSeter() {
    if (whiteT) {
        turn = "white";
    }
    else if (!whiteT) {
        turn = "black";
    }
}
for (i = 0; i < 15; i++) {
    let blackBlock = document.createElement("img");
    blackBlock.setAttribute("src", "./images/bb.png");
    blackBlock.setAttribute("name", "black");
    blackBlock.setAttribute("class", "block");
    bBlocks.add(blackBlock);

    let whiteBlock = document.createElement("img");
    whiteBlock.setAttribute("src", "./images/wb.png");
    whiteBlock.setAttribute("name", "white");
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
    let diceNum = Math.floor((Math.random() * 6) + 1);
    let i = 0;
    let interval = setInterval(() => {
        let x = Math.floor((Math.random() * 6) + 1);
        i++;
        dice.setAttribute("src", "./images/dice/dice-" + x + ".png")
        if (i == 30) {
            clearInterval(interval);
            dice.setAttribute("src", "./images/dice/dice-" + diceNum + ".png")

        }
    }, 50);
    return diceNum;
}
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
function sugustions(id) {


    let col = document.getElementById(id);
    let column = parseInt(id.slice(6));
    let colsug = [];
    if (diceValues.length == 2) {
        if (diceValues[0] + column <= 24) {
            destcol = colTags[diceValues[0] + column - 1];
            if (destcol.children.length <= 1) {
                colsug.push(destcol);
            }
        }
        if (diceValues[1] + column <= 24) {
            destcol = colTags[diceValues[1] + column - 1];
            if (destcol.children.length <= 1) {
                colsug.push(destcol);
            }
        }
        if (diceValues[0] + diceValues[1] + column <= 24) {
            destcol = colTags[diceValues[0] + diceValues[1] + column - 1];
            if (destcol.children.length <= 1) {
                colsug.push(destcol);
            }
        }
    }
    if (diceValues.length == 4) {
        for (let i = 1; i <= 4; i++) {
            let sum = 0;
            for (let j = 0; j < i; j++) {
                sum += diceValues[j];
            }
            if (sum + column <= 24) {
                destcol = colTags[sum + column - 1];
                if (destcol.children.length <= 1) {
                    colsug.push(destcol);
                }
            }
        }
    }
    return { "originColumn": col, "validColumns": colsug };
}
function setSegustion(sugs) {
    for (i = 0; i < sugs["validColumns"].length; i++) {
        sugs["validColumns"][i].children[0].classList.add("sugustCol");
    }
}
function removeSegustions() {
    for (i = 0; i < 24; i++) {
        colTags[i].children[0].classList.remove("sugustCol");
    }
}
function moveBlock(id, validCols) {
    let destColNum = parseInt(id.slice(6));
    let orgColNum = parseInt(validCols["originColumn"].id.slice(6));
    let MovedBlock = blockMaker();
    colStacks[destColNum - 1].add(MovedBlock);
    validCols["originColumn"].removeChild(validCols["originColumn"].children[1]);
    document.getElementById(id).appendChild(MovedBlock);
}
function blockMaker() {
    if (whiteT) {
        let whiteBlock = document.createElement("img");
        whiteBlock.setAttribute("src", "./images/wb.png");
        whiteBlock.setAttribute("name", "white");
        whiteBlock.setAttribute("class", "block");
        return whiteBlock;
    }
    else {
        let blackBlock = document.createElement("img");
        blackBlock.setAttribute("src", "./images/bb.png");
        blackBlock.setAttribute("name", "black");
        blackBlock.setAttribute("class", "block");
        return blackBlock;
    }
}
for (let i = 0; i < 24; i++) {
    colTags[i].addEventListener("click", (e) => {
        let id = e.target.id;
        if (id == '') {
            id = e.target.parentNode.id;
        }
        let col = document.getElementById(id);
        
        
        if (!(col.children[0].classList.contains("sugustCol"))) {
            if(col.children.length >=2 ){
                if(col.children[1].getAttribute("name") == turn){
                    sugsts = sugustions(id);
                    removeSegustions();
                    setSegustion(sugsts);
                }
            }
        }
        else {
            moveBlock(id, sugsts);
            removeSegustions();
        }
    });
}
