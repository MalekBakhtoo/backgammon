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

const bBlocks = [];
const wBlock = [];

for (i = 0; i < 15; i++) {
    let blackBlock = document.createElement("img");
    blackBlock.setAttribute("src", "./images/bb.png");
    blackBlock.setAttribute("class", "block");
    bBlocks.push(blackBlock);

    let whiteBlock = document.createElement("img");
    whiteBlock.setAttribute("src", "./images/wb.png");
    whiteBlock.setAttribute("class", "block");
    wBlock.push(whiteBlock);

}
ct1.appendChild(wBlock[0]);
ct1.appendChild(wBlock[1]);
ct2.appendChild(wBlock[2]);
ct3.appendChild(wBlock[3]);
ct4.appendChild(wBlock[4]);