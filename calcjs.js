const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonSigno = document.getElementsByName('data-signo');
const botonExp = document.getElementsByName('data-exponente');
const botonIgual = document.getElementsByName('data-igual') [0];
const botonBorrar = document.getElementsByName('data-borrar') [0];
const botonDEL = document.getElementsByName('data-borrarparcial');
var result = document.getElementById('result');
var operActual = '';
var operAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        escribirNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){   
    boton.addEventListener('click', function(){
        SelectOperacion(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
        calcular();
        actualizarDisplay();
});

botonBorrar.addEventListener('click', function(){
        Borrar();
        actualizarDisplay();
});

/* botonExp.addEventListener('click', function(){
        Elevar();
        actualizarDisplay();
}); */

function SelectOperacion(op){
    if(operActual === '') return;
    if(operAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    operAnterior = operActual;
    operActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(operAnterior);
    const actual = parseFloat(operActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return
    }
    operActual = calculo;
    operacion = undefined;
    operAnterior = '';
}
 
/*function Elevar(){
    const base = parseFloat(operbase);
    const exp = parseFloat(operexp);
    var result = base

    for(var i=1; i<exp; i++){
        result = result * base;
}; */

function escribirNumero(num){
    operActual = operActual.toString() + num.toString();
    actualizarDisplay();
}

function Borrar(){
    operActual = '';
    operAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = operActual;
}

Borrar();