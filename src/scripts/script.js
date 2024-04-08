document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault()

        let numeroMaximo = document.getElementById('numero-maximo').value
        numeroMaximo = parseInt(numeroMaximo)

        let numeroAleatorio = Math.random() * numeroMaximo + 1
        numeroAleatorio = Math.floor(numeroAleatorio)

        document.getElementById('resultado').innerText = numeroAleatorio
        document.querySelector('.resultado').style.display = 'block'
    })
})