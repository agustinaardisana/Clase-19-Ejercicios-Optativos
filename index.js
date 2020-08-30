//Playlist
// let cancion1 = prompt(`Escribe el nombre de la canción que quieres agregar a la playlist`)
// let cancion2 = prompt(`Escribe el nombre de la canción que quieres agregar a la playlist`)
// let cancion3 = prompt(`Escribe el nombre de la canción que quieres agregar a la playlist`)
// let cancion4 = prompt(`Escribe el nombre de la canción que quieres agregar a la playlist`)
// let cancion5 = prompt(`Escribe el nombre de la canción que quieres agregar a la playlist`)

// let primerLi = document.getElementById("primeraCancion")
// primerLi.textContent = cancion1

// let segundoLi = document.getElementById("segundaCancion")
// segundoLi.textContent = cancion2

// let tercerLi = document.getElementById("terceraCancion")
// tercerLi.textContent = cancion3

// let cuartoLi = document.getElementById("cuartaCancion")
// cuartoLi.textContent = cancion4

// let quintoLi = document.getElementById("quintaCancion")
// quintoLi.textContent = cancion5

//Contador
const botonMenosUno = document.getElementById("boton-1")
const botonMasUno = document.getElementById("boton+1")
const botonMenosCinco = document.getElementById("boton-5")
const botonMasCinco = document.getElementById("boton+5")
const botonMenosDiez = document.getElementById("boton-10")
const botonMasDiez = document.getElementById("boton+10")
let hacerCuenta = Number(document.getElementById("contador").textContent)

botonMenosUno.onclick = () => {
    const resultadoCuenta = hacerCuenta - 1
    const reemplazo = hacerCuenta.replace("hacerCuenta", "resultadoCuenta")
    print(reemplazo)
}






//Adivinanza
const primerBoton = document.getElementById("boton1")
const segundoBoton = document.getElementById("boton2")
const tercerBoton = document.getElementById("boton3")
const resultado = document.getElementById("resultadoCorrecto")
const colorVerde = document.getElementsByTagName("button")

primerBoton.onclick = () => {
    resultado.textContent = "Correcto!"
    colorVerde[0].classList.add("verde")
}

segundoBoton.onclick = () => {
    resultado.textContent = "¡Le erraste!"
    colorVerde[0].classList.add("verde")
    colorVerde[1].classList.add("rojo")
    colorVerde[2].classList.add("rojo")
}

tercerBoton.onclick = () => {
    resultado.textContent = "¡Le erraste!"
    colorVerde[0].classList.add("verde")
    colorVerde[1].classList.add("rojo")
    colorVerde[2].classList.add("rojo")
}



    
