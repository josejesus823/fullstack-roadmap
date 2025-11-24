## Preguntas: 
1. Si yo tengo una variable con un tipo de dato numérico o init, y se la paso a un alert este le cambia el tipo de dato? -> Si, los alert automaticamente convierten cualquier valor a string
2. Yo puedo dividir con números string? -> Si, ya que JS se encarga de hacer la conversión a numero
3. Si yo hago esto `let x = Boolean(NaN)` que me va a devolver cuando imprima x en consola? -> 0 ya que es un valor vacio
4. Cual es la diferencia entre el type Conversion y Type coerción? -> el conversión pasa implícita o explícitamente sea que yo quiera o el JS quiera, mientras que el coerción, es hecho automaticamente por JS
5. Si en un objeto yo tengo 2 métodos un to.String() y un  valueOf y yo quiero intentar hacer una operacion con este objeto que va a pasar que metodo va a usar ambos o solo 1? -> Usara el metodo valufeOf ya que JS usa este para operaciones
6. Cual es el unico valor en JavaScript que no es igual a el mismo? o sea valor === valor ? -> NaN 