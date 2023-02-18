function fun_1(variable1 = 5){
    return variable1 + 3;
}

let resultado = fun_1();
console.log("Output fun_1: " + resultado);

let v3 = 5;
function f_3(v1, v2 = 1){
    return v1 + v2 + v3
}

console.log("Output f_3:" + f_3(10));

var array1 = [["Juan", 5], ["Pedro", 6], ["José", 7], ["Andrea", 8]];
var numero1 = 0

function chill(array, numero){
    if(numero > array.lenght){
        console.log("El núermo no es válido");
    }
    //console.log(array[numero].lenght);

    
    for(i = 0; i < 2; i++){
        console.log(array[numero][i] + "");
    }
    console.log(string);

}


function createNewUser(id, user_name, storeData){
    if(id > 0 && id < 1000){
        storeData(id, user_name);
    }else{
        console.log("Id incorrecto");
    }
}

function store(id, name){
    console.log("Guardado: \nID:", id, "\nUsuario", name);
}

createNewUser(25, "Kury", store);
createNewUser(27, "Kury2", store);

createNewUser(200, "Kury3", function(id, name){
    console.log("Guardado: \nID:", id, "\nUsuario", name);
});


