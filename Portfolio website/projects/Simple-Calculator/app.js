const btns = document.querySelectorAll("button");
let calScreen = document.querySelector("#calc-display");
let calValue = '';

for(let btn of btns) {
    btn.addEventListener("click", (e) => {
        
        let btnText = e.target.innerText;
        
        try{

            if(btnText == "X"){
                btnText = "*";
                calValue += btnText;
                calScreen.value = calValue;
            }
            else if(btnText == "C") {
                calValue = "";
                calScreen.value = calValue;
            }
            else if(btnText == "="){
                calValue = eval(calValue);
                calScreen.value = calValue;
            }
            else if(btnText == "<"){
                calValue = calValue.slice(0, -1),
                calScreen.value = calValue;
            }
            else{
                calValue += btnText;
                calScreen.value = calValue;
            }
        }
        catch(err){
            alert("Please Input Correct Mathematical Expression!!");
            calValue = "";
            calScreen.value = calValue;
        }

    })
} 
          