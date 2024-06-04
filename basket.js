let h1 = document.getElementById("h1");
let g1 = document.getElementById("g1");
let winp = document.getElementById("winp");
let num1 = 1
let num2 = 2
let num3 = 3



let count = parseInt(h1.innerText);
let count1 = parseInt(g1.innerText);

function add() {
  count += num1;
  h1.innerText = count;
}

function sum(){
     count1 += num1
  g1.innerText = count1;
}

function sum2(){
     count1 += num2
  g1.innerText = count1;
}


function sum3(){
     count1 += num3
  g1.innerText = count1;
}


function add2() {
  console.log("hiiii");
  count += num2 
    h1.innerText = count; 
}

function add3() {
  console.log("hiiii");
  count += num3
    h1.innerText = count; 
}

function remove(){
    h1.innerText = 0
    count = 0
}

function remove1(){
    g1.innerText = 0
    count1 = 0
}

function winner(){
    if(count>count1){
       winp.innerText="Home is Winner"
    }else if(count<count1){
       winp.innerText="Guest is winner"
    }
}