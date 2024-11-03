// Selección de los elementos
const openModalActu = document.querySelectorAll('.btnActu');
const openModalElim = document.querySelectorAll('.btnElim');
const modalActu = document.querySelector('.modalActualizar');
const modalElim = document.querySelector('.modalEliminar');
const btnAgregar = document.getElementById('agregar');
const btnAgregarVolver = document.getElementById('agregarVolver');


const closeModalActu = document.querySelector('.modalActu__close');
const closeModalElim = document.querySelectorAll('.modalElim__close');

document.addEventListener('DOMContentLoaded', function () {
    // Iterar sobre cada botón 'Eliminar' y añadir el evento
    openModalElim.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault;
            modalElim.classList.add('modal--show');
        });
    });

    // Cerrar el modal de 'Eliminar'
    closeModalElim.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault;
            modalElim.classList.remove('modal--show');
        });
    });

    btnAgregar.addEventListener('click', (e)=>{
        e.preventDefault;
        window.location.href = './vistaCursosAgregar.html';
    });

});
