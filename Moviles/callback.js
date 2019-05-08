const fs = require('fs');
const nombreArchivo= 'miArchivo.txt';
const contenidoAAgregar = 'Esta es una prueba\n';
    fs.readFile(nombreArchivo,

    'utf-8',
    (error, contenidoArchivo) => {  // Callback
        if (error) {
            console.error(error);
            try {
                throw new Error(error);
            } catch (e) {
                console.log(e);
            }
            console.log('Extra')
        } else {
            // Callback Hell!
            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                if (err) throw err;
                console.log('Archivo completado!');
                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                    if (err) throw err;
                    console.log('Archivo completado!');
                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                        if (err) throw err;
                        console.log('Archivo completado!');
                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                            if (err) throw err;
                            console.log('Archivo completado!');
                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                if (err) throw err;
                                console.log('Archivo completado!');
                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                    if (err) throw err;
                                    console.log('Archivo completado!');
                                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                        if (err) throw err;
                                        console.log('Archivo completado!');
                                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                            if (err) throw err;
                                            console.log('Archivo completado!');
                                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                if (err) throw err;
                                                console.log('Archivo completado!');
                                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                    if (err) throw err;
                                                    console.log('Archivo completado!');
                                                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                        if (err) throw err;
                                                        console.log('Archivo completado!');
                                                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                            if (err) throw err;
                                                            console.log('Archivo completado!');
                                                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                if (err) throw err;
                                                                console.log('Archivo completado!');
                                                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                    if (err) throw err;
                                                                    console.log('Archivo completado!');
                                                                    fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                        if (err) throw err;
                                                                        console.log('Archivo completado!');
                                                                        fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                            if (err) throw err;
                                                                            console.log('Archivo completado!');
                                                                            fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                                if (err) throw err;
                                                                                console.log('Archivo completado!');
                                                                                fs.writeFile(nombreArchivo, contenidoArchivo + contenidoAAgregar, (err) => {
                                                                                    if (err) throw err;
                                                                                    console.log('Archivo completado!');

                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });

        }
    });