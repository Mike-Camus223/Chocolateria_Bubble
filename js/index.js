
// filtro selecciones //

document.addEventListener("DOMContentLoaded", function () {

    const botonDesplegable = document.getElementById("boton-desplegable");
    const checkboxes = document.querySelectorAll(".uk-checkbox");

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", actualizarTextoBoton);
    });


    function actualizarTextoBoton() {
        const checkboxesSeleccionados = document.querySelectorAll(".uk-checkbox:checked");

        if (checkboxesSeleccionados.length === 0) {
            botonDesplegable.textContent = "Seleccionar Categorías";
        } else if (checkboxesSeleccionados.length === 1) {
            botonDesplegable.textContent = checkboxesSeleccionados[0].nextElementSibling.textContent;
        } else {
            botonDesplegable.textContent = checkboxesSeleccionados.length + " Selecciones";
        }
    }
});