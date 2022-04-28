function verificar(){

    var peso = Number(document.querySelector('input#peso1').value)
    var idade = Number(document.querySelector('input#idade1').value)
    var altura = Number(document.querySelector('input#altura1').value)

    var result = document.querySelector('div#resultado1')

    var sexo = document.querySelectorAll("input[type='radio']")
    
    if (peso == '' || idade == '' || altura == ''){
        result.innerHTML = 'Favor preencher todos os campos corretamente.'
    } else {
         
        if (sexo[0].checked) {
            var taxa = 66 + (13.8 * peso) + (5 * altura) - (6.8 * idade)

            result.innerHTML = `Sua taxa metabólica basal é de ${taxa.toFixed(2)}kcal`

        } else{
            var taxa = 655 + (9.6 * peso) + (1.9 * altura) - (4.7 * idade)

            result.innerHTML = `Sua taxa metabólica basal é de ${taxa.toFixed(2)}kcal`

        }
    }   

}

function verificar02(){

    var peso2 = Number(document.querySelector('input#p2').value)
    var altura2 = Number(document.querySelector('input#alt2').value)

    result2 = document.querySelector('div#resultado2')
    result3 = document.querySelector('div#resultado3')

    var calculo = peso2 / ((altura2/100) * (altura2/100))

    if (peso2 == '' || altura2 == ''){
        result3.innerHTML = 'Favor preencher todos os campos.'
    } else {
        result2.innerHTML = `Seu IMC é de ${calculo.toFixed(1)}`

        if (calculo < 18.5) {
            result3.innerHTML = 'Você está abaixo do peso.'
        } else {
            if (calculo > 18.5 && calculo < 24.9) {
                result3.innerHTML = 'Você está no peso normal.'
        }   else  {
                result3.innerHTML = 'Você está acima do peso.'
            }
        }
    }
}
