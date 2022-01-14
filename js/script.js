const PLUS = document.querySelector('#plus-icon');
const MINUS = document.querySelector('#minus-icon');
const MAIN = document.querySelector('main');
PLUS.addEventListener('click', plus);
function plus() {
    MAIN.style.display = 'grid'
}
MINUS.addEventListener('click', minus);
function minus() {
    MAIN.style.display = 'none';
}