let heroi = ["Ailton"]
let xpatual = 9000
let classificação = ""

console.log("Olá " + heroi)

if (xpatual < 1000) {
    console.log("Seu nível é Ferro")
} else if (xpatual >= 1000 && xpatual <= 2000) {
    classificação = "Ferro"
    console.log("Seu nível é Bronze")
} else if (xpatual >= 2001 && xpatual <= 5000) {
    classificação = "Prata"
    console.log("Seu nível é Prata")          
} else if (xpatual >= 5001 && xpatual <= 6000) {
    classificação = "Ouro"
    console.log("Seu nível é Ouro")            
} else if (xpatual >= 6001 && xpatual <= 8000) {
    classificação = "Platina"
    console.log("Seu nível é Platina")
} else if (xpatual >= 8001 && xpatual <= 9000) {
    classificação = "Ascendente"
    console.log("Seu nível é Ascendente")
} else if (xpatual >= 9001 && xpatual <= 10000) {
    classificação = "Imortal"
    console.log("Seu nível é Imortal")
} else if (xpatual >= 10001) {
    classificação = "Radiante"
    console.log("Seu nível é Radiante")
}
console.log("O Heroi de nome"+ heroi + "está no nivel" + classificação)
