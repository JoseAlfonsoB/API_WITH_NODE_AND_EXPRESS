import express from 'express';
import fs from 'fs';//file system module nos permite leer y escribir archivos del sistema de archivos

const app = express();

// Middleware para parsear el body de las solicitudes en formato JSON
app.use(express.json());

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
};// <-- Fin de las funciones para leer y escribir datos en un archivo JSON

//! Endpoints de la API

//* Endpoint para obtener todos los datos (libros) de la base de datos
app.get("/books", (req, res) => {
    const data = readData();
    res.json(data.books);
});

//* Endpoint para obtener un libro por su id
app.get("/books/:id", (req, res) => { /** FUNCIÓN CALLBACK */
    const data = readData();
    const id = parseInt(req.params.id); //Se formatea el texto porque originalmente viene como un String
    const book = data.books.find((book) => book.id === id);
    res.json(book);
});

//* Endpoint para crear un nuevo libro
app.post("/books", (req, res) => {
    const data = readData();
    const body = req.body;
    const newBook = {
        id: data.books.length + 1,
        ...body, //Se le asigna un id al nuevo libro aumentando en 1 al id anterior
    };
    data.books.push(newBook);
    writeData(data);
    res.json(newBook);
});

//* Endpoint para actualizar un libro
app.put("/books/:id", (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id);
    const bookIndex = data.books.findIndex((book) => book.id === id);
    data.books[bookIndex] = {
        ...data.books[bookIndex],
        ...body,
    }; //Se actualiza el libro con los nuevos datos
    writeData(data);
    res.json({ message: "Libro actualizado correctamente" }); //Se envía un mensaje de confirmación
});

//* Endpoint para eliminar un libro
app.delete("/books/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const bookIndex = data.books.findIndex((book) => book.id === id);
    data.books.splice(bookIndex, 1); //Se elimina el libro del array
    writeData(data);
    res.json({ message: "Libro eliminado correctamente" }); //Se envía un mensaje de confirmación
});
// <-- Fin de los endpoints para la API

app.get("/", (req, res) => {
    res.send("This is my first project with Express!");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});