const buttonFreeInternet = document.querySelector('#freeInternet');
const buttonBack = document.querySelector('#back');
const freeInternetContainer = document.querySelector('.freeInternetContainer');
const loginContainer = document.querySelector('.loginContainer');
const formFreeInternet = document.querySelector('.formFreeInternet');
formFreeInternet.addEventListener('submit', (e) => {
    e.preventDefault()
    // const dist = document.getElementById('dist');
    // const prov = document.getElementById('prov');
    // const dept = document.getElementById('dept');

    const datosFormulario = new FormData(formFreeInternet)
    const datosCliente = {
        name: datosFormulario.get('nombreApellido'),
        dni: datosFormulario.get('dni'),
        phone: datosFormulario.get('phone'),
        email: datosFormulario.get('email'),
        address: 'Mall Aventura - Iquitos',
        region: 'Loreto',
        state: 'Maynas',
        district: 'Iquitos',
        authorization: datosFormulario.get('chkDatos') === 'true'
    }

    document.body.style.overflow = 'hidden'
    const urlRedirect = `${document.querySelector('.ingresarFree').getAttribute('url')}&data=${JSON.stringify(datosCliente)}`
    location.href = urlRedirect
})

const buttonShowModal = document.querySelector('#showModal');
const modal = document.querySelector('.termModal')
const buttonCloseModal = document.querySelector('#closeModal')

buttonShowModal.addEventListener('click', () => {
    modal.classList.toggle('inv')
})
buttonCloseModal.addEventListener('click', () => {
    modal.classList.toggle('inv')
})
