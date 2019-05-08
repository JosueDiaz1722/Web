const fs=require('fs');

function agregarArchivo(nombreArchivo, contenidoArchivo, callback) {
    fs.readFile(nombreArchivo,'utf-8',
        (error, contenidoArchivoLeido)=>{
            if (error) {
                fs.writeFile(nombreArchivo, contenidoArchivo,
                    (err) => {
                        if (err) {
                            console.error("Error de escritura");
                            callback(err);
                        } else {
                            console.log("Archivo creado");
                            callback(undefined, contenidoArchivo);
                        }
                    }
                );
            } else {
                fs.writeFile(
                    nombreArchivo,
                    contenidoArchivoLeido + contenidoArchivo,
                    (err) => {
                        if (err) {
                            console.error("Error de escritura");
                            callback(err);
                        } else {
                            console.log("Archivo creado");
                            callback(undefined, contenidoArchivoLeido + contenidoArchivo);
                        }
                    }
                );
            }
        }
    );
}

agregarArchivo('archivo.txt',
    '\nPrueba',
    (textoArchivo,error)=>{
        console.log('Error',error);
    }
);

function variosArchivos(arregloNombres, callback) {
    const arregloRespuestas=[];
    arregloNombres.forEach((string, indice)=>{
        const archivo=`${indice}-${string}.txt`;
        const contenido=string;
        fs.writeFile(archivo,
            contenido,(err)=>{
            const respuesta={
            nombreArchivo:archivo,
                contenidoArchivo:contenido,
                    error:err
        };
        arregloRespuestas.push(respuesta);
        const tamanioRespuesta=arregloRespuestas.length;
        if(tamanioRespuesta===arregloNombres.length){
            callback(arregloRespuestas)
        }
    });
    });
}

const arregloNombresArchivos=['a','b','c','d'];
variosArchivos(arregloNombresArchivos,
    (arregloRespuestas)=>{
    console.log('Exito',arregloRespuestas );
});

function variosArchivosPromesa(arregloNombres) {
    return new Promise(
        (resolve,reject)=> {
            const arregloRespuestas = [];
            arregloNombres.forEach((string, indice) => {
                const archivo = `${indice}-${string}.txt`;
                const contenido = string;
                fs.writeFile(archivo,
                    contenido, (err) => {
                        const respuesta = {
                            nombreArchivo: archivo,
                            contenidoArchivo: contenido,
                            error: err
                        };
                        arregloRespuestas.push(respuesta);
                        const tamanioRespuesta = arregloRespuestas.length;
                        if (tamanioRespuesta === arregloNombres.length) {
                            resolve(arregloRespuestas)
                        }
                    });
            });
        });
}

const arregloNombresArchivos2=['w','x','y','z'];
variosArchivosPromesa(arregloNombresArchivos2);