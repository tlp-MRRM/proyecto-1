import { universidad1, universidad2 } from "../models/universidad.js";
const arrayUniversidades = [universidad1, universidad2];

const resultados = document.getElementById("resultados")
const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener('click', (event) => {
    event.preventDefault();
    const textoBusqueda = document.getElementById("busqueda").value.toLowerCase();
    const respuesta = arrayUniversidades.filter((resultado) => {
        return resultado.name.toLowerCase() == (textoBusqueda)
    })
    if (respuesta) {
        respuesta.forEach(resultado => {
            resultados.innerHTML= `<p>${resultado.name}</p>
        <a class="verMasUniv" href="../profile/school/school.html">Mas información</a>`
        });
        
    } 
    else {
        resultados.innerHTML= `<p>No se encontró la universidad</p>`
    }
})