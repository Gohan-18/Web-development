let count = 0;

const num = document.querySelector(".num");
const btns = document.querySelectorAll(".btn");

for(let btn of btns){
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;

        if(styles.contains("incr")){
            count++;
        }
        else if(styles.contains("decr")){
            count--;
        }
        else{
            count = 0;
        }

        if(count > 0){
            num.style.color = "green";
        }
        else if(count < 0){
            num.style.color = "red";
        }
        else{
            num.style.color = "black";
        }
        num.textContent = count;
    })
}

