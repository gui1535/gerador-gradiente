let colorOne = document.getElementById("cor-a");
let colorTwo = document.getElementById("cor-b");
let currentDirection = 'to bottom';
let outputCode = document.getElementById("code");
const colorInputs = document.querySelectorAll('.input-color');

colorInputs.forEach(input => {
    input.addEventListener('input', function () {
        gerarCodigo();
    });
});


function direcao(value, _this) {
    let direcrtions = document.querySelectorAll(".buttons button");
    for (let i of direcrtions) {
        i.classList.remove("active");
    }
    _this.classList.add("active");
    currentDirection = value;
    gerarCodigo();
}

function gerarCodigo() {
    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
    document.getElementsByTagName("BODY")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${colorOne.value}, ${colorTwo.value})`;
}

function copiarTexto() {
    outputCode.select();
    document.execCommand('copy');
    alert("Gradient Copied!");
}


gerarCodigo();