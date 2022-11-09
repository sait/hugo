# Crear Ventana 'Agregar Datos'

## 09 de Noviembre del 2022

En las ventanas de Catalogo, debemos de poder agregar datos, para ello, debemos configurar una ventana la cual obtenga esos datos y los guarde en la tabla
Dicha Ventana, se utilizara para Agregar, Modificar y Eliminar.

Para el *Init* debemos de crear una variable que utilizaremos para saber que modo utilizaremos al entrar a ella
Para ello, nos dirigimos a ```Form/New Property``` en *Name* escribimos la variable ```nModo```

## datAlumn.Init
* nModo Almacena la forma en que va a mandar llamar la ventana
    * 1 = Agregar
    * 2 = Modificar
    * 3 = Eliminar
* La herramienta 'With thisform' elimina la necesidad de estar indicando en cada linea que los procesos que se estÃ¡n programando son para esta ventana.
``` java
LParameter nModo, nRec
if Not OpenDbf ('Alumnos','ID')
	Return .F.
EndIf

With thisform
	.Fecha1.setValue(date())

	if PCount()==0
		nModo =1
	EndIf

	.nModo = nModo
	
	Select Alumnos
	IF(.nModo == 2 Or .nModo == 3)
		if(nRec&lt;=0 Or nRec&gt;Reccount())
			Alerta('Registro no válido')
			Return .F.
		EndIf

		GoTo nRec
	EndIf
	
	Do case
	Case .nModo==1
		.Caption = 'Agregar Alumno'
		.Grabar.Caption='\&lt;Agregar'
		Select Alumnos
		Go Bott
		.txtId.value = PadL(Allt(SigDoc(ID)),5)
	
	Case .nModo==2
		.caption = 'Modificar Alumno'
		.Grabar.Caption = '\&lt;Modificar'
		.txtId.Enabled = .F.
		
		.CargarInfo()
	
	Case .nModo==3
		.Caption = 'Eliminar Alumno'
		.Grabar.Caption='\&lt;Eliminar'
		
		.CargarInfo()
		.SetAll('enabled', .F.)
		
		.Grabar.Enabled = .T.
		.Cerrar.Enabled = .T.			
	endCase		
EndWith
```

Ademas, Debemos crear dos metodos

**CargarInfo()** - Nos permitira cargar la información para los modos modificar y eliminar

**SaveInfo()** - Nos permitira guardar la información en la tabla en el modo agregar

Para agregarlos a nuestra ventana, nos dirigimos a ```Form/New Method``` en *Name* escribimos ambos metodos para que nuestra ventana los identifique. 


CargarInfo()
- Método para cargar la información
```R
With ThisForm
	
	.txtNombre.Value = Alumnos.NOMBRE
	.txtApellidos.Value = Alumnos.APELLIDOS
	.txtGrado.Value = Alumnos.GRADO
	.txtGrupo.Value = Alumnos.GRUPO
	.txtMatricula.Value  = Alumnos.MATRICULA
	.Fecha1.value = Alumnos.FECHANAC
EndWith
```


SaveInfo()
- Método para guardar la información
```sql
With ThisForm
	select Alumnos
	replace	ID 	With 	.txtId.Value,;
			NOMBRE	 	With 	Allt(.txtNombre.Value),;
			APELLIDOS 	with 	Allt(.txtApellidos.Value),;
			GRADO		With 	Allt(.txtGrado.Value),;
			GRUPO 		With	Allt(.txtGrupo.Value),;
			MATRICULA 	With 	Allt(.txtMatricula.Value),;
			FECHANAC 	With 	.Fecha1.getValue()
endwith
```