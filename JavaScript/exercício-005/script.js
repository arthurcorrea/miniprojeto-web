function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    var resultado = document.querySelector('#resultado')
    //var contando = document.querySelector('#contando')

    if (inicio.length == 0 || fim.length == 0){
        resultado.innerHTML = 'Impossível contar. Favor preencher todos os campos.'
    } else{
        resultado.innerHTML = 'Contando: <br>'
    
        if (passo <= 0){
            alert('Passo inválido. Passo valerá 1')
            passo = 1
        }

        if (inicio < fim){
            //Contagem crescente
            for (var numero = inicio; numero <= fim; numero += passo){
                resultado.innerHTML += ` ${numero} -` //formatação para emojis
            }
            
    }   else {
            // Contagem decrescente
            for (var numero = inicio; numero >= fim; numero -= passo){
                resultado.innerHTML += ` ${numero} - ` 
            }
        }
    resultado.innerHTML += `> \u{1F3C1}`
    
    }

}