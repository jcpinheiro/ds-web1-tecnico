const nome = document.getElementById('nome')
const quantidade = document.querySelector('#quantidade')
const valor = document.querySelector('#valor')

const tbody = document.querySelector('#tbodyItemPedido')

document
  .querySelector('#btnCadastro')
  .addEventListener('click', function (event) {
    event.preventDefault()

    let subTotal = quantidade.value * valor.value

    let linha = `
      <tr>
        <td>${nome.value}</td>
        <td>${quantidade.value}</td>
        <td>${valor.value}</td>
        <td class="subtotaljs">${subTotal}</td>
      </tr>
    `

    tbody.insertAdjacentHTML('beforeend', linha)
  })


  /* console.log('Pedido de Vendas')

const nome =  document.getElementById('nome')
const quantidade =  document.querySelector('#quantidade')
const valor =  document.querySelector('#valor')

const tbody = document.querySelector('#tbodyItemPedido')


document
  .querySelector('#btnCadastro')
  .addEventListener('click', function(event){
     event.preventDefault() 

     let tr = document.createElement('tr')

     let campos = [nome.value, quantidade.value, valor.value]

    campos.forEach(function(campo) {
        let celula = document.createElement('td')
        celula.textContent = campo
        tr.appendChild(celula)
    })

    let subTotal = campos[1] * campos[2]
    let celulaSubTotal = document.createElement('td') 
    celulaSubTotal.textContent = subTotal   
    tr.appendChild(celulaSubTotal)

    tbody.appendChild(tr)

    console.log(tr)
    
  }) */