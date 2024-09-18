// Obtener referencias al input y al botón
const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');

// Evento para guardar el valor en localStorage al hacer clic en el botón
buttonText.addEventListener('click', () => {
    const text = inputText.value; // Obtiene el valor ingresado
    localStorage.setItem('storedText', text); // Guarda el valor en localStorage
    alert('Dato guardado en localStorage!');
});
