const decreasebtn = document.getElementById("decreaseBTN");
const resetbtn = document.getElementById("resetBTN");
const increasebtn = document.getElementById("increaseBTN");
const NumberLabel = document.getElementById("NumberLabel");

let count = 0;

decreasebtn.onclick = function(){
    count--;
    NumberLabel.textContent = count;
}

increasebtn.onclick = function(){
    count++;
    NumberLabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    NumberLabel.textContent = count;
}