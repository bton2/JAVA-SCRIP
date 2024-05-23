function contar() {
    var inicio = Number(document.getElementById('txtinicio').value)
    var fim = Number(document.getElementById('txtfim').value)
    var passo = Number(document.getElementById('txtpasso').value)
    var res = document.querySelector('div#res')
    while (inicio <= fim) {
        //Criando o elemento
        const para = document.createElement('p')
        para.textContent = `${inicio}`
        // res.innerHTML = `<p>Contando: ${inicio}</p>`
        res.appendChild(para)
        inicio += passo
    }
    
    // var num_inicio = Number(inicio.value)
    // res.innerHTML = `O valor da variável início é ${inicio + fim + passo}`
}
// alert('Hello')