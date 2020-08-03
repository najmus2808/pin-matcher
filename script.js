

document.getElementById("generate-pin-btn").addEventListener("click",function(){
   newValue("left-text-area");
})

function newValue(id){
    let radomDigit =  Math.floor(1000 + Math.random() * 9000);
    let value = document.getElementById(id).value = radomDigit;
}

function insert(val){
    document.getElementById("right-text-area").value += val;
}