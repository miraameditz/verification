var input = document.getElementById("input");
var userName = document.getElementById("userName");
var PopUp = document.getElementById("PopUp");
var arr = [];

function login() {
    arr.push(userName.value);
}

function checkName() {
    if (arr.includes(input.value)) {
        PopUp.innerHTML = `<div class="VerifyForm"> <i class="fa-solid fa-check green"></i> <br /> You Are Now Verified </div>`;
    } else {
        PopUp.innerHTML = `<div class="VerifyForm"> <i class="fa-solid fa-x red"></i> <br /> You're Not Verified </div>`;
    }
    
}
