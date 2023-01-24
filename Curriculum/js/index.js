


function mostrarInformacionPersonal(){
    var informacion_Personal = document.getElementById("mostrar_informacion_personal");
    if (informacion_Personal.style.display === "none") {
        informacion_Personal.style.display = "block";
    } else {
        informacion_Personal.style.display = "none";
    }
}

function mostrarExperiencia(){
    var experiencia = document.getElementById("mostrar_experiencia");
    if (experiencia.style.display === "none") {
        experiencia.style.display = "block";
    } else {
        experiencia.style.display = "none";
    }
}

function mostrarHabilidades(){
    var habilidades = document.getElementById("mostrar_habilidades");
    if (habilidades.style.display === "none") {
        habilidades.style.display = "block";
    } else {
        habilidades.style.display = "none";
    }
}

function mostrarContacto(){
    document.getElementById('mostrar').style.display = 'block';
    }
function ocultarContacto(){
    document.getElementById('mostrar').style.display = 'none';
}