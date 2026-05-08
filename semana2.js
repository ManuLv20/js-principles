//Aula semana 2

const adicionar = (lista, fruta) => {
    lista.push(fruta)
    return lista
}

let frutas = ["Uva", "Pitaya"]
frutas = adicionar(frutas, "Abacaxi")


console.log(frutas)

const remove = (list, frutar) => {
    list.shift()
    return list
}
let frut = ["Maçã", "Pera", "Melancia"]
let u = frut[0]
frut[0] = frut[2]
frut[2] = u
frut = remove(frut)
console.log(frut)