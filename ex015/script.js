function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    // var res = document.getElementById('res') ou o código a linha abaixo, teremos o mesmo resultado
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}`
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            sexo = 'Homem'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', './imagem/foto-menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagem/foto-jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagem/foto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', './imagem/foto-idoso.png')
            }

        } else if (fsex[1].checked) {
            sexo = 'Mulher'
            if (idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', './imagem/foto-menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './imagem/foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './imagem/foto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', './imagem/foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}