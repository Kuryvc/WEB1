let student = {
    name: "Kury",
    showName() { 
        let mostrar = () => console.log(this.name)
        mostrar();
    }
}

student.showName();

function crearAlumno(expediente, nombre, edad){
    console.log(arguments);
}

crearAlumno(495940, 'Kury', 21);

//JSON: es un string, cadena de texto que debe teener cierto formato para ser interpretado como json, puede servir para mandar info al servidos


let tacos = {
    tamaño: 'Grande',
    tipo: 'Pastor', 
    ingredientes: ['carne', 'cilantro', 'cebolla'],
    recomiendo_salsa: true,
    precio: 6
}

let taco1 = JSON.stringify(tacos);
console.log(taco1);

let strJSON = '{"nombre": "Kury", "nacimiento": "2000-11-30T12:00:00.000Z"}';
let objetoKury = JSON.parse(strJSON, function(key, value){
    if(key == 'nacimiento'){
        return new Date(value);
    }
});

var array1 = [];

for(var i = 1; i <=10; i++){
    var libro = {
        id: i,
        Autor: 'Autor' + (Math.floor(Math.random() * 101)+1),
        Año:  Math.floor(Math.random() * (2020 - 2000 + 1) + 2000),
        fecha: 1,
    }
    libro.fecha =  (new Date(libro.Año + '-01-01T12:00:00.000Z'))
    array1.push(libro);
}

//console.log(array1[0]);
console.table(array1);

/*
//MÉTODOS
//1e4 = 10000
1e-3 = 0.001
//tambn hay exa 0xFF
//binario 0b111111
//octal 0o666
Math.round(3.5) de 6 para arriba al siguiente
num.tofixed(4) 4 decimales al número 

En strings
str.length tamaño
se manejan como arreglos o con charAt para obtener sus elementos. 
si usas charAt a una posición liegal o que ya no hay nada si te regresa una char vacío 

puedes acceder a un valor como arreglo pero no reasignarlo

En arreglos
con new Array(5), con [], o pasándole los valores
se puede definir ej. un arreglo con 6 elemtnos, si luego le cambiar el length, es como recortarlo 
push() insertar al final del arreglo
unshift() insertar al inicio del arreglo
pop() obtener y eliminar el ultimo del arreglo
shift() obtiene y elimina

*/
var libroNuevo = {
        id: i,
        Autor: 'Autor' + (Math.floor(Math.random() * 101)+1),
        Año:  Math.floor(Math.random() * (2020 - 2000 + 1) + 2000),
        fecha: 1,  
}
libroNuevo.fecha =  (new Date(libroNuevo.Año + '-01-01T12:00:00.000Z'))
array1.unshift(libroNuevo);

console.table(array1);

tamanio = array1.length;
var array2 = [];

for(let i = 0; i <tamanio; i++){
    array2[i] = array1.pop(i);   
}

console.table(array2);
console.log(array1.length);


/*
seguimos en arreglos
con delete cambia valores a undefined

splice(indice, deleteCount, elem1, elemN) recorre los elementos y eliminaa al de la 2posicion de parametros y agregar elementos desde entonces
slice regresa un arreglo nuevo con las posiciones que le des, sin contar el último [1, 3), te devuelve posiciones 1 y 2
array.indexof(2, 0) busca el primer 2 dentro del arreglo desde la posición 0, devuelve el índice
array.lastIndexOf(2, 4) busca el primero 2 de deracha a izq dentro del arreglo a partir de la posición 4
includes es como indexof pero regresa TRUE O FALSE

si es un arreglo de objetos 
array.find(item => item.id == 1); devuelve el objeto completo cuyo id sea 1
array.findIndex con lo mismo adentro devuelve el índice
array.filter(item => item.id < 3) te regresa un arreglo con los objeto cuyo id sea menor a 3

*/

var librosCopy = [];
var tamanio_Copy = array2.length;

console.log("-------------------------LIBROS COPY---------------------------");
for(let i = 0; i <tamanio_Copy; i++){
    librosCopy[i] = array2.pop(i);   
}
console.table(librosCopy)

function eliminaLibro(id_borrar, arreglo){
    posicion = librosCopy.findIndex(item => item.id == id_borrar);
    librosCopy.splice(posicion,1);    
}
console.log("Eliminar libro con id == 15");
eliminaLibro(15, librosCopy);
console.table(librosCopy)