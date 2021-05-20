const form = document.querySelector('form')

const inputPeso = document.querySelector('#peso')
const inputAltura = document.querySelector('#altura')

const alerta = document.querySelector('.alert')
const containerIMC = document.querySelector('.alert strong')

form.addEventListener('submit', (evento) => {
  evento.preventDefault()

  const peso = parseInt(inputPeso.value)
  const altura = parseInt(inputAltura.value) / 100

  const imc = peso / (altura * altura)
  alerta.classList.remove('d-none')
  containerIMC.textContent = imc

})