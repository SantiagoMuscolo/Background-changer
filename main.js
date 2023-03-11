const button = document.getElementById(`button`);
const body = document.getElementById(`body`);

const colors = ["green", "red", "violet", "pink", "blue", "white"];

const btnChanger = () => {
    let randomColors = Math.floor(Math.random() * colors.length);
    const colorChanger = body.style.background = colors[randomColors];
}

button.addEventListener('click', () => {
    btnChanger()
})