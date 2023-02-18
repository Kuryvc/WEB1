let obj1 = new Object();
let obj2 = {};
console.log("Objeto 1: ", obj1, " Objeto 2: ", obj2);

let alumno1 = {
    nombre:'Kury',
    carrer: 'IE',
    ApellidoPaterno: 'Vazquez'
};

console.log("Alumno: ", alumno1);

//Accesos
console.log(alumno1.nombre) //acceso a valor
console.log(alumno1['nombre']) 

//modificar o agregar valor
alumno1.promedio = 9.0;
delete alumno1.carrer;

console.log(alumno1)

function crearAlumno(nombre, carrera, edad){
    return {
        nombre,
        carrera,
        edad
    }
}

let alumno_creado_1 = crearAlumno("Kury", "ISC", 21);
console.log(alumno_creado_1)

//Fucnión vs Clase (ambos con constructro)

function AlumnoF (nombre, carrera, edad){
    this.nombre = nombre;
    this.carrera = carrera;
    this.edad = edad;
};

class AlumnoC {
    constructor(nombre, carrera, edad){
        this.nombre = nombre;
        this.carrera = carrera;
        this.edad = edad;
    }
}

let alumno_creado_2 = new AlumnoF('Kury con Constructor', 'ISC', 21);
let alumno_creado_3 = new AlumnoC('Kury con clase', 'ISC', 21);

console.log(alumno_creado_2);
console.log(alumno_creado_3);

let Celular1 = {
    Marca: 'Huawei',
    Modelo: 'Y9',
    Año: 2019,
    Precio: 6000,
    En_Venta: 'Sí'
}

//console.log(Celular);

function crearCelularFunction(Marca, Modelo, Año, Precio, En_venta){
    return{
        Marca,
        Modelo, 
        Año, 
        Precio, 
        En_venta
    }
}

class CelularClass{
    constructor(Marca, Modelo, Año, Precio, En_Venta){
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Año = Año;
        this.Precio = Precio;
        this.En_Venta = En_Venta;
    }
}

function crearCelularWClass(Marca, Modelo, Año, Precio, En_Venta){
    return new CelularClass(Marca, Modelo, Año, Precio, En_Venta);
}

let Celular2 = crearCelularWClass('Samsung', 'S21', 2020, 15000,'No');

console.log(Celular1);
console.log(Celular2);



if(alumno1.expediente == undefined){
    console.log("El alumno no tiene la propiedad");
}

if(!("expediente" in alumno1)){
    console.log("El alumno no tiene expediente");
}

for(let key in alumno1){
    console.log(key, ":", alumno1[key]);
}

console.log("----------------------------------");
console.log("----------------------------------");
console.log("----------------------------------");

let alumno3 = alumno1; // los asignas a la misma referencia en memoria, siempre son iguales
alumno3.semestre = 6;
console.log(alumno1.semestre);
console.log(alumno3 == alumno1);
console.log(alumno3 === alumno1);

let alumno4 = {};
let alumno5 = {};

console.log(alumno4 == alumno5);
console.log(alumno4 === alumno5);


let alumno6 = {};
Object.assign(alumno6, alumno1); //aquí sí duplicas a un elemento diferente.
console.log(alumno6)

function describeCelular(Celular){
    for(let key in Celular){
        console.log(key, ":", Celular[key]);
    }
}
console.log("Describir celular")
describeCelular(Celular2);


function TienePropiedad(Celular, propiedad){
    if((propiedad in Celular)){
        console.log(Celular[propiedad])
    }else{
        console.log('No tiene dicha ' + propiedad);
    }
}

TienePropiedad(Celular2, 'Marca')


let Celular3 = {
    Marca: 'Huawei',
    Modelo: 'Y9',
    Año: 2019,
    Precio: 6000,
    En_Venta: 'Sí',
    get Marca(){
        console.log(this.Marca + this.Modelo)
    },
    set Ram(valores){
        let [ram, proc] = valores.split(" ");
        this.ram = ram;
        this.proc = proc;
    }
}

Celular3.Ram = '1, 2';