let amigo = {nome:'Jose',
sexo: 'M',
peso: 76.5,
engordar(p = 0) {
    console.log('Engordou')
    this.peso += p
}}
// console.log(amigo)
amigo.engordar(2)
console.log(`${amigo.nome} peso ${amigo.peso}kg`)