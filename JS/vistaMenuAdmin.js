const btnCursos = document.querySelector('.btnCursos');

document.addEventListener('DOMContentLoaded', function () {
    btnCursos.addEventListener('click', (e)=>{
        e.preventDefault;
        window.location.href = './vistaCursos.html';
    });

});