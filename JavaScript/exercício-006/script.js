function calcular(){

    var numero = Number(document.getElementById('numero').value)
    var tabuada = document.getElementById('tabuada')

    if (numero === 0) {
        alert('[ERRO] Digite o valor corretamente.')
    } else {

        tabuada.innerHTML = ''
        
        for (let contador = 1; contador <= 10; contador++) {
            
            var item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            //item.value = `tabuada${contador}`
            tabuada.appendChild(item)
        } 
    }
}

function limpar(){
    tabuada.innerHTML = '<option>Digite um número acima</option>'
    numero.innerHTML = ''
    numero.focus()
    
}
