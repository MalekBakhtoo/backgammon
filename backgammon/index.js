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

// program to implement stack data structure
class Stack {
    constructor() {
        this.items = [];
    }
    // add element to the stack
    add(element) {
        return this.items.push(element);
    }
    // remove element from the stack
    remove() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }
    // view the last element
    peek() {
        return this.items[this.items.length - 1];
    }
    // check if the stack is empty
    isEmpty() {
        return this.items.length == 0;
    }
    // the size of the stack
    size() {
        return this.items.length;
    }
    // empty the stack
    clear() {
        this.items = [];
    }
}

//data structure

let c1 = new Stack();
let c2 = new Stack();
let c3 = new Stack();
let c4 = new Stack();
let c5 = new Stack();
let c6 = new Stack();
let c7 = new Stack();
let c8 = new Stack();
let c9 = new Stack();
let c10 = new Stack();
let c11 = new Stack();
let c12 = new Stack();
let c13 = new Stack();
let c14 = new Stack();
let c15 = new Stack();
let c16 = new Stack();
let c17 = new Stack();
let c18 = new Stack();
let c19 = new Stack();
let c20 = new Stack();
let c21 = new Stack();
let c22 = new Stack();
let c23 = new Stack();
let c24 = new Stack();
const colStacks = [c1 ,c2, c3 ,c4 , c5 , c6 ,c7 , c8 , c9 , c10 , c11 , c12 , c13 , c14 , c15 , c16 , c17 , c18 , c19 , c20 , c21 , c22 , c23 ,c24];


bBlocks = new Stack();
wBlock = new Stack();

for (i = 0; i < 15; i++) {
    let blackBlock = document.createElement("img");
    blackBlock.setAttribute("src", "./images/bb.png");
    blackBlock.setAttribute("class", "block");
    bBlocks.add(blackBlock);

    let whiteBlock = document.createElement("img");
    whiteBlock.setAttribute("src", "./images/wb.png");
    whiteBlock.setAttribute("class", "block");
    wBlock.add(whiteBlock);

}
function firstDesin() {

    // white Block

    ct1.appendChild(wBlock.peek());
    colStacks[0].add(wBlock.peek());
    wBlock.remove();
    ct1.appendChild(wBlock.peek());
    colStacks[0].add(wBlock.peek());
    wBlock.remove();

    ct12.appendChild(wBlock.peek());
    colStacks[11].add(wBlock.peek());
    wBlock.remove();
    ct12.appendChild(wBlock.peek());
    colStacks[11].add(wBlock.peek());
    wBlock.remove();
    ct12.appendChild(wBlock.peek());
    colStacks[11].add(wBlock.peek());
    wBlock.remove();
    ct12.appendChild(wBlock.peek());
    colStacks[11].add(wBlock.peek());
    wBlock.remove();
    ct12.appendChild(wBlock.peek());
    colStacks[11].add(wBlock.peek());
    wBlock.remove();

    ct19.appendChild(wBlock.peek());
    colStacks[18].add(wBlock.peek());
    wBlock.remove();
    ct19.appendChild(wBlock.peek());
    colStacks[118].add(wBlock.peek());
    wBlock.remove();
    ct19.appendChild(wBlock.peek());
    colStacks[18].add(wBlock.peek());
    wBlock.remove();
    ct19.appendChild(wBlock.peek());
    colStacks[18].add(wBlock.peek());
    wBlock.remove();
    ct19.appendChild(wBlock.peek());
    colStacks[18].add(wBlock.peek());
    wBlock.remove();

    ct17.appendChild(wBlock.peek());
    colStacks[16].add(wBlock.peek());
    wBlock.remove();
    ct17.appendChild(wBlock.peek());
    colStacks[16].add(wBlock.peek());
    wBlock.remove();
    ct17.appendChild(wBlock.peek());
    colStacks[16].add(wBlock.peek());
    wBlock.remove();

    //black block
    ct24.appendChild(bBlocks.peek());
    colStacks[23].add(wBlock.peek());
    bBlocks.remove();
    ct24.appendChild(bBlocks.peek());
    colStacks[23].add(wBlock.peek());
    bBlocks.remove();

    ct13.appendChild(bBlocks.peek());
    colStacks[12].add(wBlock.peek());
    bBlocks.remove();
    ct13.appendChild(bBlocks.peek());
    colStacks[12].add(wBlock.peek());
    bBlocks.remove();
    ct13.appendChild(bBlocks.peek());
    colStacks[12].add(wBlock.peek());
    bBlocks.remove();
    ct13.appendChild(bBlocks.peek());
    colStacks[12].add(wBlock.peek());
    bBlocks.remove();
    ct13.appendChild(bBlocks.peek());
    colStacks[12].add(wBlock.peek());
    bBlocks.remove();

    ct6.appendChild(bBlocks.peek());
    colStacks[5].add(wBlock.peek());
    bBlocks.remove();
    ct6.appendChild(bBlocks.peek());
    colStacks[5].add(wBlock.peek());
    bBlocks.remove();
    ct6.appendChild(bBlocks.peek());
    colStacks[5].add(wBlock.peek());
    bBlocks.remove();
    ct6.appendChild(bBlocks.peek());
    colStacks[5].add(wBlock.peek());
    bBlocks.remove();
    ct6.appendChild(bBlocks.peek());
    colStacks[5].add(wBlock.peek());
    bBlocks.remove();

    ct8.appendChild(bBlocks.peek());
    bBlocks.remove();
    ct8.appendChild(bBlocks.peek());
    bBlocks.remove();
    ct8.appendChild(bBlocks.peek());
    bBlocks.remove();
}
firstDesin();

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
        }

    }, 50);
}
let d1;
let d2;
document.getElementById("roll").addEventListener("click", () => {
    d1 = rollDice("d1");
    d2 = rollDice("d2");



});

function game(d1, d2) {









}

function sugustiions(dice1, dice2, id) {
    let col = document.getElementById(id);
    let column = parseInt(id.slice(6));
    let sugusts = new Stack();

    if (dice1 == dice2) {

        
        
        
    }


}
