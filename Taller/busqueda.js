const fs=require('fs');
const nombreArchivo= 'people.json';
var obj;

fs.readFile(nombreArchivo,
    'utf-8',
    (error, data) => {  // Callback
        if (error) {
            console.error(error,data);
            try {
                throw new Error(error);
            } catch (e) {
                console.log(e);
            }
            console.log('Extra')
        }else{
            console.log("OK");
            /*obj=JSON.parse(data);
            console.log();
             */
            obj=require('./people.json');
            /*PrimerEjercicio(obj);
            SegundoEjercicio(obj);
            TercerEjercicio(obj);
            CuartoEjercicio(obj);*/
            PrimerEjercicio(obj);
            QuintoEjercicio(obj);
            /*SextoEjercicio(obj);
            SeptimoEjercicio(obj);
            OctavoEjercicio(obj);
            NovenoEjercicio(obj);
            DecimoEjercicio(obj);
            */
        }
    });

function PrimerEjercicio(obj) {
    console.log("Los generos son: ");
    console.log(obj.map(persona=>persona.gender).filter((value,index,self)=>self.indexOf(value) === index));
    console.log("Los tipos de color de ojos son: ");
    console.log(obj.map(persona=>persona.eye_color).filter((value,index,self)=>self.indexOf(value) === index));
    console.log("Los tipos de color de piel son: ");
    console.log(obj.map(persona=>persona.skin_color).filter((value,index,self)=>self.indexOf(value) === index));
    console.log("Los tipos de color de cabello son: ");
    console.log(obj.map(persona=>persona.hair_color).filter((value,index,self)=>self.indexOf(value) === index));
}
function SegundoEjercicio(obj) {
    console.log("Los tipos de color de ojos son: ");
    console.log(obj.map(persona=>persona.eye_color).filter((value,index,self)=>self.indexOf(value) === index));
}
function TercerEjercicio(obj) {
   console.log("Los tipos de color de piel son: ");
    console.log(obj.map(persona=>persona.skin_color).filter((value,index,self)=>self.indexOf(value) === index));
}
function CuartoEjercicio(obj) {
    console.log("Los tipos de color de cabello son: ");
    console.log(obj.map(persona=>persona.hair_color).filter((value,index,self)=>self.indexOf(value) === index));
}

function QuintoEjercicio(obj){
    var tipogenero = obj.map(persona=>persona.gender).filter((value,index,self)=>self.indexOf(value) === index);
    var datos ={};
    Object.keys(tipogenero).forEach(function (key) {
        var i=0;
        datos[tipogenero[key]] =[];
        const valor= obj.map(persona=>{
            if(persona.gender=== tipogenero[key]){
                datos[tipogenero[key]].push(persona.name);
               i++;
            }
        });
    });
    console.log(datos["male"]);
    console.log(datos["female"]);
    /*const male= obj.filter(persona =>persona.gender === "male").map(persona=>persona.name);
    const female= obj.filter(persona =>persona.gender === "female").map(persona=>persona.name);
    const hermaphrodite= obj.filter(persona =>persona.gender === "hermaphrodite").map(persona=>persona.name);
    const none= obj.filter(persona =>persona.gender === "none").map(persona=>persona.name);*/
}

function SextoEjercicio(obj){
    var letras_alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var resultado = [];
    letras_alf.forEach(element => {
        var letras = element.toUpperCase();
        var estado = obj.filter((x)=>x.name.startsWith(letras)).length != 0;
        resultado.push({letras, estado});
    });
    console.log(resultado);

}

function SeptimoEjercicio(obj){
    var sumMass = 0;
    var sumHeight = 0;
    var mass=0;
    var height =0;

    var valor = [...new Set(obj.map(x=>{
        if(x.mass !== 'unknown' ){
            mass =parseFloat(x.mass);
            sumMass = sumMass + mass;
        }
        if(x.height !== "unknown") {
            height = parseFloat(x.height);
            sumHeight = sumHeight + height;
        }
    }))]
    console.log("El peso es: ",sumMass);
    console.log("La altura es: ",sumHeight);
}



function OctavoEjercicio(obj){
    var resultado = true;
    var valor = [...new Set(obj.map(persona=>{
        if(persona.vehicules == null){
            resultado = false;
            return;
        }
    }))]
    if(resultado==true) {
        console.log("Todos estan ocupado");
    }else{
        console.log("No se cumple");
    }
}

function NovenoEjercicio(obj){
    var resultado = true
    var valor = [...new Set(obj.map(persona=>{
        if(persona.starships == ''){
            resultado = false;
            return;
        }
    }))]

    if(resultado==true) {
        console.log("Todos estan ocupado");
    }else{
        console.log("No se cumple");
    }

}

function DecimoEjercicio(obj){
    var films = [];
    obj.forEach(function (element){
        var numberOfFilms = element.films.length;
        var name = element.name;
        films.push({name, numberOfFilms})
    });
    console.log(films);
}