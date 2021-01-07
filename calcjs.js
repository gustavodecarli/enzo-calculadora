const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual') [0];
const botonBorrar = document.getElementsByName('data-borrar') [0];
const botonDEL = document.getElementsByName('data-DEL') [0];
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
        calcularMostrar();
});

botonBorrar.addEventListener('click', function(){
        borrar();
        actualizarDisplay();
});

botonDEL.addEventListener('click', function(){
        back();
        actualizarDisplay();
});

function SelectOperacion(op){

    if(operActual === '') return;

    operacion = op.toString();

    // Si es una operacion simple
    // no necesita 2 valores
    if (operacion == '√'){
        operAnterior = operActual;
        calcularMostrar();
        return
    }

    if (operacion == '+/-'){
        operAnterior = operActual;
        calcularMostrar();
        return
    }
/* 
    if (operacion == 'DEL'){
        operAnterior = operActual;
        calcularMostrar();
        return
    } */
    
    // Operacion de 2 miembros
    if(operAnterior !== ''){
        calcular()
    }
    operAnterior = operActual;
    operActual = '';
}

/* function evitarceros(cero){
    if (operActual === 00) return 0;
} */



function calcular(){
    var calculo;

    const anterior  = parseFloat(operAnterior);
    const actual    = parseFloat(operActual);

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
        case '^':
            calculo = exponencial(anterior, actual);
            break;
        case '√':
            calculo = raiz (anterior);
            break;
        case '+/-': 
            calculo = signo (anterior);
            break;/* 
        case 'DEL':
            calculo = DEL (actual);ç
            break; */
        default:
            return;
    }
    operActual = calculo;
    operacion = undefined;
    operAnterior = '';
}

/* Funcion que aplica el calculo y muestra  */
/* el resultado en pantalla                */ 
function calcularMostrar(){
    calcular();
    actualizarDisplay();
}

function raiz (numero){
    return Math.sqrt(numero);
}

function exponencial (base, exponente){

    var valorInicial = 1;

    for(var i = 0; i < exponente; i++){
        valorInicial = valorInicial * base;
    }

    return valorInicial;
}
    
function escribirNumero(num){
    operActual = operActual.toString() + num.toString();
    actualizarDisplay();
}

function borrar(){
    operActual = '';
    operAnterior = '';
    operacion = undefined;
}

function back(){    
    operActual = operActual.toString().slice(0,-1);
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value = operActual;
}

function signo(numero){
    return numero * -1;
} 

borrar();