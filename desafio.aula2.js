var nota1 = 9

var nota2 = 7.4

var nota3 =7.3

 const media = (nota1 + nota2 + nota3) / 3
 //console.log(media)

 if(media > 7) {
   // console.log("aprovado")
 }

 else if (media >= 5 && media <= 7 ) {
    //console.log("recuperação")
 }

 else {
    //console.log("reprovado")
 }

////////////////////////////////////////////////////////////////////////////////////////////


const valorPoduto = 100

 var formaDePagamento = 4

const debito = valorPoduto - ( valorPoduto * 0.1 )  
const pix = valorPoduto - ( valorPoduto  * 0.15) 
const parceladoNoCartao = valorPoduto
const parceladoNoCartao2Vezes = valorPoduto + (valorPoduto * 0.1)

if (formaDePagamento ===1) {
    console.log(debito)
}
else if (formaDePagamento === 2) {
    console.log(pix)
}
else if(formaDePagamento ===3) {
    console.log(parceladoNoCartao)
}

else {
    console.log(parceladoNoCartao2Vezes)
}
