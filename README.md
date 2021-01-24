# PRUEBA_TBJ

Pagina web que despliega productos por categoria coresspondiente.

### Ejecutar el proyecto

En la carpeta backend se debe ejecutar las siguientes instrucciones:

```sh
$ virtualenv env
$ source env/bin/activate
$ pip install -r requirements.txt
```

Y respextivamente, para la carpeta frontend se debe ejecutar las siguientes instrucciones:

```sh
$ npm install
$ npm run build
```
En backend/prueba_tbj/settings.py bajo de **DATABASES**, ingresa en el campo **PASSWORD** la contraseña de su base de datos.

Utilizar **POSTMAN** para ejecutar peticiones a la API, por ejemplo:

```sh
http://localhost:8000/api/prueba/product
http://localhost:8000/api/prueba/product/1
http://localhost:8000/api/prueba/product?search=camara
http://localhost:8000/api/prueba/product?page=1
```
