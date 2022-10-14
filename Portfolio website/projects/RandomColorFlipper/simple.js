const colors = ['red', 'green', 'blue', 'yellow', 'grey', 'pink', 'cyan', 'orange', 'brown', 'white'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// const header = document.querySelector("h4");


btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

// header.addEventListener("mouseover", () => {
//     header.textContent = "----- RESET -----";
// })

// header.addEventListener("mouseout", () => {
//     header.textContent = "COLOR FLIPPER";
// })

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}