# Creación del Catalogo
Para la creación del modulo especial, es posible iniciar desde el catalogo, ya que SAIT ofrece formularios predefinidos para facilitar dicha creación

Para ello, nos dirigimos a VFP a la ventana de comandos y creamos el catalogo con la forma predefinida para catalogos (catmsl)

``` create form catalum as catmsl from F:hugo\msllib60\catmsl.vcx ```

Se creara el siguiente catalogo.

![Imagen de Catalogo de Alumnos](https://github.com/sait/hugo/tree/main/alumnos/Documentacion/img/catalum.png)

Dicho catalogo no sera necesario modificar su diseño, todo cambio necesario se hara por medio del codigo.

## catalum.Init
* Form params
    * @cAlias: Tabla que se está usando
    * @cCatName: Nombre del catálogo
    * @FormaCatalogo: Formulario para hacer cambios
    * @FormaBusqueda: Formulario para hacer búsquedas
    * @cAnchos: Anchos de la columnas del grid, formato en pixeles y separado por este signo |
    * @cTitulos: Títulos de las columnas del grid, separados por este signo |
    * @cExprs: Campos a mostrar en el grid separados por este signo |
``` java
if not OpenDbf('Alumnos', 'ID')
    return .F.
EndIf

this.cAlias = 'Alumnos'
this.cCatName = 'catalum'
this.FormaCatalogo = 'datAlum'
this.FormaBusqueda = 'ListAlum'
this.cAnchos = '50|100|100|50|50|80|100'
this.cTitulos = 'Clave|Nombre|Apellidos|Grado|Grupo|Matricula|Fecha Nacimiento'
this.cExprs = 'Alumnos.ID|Alumnos.Nombre|Alumnos.Apellidos|Alumnos.Grado|Alumnos.Grupo|Alumnos.Matricula|Alumnos.FechaNac'
```
#### Nota: Aunque la tabla de Alumnos, ingresar y busqueda hayan sido creados, el catalogo nos ayuda a tener una vista de lo que se necesitara enlistar.

### Buscar.Click
El botón 'Buscar' esta ligado a 'FormaBusqueda', por lo que el nombre puesto abre, el formulario escrito. En caso de que no habra el Formulario por algún error. Debemos agregarla siguiente línea de codigo

```java
noDefault
*
* Buscar.click()
*
local cID

cID = ''
do form listalum to cID

if not empty(cID)
    select Alumnos
    =seek(cID)
    ThisForm.Grid1.refresh()
endif
```
Esté codigo nos permitira ignorar el codigo predefinido en el formulario y tomar esté para abrir el formulario de Busqueda que se creara despues.

