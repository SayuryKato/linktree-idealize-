// const mode = document.getElementById('modoDark');
// const botao = document.querySelectorAll('.fundo_botao');
// const iconeInstagram = document.querySelector('.bi bi-instagram');

// mode.addEventListener('click', () => {
//     const body = document.body;
//     body.classList.toggle('modo-noturno');
//     botao.forEach(element => {
//         element.classList.toggle('degrade'); 
//     });
//     iconeInstagram.classList.toggle('fundo_botao');
// });

function cli_darkMode(){
    const mode = document.getElementById('modoDark');
    const botao = document.querySelectorAll('.fundo_botao');
    const iconeInstagram = document.querySelector('.bi bi-instagram');
    const body = document.body;
    body.classList.toggle('modo-noturno');
    botao.forEach(element => {
        element.classList.toggle('degrade'); 
    });
    iconeInstagram.classList.toggle('fundo_botao');
}
