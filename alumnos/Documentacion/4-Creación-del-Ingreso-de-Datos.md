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
CargarInfo()
- Método para cargar la información
``` java
with ThisForm
	.txtId.Value = Alumnos.ID
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
``` java
With thisform
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