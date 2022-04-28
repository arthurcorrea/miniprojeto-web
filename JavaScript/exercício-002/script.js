var valores = []
var resultado = document.querySelector('div#resultado')
var num = document.querySelector('input#numeros')

var valoresdatabela = document.querySelector('select#valores')

function adicionar(){

    var numeros = Number(document.getElementById('numeros').value)

    if (numeros === 0 || numeros < 0 || numeros > 100 || numeros == valores.indexOf(numeros)){
        alert('Por favor, digite corretamente.')
    } else {
        var tabela = document.getElementById('valores')

        valores.push(numeros)
        
        var item = document.createElement('option')
        item.text = `Número ${numeros} adicionado.`
        tabela.appendChild(item)
        resultado.innerHTML = ''
    }
    num.value = ''
    num.focus()

}

function analisar(){
    
    //var n1 = Number(document.getElementById('numeros').value)

    //if (valores.length === 0){
        //alert('Por favor, digite corretamente.')
    //} else {
        var soma = 0       
    
        for (let i = 0; i < valores.length; i++){
            soma += valores[i]
        }
    
        //var max = Math.max(...valores) 
        //var min = Math.min(...valores)

        // de ambas as maneiras funciona

        var Maior = valores[0]
        var Menor = valores[0] 
        for (let pos in valores){
            if(valores[pos] > Maior)  
                Maior = valores[pos]
            if (valores[pos] < Menor)
                Menor = valores[pos]
        }

        var media = soma / valores.length
    
        resultado.innerHTML = `Número de valores digitados: ${valores.length} <br>`
        resultado.innerHTML += `Maior valor digitado: ${Maior} <br>`
        resultado.innerHTML += `Menor valor digitado: ${Menor} <br>`
        resultado.innerHTML += `Soma dos valores digitados: ${soma} <br>`
        resultado.innerHTML += `Média dos valores digitados: ${media.toFixed(2)}`
    //}

}

function limpar(){
    resultado.innerHTML = ''
    valores = []
    valoresdatabela.innerHTML = ''
    
}