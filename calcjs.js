const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonSigno = document.getElementsByName('data-signo');
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
        borrar();
        actualizarDisplay();
});

/* botonSigno.addEventListener('click', function(){
    signo();
    actualizarDisplay();
} */ //esto me tiro error. fijate los data signo-data opera quizas sea por ahi, el data del html tambien
// abajo de todo cree la funcion para este addevent pero como me tiro error no segui

function SelectOperacion(op){
    if(operActual === '') return;

    operacion = op.toString();

    // Si es una operacion simple
    // no necesita 2 valores
    if (operacion == '√'/* ,'+/-'*/){
        operAnterior = operActual;
        botonIgual.click();
        return
    }

    if (operacion == '+/-'){
        operAnterior = operActual;
        botonSigno.click();
        return Math.abs(numero);
    }
    
    // Operacion de 2 miembros
    if(operAnterior !== ''){
        calcular()
    }
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
        case '^':
            calculo = exponencial(anterior, actual);
            break;
        case '√':
            calculo = raiz (anterior);
            break;
        /* case '+/-': signo (anterior);
            break;  */
        default:
            return;
    }
    operActual = calculo;
    operacion = undefined;
    operAnterior = '';
}

function raiz (numero){
    return Math.sqrt(numero);
}

/* function signo (numero){
    return Math.abs(numero);
} */

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

function actualizarDisplay(){
    result.value = operActual;
}

/* function signo(){

} */

borrar();