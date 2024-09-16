
function generarRFC() {
    let nombre = document.getElementById('nombre').value;
    let apellidoPat = document.getElementById('apellido-pat').value;
    let apellidoMat = document.getElementById('apellido-mat').value;
    let fechaNacimiento = document.getElementById('fecha-nac').value;

    // se obtiene las primeras letras de los nombres y apellidos
    let rfc = apellidoPat.substring(0, 2) + apellidoMat.substring(0, 1) + nombre.substring(0, 1);

    //  la fecha de nacimiento
    let fecha = fechaNacimiento.split('-');
    rfc += fecha[0].substring(2, 4) + fecha[1] + fecha[2];

    // Muestra el RFC generado
    document.getElementById('rfc').innerText = rfc.toUpperCase(); 
}


document.getElementById('btn-Generar').addEventListener('click', generarRFC);
