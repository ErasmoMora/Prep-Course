// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = []

  for (let G in objeto){
    array.push([G, objeto[G]])
    
  }
  return array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let map ={}
  for (let i = 0; i < string.length; i++){
      let letter = string[i]
      if (map[letter]){
          map[letter]++
      }else{
          map[letter] = 1
      }
  }
  return map
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let a = ''
  let b = ''
  for (let i of s){
      if (i === i.toUpperCase()){
          a += i
      }else{
          b += i
      }
  }
  return a+b
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let r = []
  let t = ''
  let u = ''
  for (let i = 0; i < str.length; i++){
      if (str[i] === ' '){
          for (o of r){
              t += o
          }
          u += t + ' '
          r = []
          t =''
      }else{
        r.unshift(str[i])
      }
  }
  for (o of r){
    t += o
  }
  u += t 
  r = []
  t =''
  
  return u
  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
let numero1 = numero.toString()
var p = numero1.length -1

for (let i = 0; i < numero1.length; i++){
    if (numero1[p] !== numero1[i] ){
        return "No es capicua"
    }
    p -= 1;
}
return "Es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let letter = ''
  for (i = 0; i < cadena.length; i++) {
      if (cadena[i] === 'a' || cadena[i] === 'b' || cadena[i] === 'c'){ 
      continue; 
      }
      
      letter += cadena[i]
  }
  
  return letter
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((a,b) => {
    if (a.length === b.length){
        return 0
    }
     if (a.length > b.length){
        return 1
    }
    
    return -1
  })
  return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  array3 = []

  for (a of arreglo1){
    for (b of arreglo2){
        if (a === b){
           array3.push(a)
        }
    
    }
  }
  return array3
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

