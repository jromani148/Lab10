//Question 1
function greetUser(){
    let username = document.getElementById('username').value;
    document.getElementById('heading-three').innerText = "Hello, " + username;
    
}
    
document.getElementById('button1').addEventListener('click', getInput)

//Question 2
function ChangeText(){
    document.getElementById(`message`).innerText="Hello, World!";

}

//Question 3
function Additon(){
    document.getElementById(`1`).value;
    document.getElementById(`2`).value;
    document.getElementById(`result`)

    if(!isNaN(`1`)&& !isNaN(`2`)){
        sum = 1 +2;innerText= `result ${sum}`;


    }
    

}

//Question 4
function newtitle(){
    document.getElementById(`title`).innerHTML=document.getElementById(`titleenter`).value;

}
document.getElementById(`resultbuttom`).addEventListener(`click`,newtitle);

//Question 5
function Concatenate(){
    document.getElementById(`combinedText`).innerHTML= document.getElementById(`st1`).value+ document.getElementById(`st2`).value;

}
//Question 6
let button = document.getElementById('changeColorButton');
let colorBox = document.getElementById('colorBox');

