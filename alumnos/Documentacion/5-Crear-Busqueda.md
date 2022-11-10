# Crear Ventana de Búsqueda

## 10 de Noviembre del 2022

Para la ventana de busqueda, debemos crearla con un formulario predeterminado de SAIT en la libreria msllib60

```sql
create form busqueda as Busqueda from F:\hugo\msllib60\msllib60.vcx
```

*Ventana Predeterminada*

![Imagen de Búsqueda](https://github.com/sait/hugo/blob/main/alumnos/Documentacion/img/listalum.png)

Utilizaremos variables que el formulario ya contiene, las cuales nos permitiran hacer la busqueda en las tablas para obtener los resultados.

### listalum.Init
* Params:
    * cAnchos: Ancho en píxeles, de las columnas
    * cCamposBuscar: Campos en dónde se buscará la información capturada por el usuario.
    * cCamposSelect: Campos a seleccionar en la sentencia Select.
    * cExprs: Expresiones a desplegar en cada columna de la lista.
    * cFromTable: Tabla en dónde buscaremos.
    * cOrderBy: Campo que usaremos para ordenar el resultado de la sentencia Select.
    * cRetval: Nombre del campo a regresar como resultado de la búsqueda.
    * cSql: SQL a realizar para la búsqueda.
        * Ejemplo: Select * From Alumnos Where Upper() $ Upper() Order By Nombre

```R
With ThisForm
	.cAnchos = '20,75,100'
	.cCamposBuscar = 'NOMBRE+APELLIDOS'
	.cCamposSelect = '*'
	.cExprs = 'ID, NOMBRE, APELLIDOS'
	.cFromTable = 'Alumnos'
	.cOrderby = 'NOMBRE'
	.cRetval = 'ID'
	.cSql = ''
EndWith
```

#### Nota: *'cCamposBuscar'* puede recibir más de un parametro, sin embargo, para ello, debemos agregar un *'+'* entre cada parametro para que la búsqueda se pueda realizar y no genere un error.