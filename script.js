// Crear un array vacío para almacenar los números
var numeros = [];

// Solicitar al usuario que ingrese 6 números
for (var i = 1; i <= 6; i++) {
    var numero = prompt("Ingrese el número " + i + ":");
    
    // Convertir el input a un número y agregarlo al array
    numeros.push(parseFloat(numero));
}

// Mostrar el array resultante
console.log("Los números ingresados son: " + numeros);