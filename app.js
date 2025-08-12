let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value; 
    amigos.push(amigo);
    
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = amigo;
    document.getElementById("listaAmigos").appendChild(nuevoLi);
    
    document.getElementById("amigo").value = "";    
    document.getElementById("amigo").focus();    
    console.log(amigos);
}