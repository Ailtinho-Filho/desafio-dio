let heroi = ["Ailton"]
let xpatual = 200

console.log("Olá " + heroi)

if (xpatual < 1000) {
    console.log("Seu nível é Ferro")
} else if (xpatual >= 1001 && xpatual <= 2000) {
    console.log("Seu nível é Bronze")
} else if (xpatual >= 2001 && xpatual <= 5000) {
    console.log("Seu nível é Prata-Ouro")
} else if (xpatual >= 5001 && xpatual <= 8000) {
    console.log("Seu nível é Platina-Diamante")
} else if (xpatual >= 8001 && xpatual <= 9000) {
    console.log("Seu nível é Ascendente")
} else if (xpatual >= 9001 && xpatual <= 10000) {
    console.log("Seu nível é Imortal")
} else if (xpatual >= 10001) {
    console.log("Seu nível é Radiante")
}
