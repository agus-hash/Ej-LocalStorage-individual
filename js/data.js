// Obtener el dato guardado en localStorage
const storedText = localStorage.getItem('storedText');

// Mostrar el dato en el span con id 'data'
const dataElement = document.getElementById('data');
dataElement.textContent = storedText ? storedText : 'No hay datos guardados.';
