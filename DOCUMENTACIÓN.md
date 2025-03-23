
### Documentación de la API de Libros

Esta API permite gestionar una lista de libros almacenados en un archivo JSON (`db.json`). A continuación, se explica cómo funciona cada parte del código y cómo interactuar con la API.

---

#### 1. Requisitos Previos
- **Node.js**: Asegúrate de tener Node.js instalado en tu sistema.
- **Dependencias**: Instala `express` usando `npm install express`.

---

#### 2. Estructura del Proyecto
- **`db.json`**: Archivo JSON que actúa como base de datos para almacenar los libros.
- **`index.js`**: Archivo principal que contiene el código de la API.

---

#### 3. Funciones Principales

##### **Lectura y Escritura de Datos**
- **`readData()`**: Lee los datos del archivo `db.json` y los convierte en un objeto JavaScript.
- **`writeData(data)`**: Escribe los datos proporcionados en el archivo `db.json`.

---

#### 4. Endpoints de la API

#### **a. Obtener todos los libros**
- **Método**: `GET`
- **Ruta**: `/books`
- **Descripción**: Este endpoint devuelve una lista completa de todos los libros almacenados en la base de datos (archivo `db.json`).
- **Respuesta Exitosa**:
  - Código de estado: `200 OK`
  - Ejemplo de respuesta:
    ```json
    [
      { "id": 1, "title": "El Principito", "author": "Antoine de Saint-Exupéry" },
      { "id": 2, "title": "Cien Años de Soledad", "author": "Gabriel García Márquez" }
    ]
    ```

---

#### **b. Obtener un libro por su ID**
- **Método**: `GET`
- **Ruta**: `/books/:id`
- **Descripción**: Este endpoint devuelve un libro específico basado en su ID. Si el libro no existe, la respuesta será `null`.
- **Parámetros**:
  - `id`: ID del libro (número entero).
- **Respuesta Exitosa**:
  - Código de estado: `200 OK`
  - Ejemplo de respuesta:
    ```json
    { "id": 1, "title": "El Principito", "author": "Antoine de Saint-Exupéry" }
    ```
- **Respuesta si no se encuentra el libro**:
  - Código de estado: `200 OK`
  - Ejemplo de respuesta:
    ```json
    null
    ```

---

#### **c. Crear un nuevo libro**
- **Método**: `POST`
- **Ruta**: `/books`
- **Descripción**: Este endpoint permite agregar un nuevo libro a la base de datos. El ID del libro se genera automáticamente.
- **Cuerpo de la Solicitud** (JSON):
  - `title`: Título del libro (cadena de texto, obligatorio).
  - `author`: Autor del libro (cadena de texto, obligatorio).
- **Ejemplo de cuerpo de solicitud**:
  ```json
  {
    "title": "1984",
    "author": "George Orwell"
  }
  ```
- **Respuesta Exitosa**:
  - Código de estado: `200 OK`
  - Ejemplo de respuesta:
    ```json
    {
      "id": 3,
      "title": "1984",
      "author": "George Orwell"
    }
    ```

---

#### **d. Actualizar un libro existente**
- **Método**: `PUT`
- **Ruta**: `/books/:id`
- **Descripción**: Este endpoint permite actualizar los datos de un libro existente basado en su ID. Solo se actualizan los campos proporcionados en el cuerpo de la solicitud.
- **Parámetros**:
  - `id`: ID del libro a actualizar (número entero).
- **Cuerpo de la Solicitud** (JSON):
  - `title`: Nuevo título del libro (cadena de texto, opcional).
  - `author`: Nuevo autor del libro (cadena de texto, opcional).
- **Ejemplo de cuerpo de solicitud**:
  ```json
  {
    "title": "1984 (Edición Especial)",
    "author": "George Orwell"
  }
  ```
- **Respuesta Exitosa**:
  - Código de estado: `200 OK`
  - Ejemplo de respuesta:
    ```json
    {
      "message": "Libro actualizado correctamente"
    }
    ```

---

#### **e. Eliminar un libro**
- **Método**: `DELETE`
- **Ruta**: `/books/:id`
- **Descripción**: Este endpoint elimina un libro de la base de datos basado en su ID.
- **Parámetros**:
  - `id`: ID del libro a eliminar (número entero).
- **Respuesta Exitosa**:
  - Código de estado: `200 OK`
  - Ejemplo de respuesta:
    ```json
    {
      "message": "Libro eliminado correctamente"
    }
    ```

---

#### 5. Ejemplos de Uso con Postman

#### **a. Obtener todos los libros**
1. Abre Postman.
2. Selecciona el método `GET`.
3. Ingresa la URL: `http://localhost:3000/books`.
4. Haz clic en **Send**.
5. Verás la lista de libros en la sección de respuesta.

---

#### **b. Obtener un libro por su ID**
1. Abre Postman.
2. Selecciona el método `GET`.
3. Ingresa la URL: `http://localhost:3000/books/1` (cambia `1` por el ID del libro que desees).
4. Haz clic en **Send**.
5. Verás los detalles del libro en la sección de respuesta.

---

#### **c. Crear un nuevo libro**
1. Abre Postman.
2. Selecciona el método `POST`.
3. Ingresa la URL: `http://localhost:3000/books`.
4. Haz clic en la pestaña **Body**.
5. Selecciona **raw** y elige **JSON** en el menú desplegable.
6. Ingresa el cuerpo de la solicitud:
   ```json
   {
     "title": "1984",
     "author": "George Orwell"
   }
   ```
7. Haz clic en **Send**.
8. Verás el nuevo libro creado en la sección de respuesta.

---

#### **d. Actualizar un libro existente**
1. Abre Postman.
2. Selecciona el método `PUT`.
3. Ingresa la URL: `http://localhost:3000/books/1` (cambia `1` por el ID del libro que desees actualizar).
4. Haz clic en la pestaña **Body**.
5. Selecciona **raw** y elige **JSON** en el menú desplegable.
6. Ingresa el cuerpo de la solicitud:
   ```json
   {
     "title": "1984 (Edición Especial)",
     "author": "George Orwell"
   }
   ```
7. Haz clic en **Send**.
8. Verás un mensaje de confirmación en la sección de respuesta.

---

#### **e. Eliminar un libro**
1. Abre Postman.
2. Selecciona el método `DELETE`.
3. Ingresa la URL: `http://localhost:3000/books/1` (cambia `1` por el ID del libro que desees eliminar).
4. Haz clic en **Send**.
5. Verás un mensaje de confirmación en la sección de respuesta.

---

#### 6. Consideraciones Finales
- Asegúrate de que el archivo `db.json` exista y tenga una estructura válida, por ejemplo:
  ```json
  {
    "books": [
      { "id": 1, "title": "Libro 1", "author": "Autor 1" },
      { "id": 2, "title": "Libro 2", "author": "Autor 2" }
    ]
  }
  ```
- Si el archivo no existe, la API no funcionará correctamente.
