var agora = new Date()
var diaSem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    3 = Terça
    4 = Quarta
    5 = Sexta
    6 = Sábado

*/
switch(diaSem) {
    case 0:
        console.log('Sunday')
        break
    case 1:
        console.log('Monday')
        break
    case 2:
        console.log('Tuesday')
        break
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
            break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log('[Fail] Invalue day!')
        break
}
