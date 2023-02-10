alert("Soy una alerta de fuera!!!");

console.log('Hola Mundo');

var x = 'test';
let y = 5;

const z = y + 5;

console.log('Z: ',z);

let array_1 = ['Hola', 1, 3.1416, ['Test', false, 56]];

function suma(number){
    var sum = 0;
    for(let i = 1; i < number; i++){
        sum += i;
    }
    return sum
}

let array = [1,2,3]

function promedio(array1){
    var prom = 0;
    for(let i = 0; i < array1.length; i++){
        prom += array1[i];
    }
    return "Tu promedio es: " + prom/array.length;
}
