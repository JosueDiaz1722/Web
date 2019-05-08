const fs=require('fs');

const promesaLectura = new Promise(
    (resolve)=>{
        fs.readFile('archivo.txt', 'utf-8',
            (err,contenidoArchivo)=>{
            if(err){
                resolve('');
            }else{
                resolve(contenidoArchivo);
            }
            });
    }
);

const promesaEscritura = (contenidoLeido)=> {
    return new Promise(
        (resolve, reject) => {
            const contenido = contenidoLeido ? contenidoLeido: contenidoLeido+'zzz';
            fs.writeFile('archivo.txt', contenido,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenido);
                    }
                });
        }
    );
};

promesaLectura
    .then((contenidoArchivo)=>{
    console.log("OK", contenidoArchivo);
    return promesaLectura(contenidoArchivo)
})
    .then(
        (contenido)=>{
            console.log("Contenido completo ", contenido);
            return promesaEscritura(contenido)
        }
        )
    .then(
    (contenidoTotal)=>{
        console.log("OK", contenidoTotal);
        //return promesaEscritura(contenido)
    }
    )
    .then(
    (contenid)=>{
        console.log("Contenido completo ", conteido);
        return promesaEscritura(contenido)
    }
    )
    .catch(
        (resultadoError)=>{
            console.log('Error generado \n',resultadoError);
        }
    );

//callbacks => has esto, luego eso
//promise => calcula esto(usando eso)
/*
nombrePromes(parametros)
    .then(function (resultado)){ cada then devuelve una nueva promesa
    //hacer algo con el resultado
}
.catch(function (error) {
    //manejo de erroes
});*/
