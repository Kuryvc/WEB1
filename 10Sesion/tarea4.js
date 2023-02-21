console.log("---------------------------ARREGLO DE LIBROS---------------------------")
var arrayLibros = [];

for(var i = 1; i <=10; i++){
    var libro = {
        id: i,
        Autor: 'Autor' + (Math.floor(Math.random() * 101)+1),
        Año:  Math.floor(Math.random() * (2020 - 2000 + 1) + 2000),
        fecha: 1,
    }
    libro.fecha =  (new Date(libro.Año + '-01-01T12:00:00.000Z'))
    arrayLibros.push(libro);
}

console.table(arrayLibros);

console.log("------------------------ARREGLO DE LIBRO INVERSO--------------------------")

var libroNuevo = {
    id: 15,
    Autor: 'Autor Libro Nuevo',
    Año:  Math.floor(Math.random() * (2020 - 2000 + 1) + 2000),
    fecha: new Date(),  
}
arrayLibros.unshift(libroNuevo);

tamanioLibro = arrayLibros.length;
var arrayLibros2 = [];

for(let i = 0; i <tamanioLibro; i++){
arrayLibros2[i] = arrayLibros.pop(i);   
}
console.table(arrayLibros2);



console.log("------------------------------LIBROS COPY--------------------------------");
var librosCopy = [];
tamanio_Copy = arrayLibros2.length;

librosCopy = JSON.parse(JSON.stringify(arrayLibros2));

function eliminaLibro(id_borrar, arreglo){
    let posicion = arreglo.findIndex(item => item.id == id_borrar);
    arreglo.splice(posicion,1);    
}
console.log('\nFunción "eliminalibro(id,arreglo)"')
console.log("Eliminar libro con id == 15");
eliminaLibro(15, librosCopy);
console.table(librosCopy);

function librosAño(anio, arreglo){
    let posicion = arreglo.filter(item => item.Año <= anio);
    return posicion
}

console.log('\nFunción "librosAño(anio,arreglo)"')
console.log("Mostrar libros cuyo año sea menor o igual a 2013");
var librosFiltro = librosAño(2013, librosCopy);
console.table(librosFiltro);

console.log("-------------------------------TAREA------------------------------------");

var array20Libros = [];
//Crear nuevo arreglo con 20 libros con clave y número de palabras
for(var i = 1; i <=20; i++){
    var libro = {
        id: i,
        Autor: 'Autor' + (Math.floor(Math.random() * 101)+1),
        Año:  Math.floor(Math.random() * (2020 - 2000 + 1) + 2000),
        fecha: new Date(),
        clave: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        palabras: Math.floor(Math.random() * (100000 - 1000 + 1) + 1000)

    }
    array20Libros.push(libro);
}

//crear nuevo libro e insertarlo en la posición 7
var nuevolibroT = {
    id: 25,
        Autor: 'Autor Libro Nuevo',
        Año:  Math.floor(Math.random() * (2020 - 2000 + 1) + 2000),
        fecha: new Date(),
        clave: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        palabras: Math.floor(Math.random() * (100000 - 1000 + 1) + 1000)
}

array20Libros.splice(7, 0, nuevolibroT);
console.log("Arreglo de 20 libros, insertando uno nuevo con id == 25 en la posición 7");
console.table(array20Libros);

//función sort para ordenar los libros según la clave 
array20Libros.sort(function(a,b){
    let cond1 = a.clave < b.clave ? -1:1
    if(a.clave == b.clave){
        return 0;
    }
    return cond1;
});
console.log("Arreglo de 20 libros ordenado según sus claves");
console.table(array20Libros);

//Función de las operaciones suma, promedio, max y min
console.log("Operaciones aplicadas a los libros:");
function operacion(opcion, array){
    switch(opcion){
        case 'TOT':
            let sum = 0;
            for(let i of array){
                sum+=i.palabras
            }
        return sum;
        case 'PRO':
            let sumPRO = 0;
            for(let i of array){
                sumPRO+=i.palabras
            }
        return (sumPRO/array.length).toFixed(2);
        case 'MAX':
            let maxValue = 0;
            let claveMax = 0;
            for(let i of array){
                if(i.palabras > maxValue){
                    maxValue = i.palabras;
                    claveMax = i.clave;
                } 
            }
            let resultMax = [claveMax, maxValue];
        return resultMax;
        
        case 'MIN':
            let minValue = array[0].palabras;
            let claveMin = 0;
            for(let i of array){
                if(i.palabras < minValue){
                    minValue = i.palabras;
                    claveMin = i.clave;
                } 
            }
            let resultMin = [claveMin, minValue];
        return resultMin;        
    }
};

/*
let strOpcion = 'MAX';
let resultado = operacion(strOpcion, array20Libros) ; 
if(strOpcion == 'MIN' || strOpcion == 'MAX'){
    console.log("La opción elegida es: "+ strOpcion + " y el resultado es: ["+ resultado + "]");
}
else{
    console.log("La opción elegida es: "+ strOpcion + " y el resultado es: "+ resultado);
}
*/
let strOpcion = 'TOT';
console.log("La opción elegida es: "+ strOpcion + " y el resultado es: "+ operacion(strOpcion, array20Libros));
strOpcion = 'PRO';
console.log("La opción elegida es: "+ strOpcion + " y el resultado es: "+ operacion(strOpcion, array20Libros));
strOpcion = 'MAX';
console.log("La opción elegida es: "+ strOpcion + " y el resultado es: ["+ operacion(strOpcion, array20Libros) + "]");
strOpcion = 'MIN';
console.log("La opción elegida es: "+ strOpcion + " y el resultado es: ["+ operacion(strOpcion, array20Libros) + "]");
