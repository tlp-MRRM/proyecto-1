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
            resultados.innerHTML= `<div class="resultados"><h3>${resultado.name}</h3>
            Ubicacion <br>
            <div style="width: 100%"><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="${resultado.ubication.mapa}"><a href="https://www.gps.ie/car-satnav-gps/">Car GPS</a></iframe></div>'
            <div class='contenedor-btn-vermas'><a class="verMasUniv" href="../profile/school/school.html">Mas información</a></div></div>
        `
        });
        
    } 


    else {
        resultados.innerHTML= `<p>No se encontró la universidad</p>`
    }
})

