# Creación del Proyecto

## 08 de Noviembre de 2022

Para poder mostrar los modulos especiales en Sait como una opción de menú con sus propias tablas
Debemos de crear un proyecto en donde ingresaremos todos los archivos para crear un archivo con extensión '.App'

Para ello, en la ventana de comandos, abrimos un proyecto ``` modi project + nombre del proyecto ```

```vfp 
modi project Alumnos
```

Se abrira una ventana

![Imagen del Proyecto](https://github.com/sait/hugo/blob/main/alumnos/Documentacion/img/project.png)

En la seccion de **Documents/Forms** le damos en **Add** y seleccionamos nuestro catalogo hecho con anterioridad *catalum*

En la seccion de **Code/Programas** le damos en **Add** y seleccionamos nuestros archivos con extensión '.prg' *alumnos* y *refer*
Despues de agregar *refer* debemos hacer click derecho y seleccionar la opción *Exclude*
#### Nota: El archivo *refer*, nos servira para ignorar todas las funciones que contiene SAIT y no son utilizadas en nuestro proyecto

Todos los formularios creados, que estén ligados a nuestra ventana principal (catalum), debemos agregarlos al proyecto para que los muestre correctamente.

Para copiar el proyecto dentro del sistema SAIT, debemos crear un archivo prg que contruya el proyecto con sus respectivas tablas y copiar/sobrescribir el proyecto en caso de que ya exista

```vfp
set safety off

built app Alumnos from Alumnos
copy file Alumnos.app to F:\hugo\demo\Alumnos.app
```

Para compilar el proyecto hacemos un ``` do + archivo .prg ```

```vfp
do make
```

Esté archivo debera utilizarse cada vez que agreguemos/modifiquemos algún formulario o archivos de codigo (prg)