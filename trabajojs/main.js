function validarRta (texto, textoValidar) {
    if (texto.toLowerCase(textoavalidar) == textoValidar) {
    return ture
    }
    return false
}

let sigue = "si"

do{
    let numero = parseFloat(prompt("ingrese un numero para duplicarlo"))

    alert(numero*2)
    let pregunta = prompt ("¿desea ingresar otro numero?")

    if (validarRta(pregunta, "si") == true){
        sigue = "no"
    }
} while (sigue == "si")