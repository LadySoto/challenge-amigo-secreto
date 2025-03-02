let nombres = [];
let mensajeError = document.querySelector('p');

function agregarAmigo(){

    let nombreAmigo = document.getElementById('amigo').value.trim().toLowerCase();
    nombreAmigo = capitalizarNombre(nombreAmigo);

    if (nombreAmigo.trim() === "") {
        generarMensajeError("Debes ingresar un nombre");
    } else {
        generarMensajeError("");
        if(isNaN(nombreAmigo)){
            nombres.push(nombreAmigo);
            limpiarInPut();
            recorrerListaAmigos();
        }else{
            generarMensajeError("El nombre no puede ser un número");
            limpiarInPut();
        }
    }

    console.log(nombres)
    return nombres;
}

function generarMensajeError(texto){
    if (texto.trim() === "") {
        mensajeError.style.display = "none";
    } else {
        mensajeError.textContent = texto;
        mensajeError.style.display = "block";
    }
}

function capitalizarNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function limpiarInPut(){
    document.getElementById('amigo').value = '';
}

function recorrerListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    let nombresUnicos = [...new Set(nombres)]; // Eliminar nombres duplicados

    for (let i = 0; i < nombresUnicos.length; i++) {
        let li = document.createElement('li'); // Crear un elemento <li>
        li.textContent = nombresUnicos[i]; // Asignar el texto con el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

function sortearAmigo() {
    
    let resultado = document.getElementById('resultado');

    if (nombres.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[indiceAleatorio];
    
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    
    generarMensajeError("");
}

