function consultarAPI() {
    fetch("https://jsonplaceholder.typicode.com/users/7")
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta de la API:', data);
            document.getElementById('nombreAPI').value = data.name || 'Nombre no disponible';
            document.getElementById('email').value = data.email || 'Email no disponible';
        })
        .catch(error => console.error('Error en la solicitud:', error));
}
