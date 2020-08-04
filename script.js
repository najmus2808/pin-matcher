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

document.getElementById("submitBtn").addEventListener("click",function(){
   let value = document.getElementById("right-text-area").value;
   if(value.length>0){
        cheakValue();
   }
    
    ClearFields();
})

function cheakValue(){
    document.getElementById("match").style.display = "none";
    document.getElementById("unMatch").style.display = "none";
    let leftValue = document.getElementById("left-text-area").value;
    let rightValue = document.getElementById("right-text-area").value;
    if(leftValue==rightValue){
        document.getElementById("match").style.display = "block";
    }
    else{
        document.getElementById("unMatch").style.display = "block";
        decrementValue();
    }
}

function ClearFields() {
    document.getElementById("right-text-area").value = "";
}

function back(){
    let value = document.getElementById("right-text-area").value;
    let newValue = value.length -1;
    document.getElementById("right-text-area").value = value.substring(0,newValue);    
}

function decrementValue(){
    let value = document.getElementById("try-value").innerText;
    value--;
    document.getElementById("try-value").innerText = value;
    if(value == 0){
        document.getElementById("submitBtn").disabled = true;
    }
}
