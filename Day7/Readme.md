# MI PASO A PASO

## 1. Entender el comportamiento que se espera hacer
1. En el video se nos muestra que se nos entrega un codigo con un H2 que dice Task, 
2. una lista ordenada que tiene un valor adentro el cual es wake up
3. Un input que recibe texto 
4. Un boton de Add Task

# Que sucede con el comportamiento
Cuando alguien escribe en el input y le da click al boton Add Task este agrega a la lista ordenada el nuevo texto
Adicionalmente la primera tarea se convierte en un color rojo hecho con un mark y la letra pasa a ser rayada 
El nuevo elemento o el ultimo pasa a ser un mark verde con el texto subrayado


# Pasos a seguir 
1. Capturar los elementos Ol
2. Capturar los elementos Li
3. Capturar el valor que se le ingresa al input
4. Capturar el id que guardamos en el boton
5. Capturar el evento de click (Investigar addEventListener)
6. Validar primero que el campo no este vacio
7. Crear el elemento mark
8. asignar estilos al mark (Estos se van a disparar cada vez que ingresemos un nuevo mark pintandolo) /// Problema, el elemento html li del inicio no se va a pintar
9. Crear el elemento Li
10. Ingresar el value del input al elemento mark
11. Ingresar el mark al elemento li
12. Ingresar los elemtnos li al ol
13. Resetear el valor del input a vacio
14. Recorrer los li 
15. Tomar todos los li menos el ultimo (para hacer el cambio de los viejos)
16. Obtener los marks que vaya encontrando en el recorrido de los li
17. Evaluar si no existe un mark **(solucion al problema 8)**
18. Guardamos el valor que encontramos en el link que no tenia un mark
19. Creamos un elemento mark
20. Al elemento mark agregar el texto obtenido en el paso 18
21. En la posicion de ese mismo elemento sin mark, la remplazamos por el nuevo del paso 20
22. Definimos los estilos para todos los li que no sean el ultimo 



## VIDEO


https://streamable.com/8o798d
