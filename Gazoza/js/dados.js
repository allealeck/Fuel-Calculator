// dom

const distancia = document.querySelector('#distancia')
const rendimento = document.querySelector('#rendimento')
const preco = document.querySelector('#preco')
const btnCalcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

//evento

btnCalcular.addEventListener('click',()=>{
    let dist = distancia.value
    let rend = rendimento.value
    let vPreco = preco.value

    let valorFinal = (dist/rend)*vPreco
    resultado.value = "R$ "+valorFinal.toFixed(2)
})

const switchModal = () => {
    const modal = document.querySelector('.modal')
    const actualStyle = modal.style.display
    if(actualStyle == 'block') {
      modal.style.display = 'none'
    }
    else {
      modal.style.display = 'block'
    }
  }
  
  const btn = document.querySelector('#calcular')
  btn.addEventListener('click', switchModal)
  
  window.onclick = function(event) {
      const modal = document.querySelector('.modal')
    if (event.target == modal) {
      switchModal()
    }
  }

