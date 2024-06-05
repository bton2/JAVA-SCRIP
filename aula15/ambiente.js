let num = [7, 3, 8]

console.log(`Nosso vetor é ${num}`)

num [3] = 10
console.log(num)

num.push(4)
console.log(num)

num.sort()
console.log(`Meu vetor ordenado ${num}`)

console.log(`Meu vetor tem ${num.length} elementos`)

let pos = num.indexOf(8)


if (pos == -1) {
    console.log(`Valor não foi encontrado!`)
} else { 
    console.log(`O valor 8 está na posição ${pos}`)

}