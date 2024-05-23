function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('div#res')
    // Verificar se todos os campos estão preenchidos
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')   
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
        }
        if (i < f) { 
            // Contagem crescente
            for (let c = i; c <= f; c +=p){
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        }else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`  
    }
}

//https://unicode.org/emoji/charts/full-emoji-list.html
// Código no site : U+1F618	
// Código no JavaScript
// \u{1F618}	

