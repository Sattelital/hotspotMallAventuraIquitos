const formFreeInternet = document.querySelector('.formFreeInternet');
const interestOptions = document.querySelector('.interestOptions')

const cliente = {}

interestOptions.addEventListener('click', () => {
    const checkboxes = interestOptions.querySelectorAll('input[type="checkbox"]');
    const checkedCheckboxes = interestOptions.querySelectorAll('input[type="checkbox"]:checked');
    if (checkedCheckboxes.length === 3) {
        // Desactivar los checkboxes no seleccionados
        checkboxes.forEach((checkbox) => {
            if (!checkbox.checked) {
                checkbox.disabled = true;
            }
        });
    } else {
        // Volver a activar todas las opciones
        checkboxes.forEach((checkbox) => {
            checkbox.disabled = false;
        });
    }
    cliente.interest = Array.from(checkedCheckboxes).map((checkbox) => checkbox.value);
    console.log('datos: ', cliente.interest);
});
formFreeInternet.addEventListener('submit', (e) => {
    e.preventDefault()
    const dist = document.getElementById('dist').value;
    const prov = document.getElementById('prov').value;
    const dept = document.getElementById('dept').value;

    const datosFormulario = new FormData(formFreeInternet)
    const datosCliente = {
        name: datosFormulario.get('nombreApellido'),
        dni: datosFormulario.get('dni'),
        phone: datosFormulario.get('phone'),
        email: datosFormulario.get('email'),
        address: datosFormulario.get('inaddress'),
        region: dept,
        state: prov,
        district: dist,
        interest: cliente.interest,
        authorization: datosFormulario.get('chkTerminos') === 'true',
    }
    // const options = {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(datosCliente),
    // };

    // fetch('http://18.228.213.201:3000/api/customers', options)
    //     .then(function (response) {
    //         console.log('successfully');
    //     })
    //     .catch(function (error) {
    //         console.error('Error:', error);
    //     });

    document.body.style.overflow = 'hidden'
    console.log(datosCliente);
    const urlRedirect = `${document.querySelector('.ingresarFree').getAttribute('url')}&data=${JSON.stringify(datosCliente)}`
    // location.href = urlRedirect
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
