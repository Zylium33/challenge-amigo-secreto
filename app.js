//Array vacio para nombres
let amigos = [];

function agregarAmigo() {
    //Agrega los nombres a el array 
    let amigo = document.getElementById("amigo").value; 
    if (amigo === "") {
        alert("Favor de escribir un nombre");
        return;
    }
    if (tieneNumero(amigo)) {
        alert("No se pueden ingresar numeros");
        return;
    }
    
    amigo = amigo.charAt(0).toUpperCase() + amigo.slice(1).toLowerCase();
    amigos.push(amigo);
    
    actualizarLista();

    //Limpia el input
    document.getElementById("amigo").value = "";    
    //Mantiene el cursor en el input
    document.getElementById("amigo").focus();    
    console.log(amigos);
}

//Crea el elemento visual de cada amigo
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = amigos[i];
        lista.appendChild(nuevoLi);
    }
}

//Detecta si pones un numero 
function tieneNumero(texto) {
    return /\d/.test(texto);
}

function sortearAmigo() {
    document.getElementById("resultado").innerHTML = ""; 

    //Calcula un numero en vase aleatorio en base al tamaño del array
    let aleatorio = Math.floor(Math.random()*amigos.length);
    let amigoSecreto = amigos[aleatorio];
    let ganador = document.createElement("li");
    ganador.textContent = `El amigo secreto es: "${amigoSecreto}"`;
    document.getElementById("resultado").append(ganador);
 }