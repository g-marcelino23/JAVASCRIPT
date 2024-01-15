
const btnModificar = document.getElementById('btnModificar');
const listaItens = document.querySelectorAll('ul li');


btnModificar.addEventListener('click', () => {
 listaItens.forEach(item => {
 item.textContent = 'Você é noob!';
 });
});