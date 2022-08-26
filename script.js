const modal = document.querySelector('.js-modal')
const regiBtn = document.querySelector('.js-regi')
function showRegisterForm(){
    modal.classList.add('open')
}
regiBtn.addEventListener('click', showRegisterForm)
