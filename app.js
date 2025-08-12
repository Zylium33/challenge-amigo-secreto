let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value; 
    amigos.push(amigo);
    document.getElementById("amigo").value = "";    
    console.log(amigos);
}