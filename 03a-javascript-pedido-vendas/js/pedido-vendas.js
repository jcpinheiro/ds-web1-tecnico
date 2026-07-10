const inputNome = document.querySelector('#nome')
const inputQuantidade = document.querySelector('#quantidade')
const inputValor = document.querySelector('#valor')

const tbody = document.querySelector('#tbodyItemPedido')


document
    .querySelector('#btnCadastro')
    .addEventListener('click', function (event) {
        event.preventDefault();

        let linha = document.createElement('tr')

        let inputs = [inputNome.value,
                      inputQuantidade.value,
                      inputValor.value]

        inputs.forEach(function (input) {
            let td = document.createElement('td')
            td.textContent = input
            linha.appendChild(td)
        })

        let subTotal = parseFloat(inputQuantidade.value) * parseFloat(inputValor.value)
        let tdSubTotal = document.createElement('td')
        tdSubTotal.classList.add('js-subtotal')
        
        tdSubTotal.textContent = subTotal.toFixed(2)

        linha.appendChild(tdSubTotal)
        tbody.appendChild(linha)

     /*    for (let i = 0; i < inputs.length; i++) {
            let td = document.createElement('td')
            td.textContent = inputs[i]
            linha.appendChild(td)
        } */

        console.log(linha)

        calculaTotal()

    })

    function calculaTotal() {
        let total = 0
        let subtotais = document.querySelectorAll('.js-subtotal')
        subtotais.forEach(function (subTotal) {
            total += parseFloat(subTotal.textContent)
        })
        document.querySelector('.js-total').textContent = total.toFixed(2)
    }   