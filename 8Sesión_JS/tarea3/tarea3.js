
console.log("------------------------- TAREA 3 --------------------------------");

var simpleArray = [5,5,5,5,5];

var array1 = [[6, 8, 9, 10, 2],
              [4, 2, 5, 5, 6],
              [5, 10, 10, 8, 9], 
              [8, 8, 7, 7, 9], 
              [9, 9, 9, 9, 10]]

var aprobado = function fnAprobado (grupo, promedio){
    console.log("El grupo " + grupo + " aprobó con un promedio de : " + promedio);
}

var reprobado = function fnReprobado (grupo, promedio){
    console.log("El grupo " + grupo + " reprobó con un promedio de : " + promedio);
}

var avgArray = function fnPromedio (intArray){
    var sum = 0;
    for(let i in intArray){
        sum += intArray[i];
    }
    return (sum/intArray.length);    
}


function getCalificaciones(bigArray, fnAprobado, fnReprobado, fnPromedio){
    for(let i = 0; i < bigArray.length; i++){
        let currentArray = bigArray[i];
        let average = fnPromedio(currentArray);
        if(average < 6)
            fnReprobado(i+1, average);
        else
            fnAprobado(i+1, average);
    } 
    console.log("Calificaciones obtenidas con éxito!"); 

}

getCalificaciones(array1, aprobado, reprobado, avgArray);




