const btnAgregarVolver = document.getElementById('agregarVolver');

document.addEventListener('DOMContentLoaded', function () {
    btnAgregarVolver.addEventListener('click', (e)=>{
        e.preventDefault;
        window.location.href = './vistaCursos.html';
    });

});
