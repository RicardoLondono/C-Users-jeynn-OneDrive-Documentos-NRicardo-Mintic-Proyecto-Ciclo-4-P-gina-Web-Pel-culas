console.log("Hola mundo!!!")

let titulo = "Tiburon"
let año = 1975
let director = "Steven Spilbergh"

if (año > 1980)
    console.log("Pelicula moderna")
else
    console.log("pelicula clásica")

console.log("Titulo " + titulo + " año " + año + " director " + director)

titulo = "Matrix"
año = 1998
director = "Lana Wachowski"

if (año > 1980)
    console.log("Pelicula moderna")
else
    console.log("pelicula clásica")

console.log("Titulo " + titulo + " año " + año + " director " + director)

function suma(numero1, numero2){
    return numero1 + numero2
}

console.log(suma(10,20))

let sumaf = (numero1, numero2) => {
    return numero1 + numero2
}

let respuesta_sumaf = sumaf(10,20)

console.log(respuesta_sumaf)