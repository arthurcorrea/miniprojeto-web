const calcular = () => {
    const resultado = document.querySelector('#resultado')

    const a = Number(document.getElementById('a').value)
    const b = Number(document.getElementById('b').value)
    const c = Number(document.getElementById('c').value)

    const delta = (b ** 2) - (4 * a * c)

    if(delta < 0) {
        alert('Delta negativo. Impossível calcular.')
    } else if(a == 0 || b == 0 || c == 0) {
        alert('Campo(s) vazio(s). Favor preencher corretamente.')
    } else {

        document.getElementById('aTitulo').innerHTML = a
        document.getElementById('bTitulo').innerHTML = b
        document.getElementById('cTitulo').innerHTML = c

        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)

        let result = `x = (-b &plusmn &radic;b² - 4ac) / (2a) <br> <br>
        x = (-${b} &plusmn &radic;${b}² - 4x${a}x${c}) / (2x${a}) <br> <br>
        x = (-${b} &plusmn &radic;${delta}) / ${2 * a} <br> <br>
        x¹ = (-${b} + ${Math.sqrt(delta).toFixed(2)}) / 2 = ${x1.toFixed(2)} <br> <br>
        x² = (-${b} - ${Math.sqrt(delta).toFixed(2)}) / 2 = ${x2.toFixed(2)} <br> <br> 
        <strong>S = {${x1.toFixed(2)}, ${x2.toFixed(2)}}</strong>`

        resultado.innerHTML = result
        
        
    }

    
}