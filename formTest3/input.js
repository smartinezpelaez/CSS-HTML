document.getElementById('cursos-select').addEventListener('change', function () {
    const input = document.getElementById('cursos-input');
    input.value = this.value; // Copia el valor seleccionado al input
});


document.querySelector('input[list="cursos-select"]').addEventListener('input', function () {
    const input = document.getElementById('cursos-input');
    input.value = this.value; // Copia el valor seleccionado al input
});
