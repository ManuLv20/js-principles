//Função afim

let a = 2
let x = 3
let b = 4
let c = 5

let fx = a*x + b
console.log(`Seu resultado é ${fx}`)

//Função quadrática
//f(x) = ax^2+ bx + c, sendo a != 0

if (a!=0){
 fx = a*x**2 + b*x +c
  console.log(`Seu resultado é ${fx}`)
}

//Raízes da função quadrática


let raiz = b**2 - 4 * a*c

let X1 = (-b + Math.sqrt(raiz))/ 2*a
let X2 =  (-b - Math.sqrt(raiz))/ 2*a
console.log(`Seu resultado é X1:${X1} e X2:${X2}, raiz:${raiz}`)
