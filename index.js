import express from 'express';
import fs from 'fs';//file system module nos permite leer y escribir archivos del sistema de archivos

const app = express();

//! Funcinoes para leer y escribir datos en un archivo JSON

//* Función para leer datos del archivo db.json
const readData = () => {
    try {
        const data = fs.readFileSync('./db.json');
    return JSON.parse(data);
    //console.log(JSON.parse(data));
    } catch (error) {
        console.log("Error con la lectura de archivos!", error);
    }
};

readData();

// * Función para escribir datos en el archivo db.json
const writeData = (data) => {
    try {
        fs.writeFileSync('./db.json', JSON.stringify(data));
    } catch (error) {
        console.log("Error con la escritura de archivos!", error);
    }
};// Fin de las funciones para leer y escribir datos en un archivo JSON

//! Endpoints de la API

//* Endpoint para obtener todos los datos (libros) de la base de datos
app.get("/books", (req, res) => {
    const data = readData();
    res.json(data.books);
});

app.get("/", (req, res) => {
    res.send("This is my first project with Express!");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});