const fs=require('fs');
const nombreArchivo= 'movie.json';
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
            obj=require('./movie.json');

            PrimerEjercicio(obj);
            SegundoEjercicio(obj);
            TercerEjercicio(obj);
            CuartoEjercicio(obj);
            QuintoEjercicio(obj);
            SextoEjercicio(obj);
            SeptimoEjercicio(obj);
            OctavoEjercicio(obj);
            NovenoEjercicio(obj);
            DecimoEjercicio(obj);
        }
    });

function PrimerEjercicio(obj) {
    console.log("Los nombres son: ");
    console.log(obj.map(movie=>movie.name).filter((value,index,self)=>self.indexOf(value) === index));
}
function SegundoEjercicio(obj) {
    console.log("Los tipos son: ");
    console.log(obj.map(movie=>movie.type).filter((value,index,self)=>self.indexOf(value) === index));
}
function TercerEjercicio(obj) {
    console.log("Los tipos de genero son: ");
    console.log(obj.map(movie=>movie.gender).filter((value,index,self)=>self.indexOf(value) === index));
}
function CuartoEjercicio(obj) {
    console.log("Los tipos de status son: ");
    console.log(obj.map(movie=>movie.status).filter((value,index,self)=>self.indexOf(value) === index));
}

function QuintoEjercicio(obj) {
    console.log("Los nombres de origen son: ");
    console.log(obj.map(movie=>movie.origin.name).filter((value,index,self)=>self.indexOf(value) === index));
}
function SextoEjercicio(obj) {
    console.log("Los nombres de location son: ");
    console.log(obj.map(movie=>movie.location.name).filter((value,index,self)=>self.indexOf(value) === index));
}

function SeptimoEjercicio(obj) {
    var tipo = obj.map(movie=>movie.type).filter((value,index,self)=>self.indexOf(value) === index);
    var datostipo ={};
    Object.keys(tipo).forEach(function (key) {
        var i=0;
        datostipo[tipo[key]] =[];
        const valor= obj.map(movie=>{
            if(movie.type=== tipo[key]){
                datostipo[tipo[key]].push(movie.name);
                i++;
            }
        });
    });

    console.log(datostipo)

    var tipogenero = obj.map(movie=>movie.gender).filter((value,index,self)=>self.indexOf(value) === index);
    var datosgenero ={};
    Object.keys(tipogenero).forEach(function (key) {
        var i=0;
        datosgenero[tipogenero[key]] =[];
        const valor= obj.map(movie=>{
            if(movie.gender=== tipogenero[key]){
                datosgenero[tipogenero[key]].push(movie.name);
                i++;
            }
        });
    });

    console.log(datosgenero)

    var tipostatus = obj.map(movie=>movie.status).filter((value,index,self)=>self.indexOf(value) === index);
    var datosstatus ={};
    Object.keys(tipostatus).forEach(function (key) {
        var i=0;
        datosstatus[tipostatus[key]] =[];
        const valor= obj.map(movie=>{
            if(movie.status=== tipostatus[key]){
                datosstatus[tipostatus[key]].push(movie.name);
                i++;
            }
        });
    });

    console.log(datosstatus)

    var tiposorigin = obj.map(movie=>movie.origin.name).filter((value,index,self)=>self.indexOf(value) === index);
    var datosorigin ={};
    Object.keys(tiposorigin).forEach(function (key) {
        var i=0;
        datosorigin[tiposorigin[key]] =[];
        const valor= obj.map(movie=>{
            if(movie.origin.name=== tiposorigin[key]){
                datosorigin[tiposorigin[key]].push(movie.name);
                i++;
            }
        });
    });

    console.log(datosorigin)

    var tipolocation= obj.map(movie=>movie.location.name).filter((value,index,self)=>self.indexOf(value) === index);
    var datoslocation ={};
    Object.keys(tipolocation).forEach(function (key) {
        var i=0;
        datoslocation[tipolocation[key]] =[];
        const valor= obj.map(movie=>{
            if(movie.location.name=== tipolocation[key]){
                datoslocation[tipolocation[key]].push(movie.name);
                i++;
            }
        });
    });

    console.log(datoslocation)
}

function OctavoEjercicio(obj) {
    var letras_alf = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var resultado = [];
    letras_alf.forEach(element => {
        var letras = element.toUpperCase();
        var estado = obj.filter((movie)=>movie.name.startsWith(letras)).length != 0;
        resultado.push({letras, estado});
    });
    console.log(resultado);
}

function NovenoEjercicio(obj) {
    var contador= 0;
    var valor = [...new Set(obj.map(movie=>{
        if(movie.status === 'Alive' ){
            contador++
        }
    }))];
    console.log(contador);
}

function DecimoEjercicio() {
    var episodios = [];
    obj.forEach(function (element){
        var numeroEpisodios = element.episode.length;
        var Nombre = element.name;
        episodios.push({Nombre, numeroEpisodios})
    });
    console.log(episodios);
}