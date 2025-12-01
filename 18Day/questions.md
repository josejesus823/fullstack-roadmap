# Preguntas 
1. Como puedo agregarle propiedades a un objeto vacio? -> Tomamo el objeto ejemplo person y con un `.` y un dato en string person.firstName  con esto le estamos agregando propiedades al objeto
2. Como podemos acceder a la propiedad de un objeto? -> hay 2 formas ingresando con `.` y el nombre clave del objeto o con, el objeto`[propertyName]` 
3. Si yo necesito crear muchos objetos de lmismo tipo, cual es la forma mas recomendada para hacerlo? -> Crear una funcion donde esta represente mi objeto 
4. Un objeto es solamente un contenedor para propiedades? -> Falso, es un contenedor para propiedades y metodos
5. La siguiente premisa es verdadera o falsa, Todos los valores de JavaScript excepto los primitivos son objetos? -> Verdadero
6. Es verdad que la palabra reservada delete solo me elimina el valor de la propiedad en mi objeto? -> Falso, tambien elimina la propiedad en si misma
7. Un objeto puede ser transformado a un string con el metodo String()? -> Se puede pero retornara un object Undefined, para esto se usa el metodo JSON.stringify()
8. En los objetos fecha que fecha es esta? new Date(2018, 12) ? ->  2019 Enero, ya que los meses solo van de 0 a 11, pero si hay un numero mayor este se agrega al flujo del siguiente año
9. Cual es al principal diferencia de recorrer la longitud de los arrays y metodos? -> Los arryas usan index numericos. los objetos usan nombres como indices que son la clave
10. Que pasa si hacemos un delete a un array? -> Este dejara huecos undefined, se debe usar pop or shift