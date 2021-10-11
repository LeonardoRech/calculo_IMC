//Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {  //adicinamos evento 'submit' ao formulario
    e.preventDefault(); //formulario n enviado
    const inputPeso = e.target.querySelector('#peso'); //captura do dado
    const inputAltura = e.target.querySelector('#altura'); //captura do dado
    
    const peso = Number(inputPeso.value); //Capturar apenas numeros
    const altura = Number(inputAltura.value); //Capturar apenas numeros

    if (!peso) {
        setResultado('Peso inválido', false);  //Peso invalido
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);  //altura invalida
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`

    setResultado(msg, true);
});

//função da classificação do imc
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso nomral', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
}

//função calculo IMC
function getImc (peso, altura) {
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

//função criar paragrafo
function criaP (className) {
    const p = document.createElement('p');
    return p;
}

//Função restultado
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;

    const p = criaP();
    
    if (isValid)  {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p)

}