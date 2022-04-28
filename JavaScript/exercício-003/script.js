function carregar(){
    var mensagem = document.getElementById('mensagem')
    var imagens = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()
    mensagem.innerHTML = `Agora são ${hora}:${minuto}:${segundos}`

    if (minuto < 10){
        minuto = '0' + minuto
    }

    if (hora >= 5 && hora < 12) {
        //bom dia
        imagens.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#89a2e0'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        imagens.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#2c54b8'
    } else if (hora >= 18 && hora < 0){
        //boa noite
        imagens.src = 'imagens/fotonoite.jpg' 
        document.body.style.background = '#080435'
        document.body.style.backgroundColor = '#615ba8'
    } else {
        //boa madrugada
        imagens.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#080435'
    }

}


