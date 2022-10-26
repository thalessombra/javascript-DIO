function sayMyname(name) {
    console.log('seu nome é  ' + name)
}

sayMyname("Felipe");

function maiorDeIdade (idade) {
    if (idade >= 18) {
        console.log("voce é maior de idade ");
    }
    else {
        console.log("voce é menor de idade ");
    }
}
maiorDeIdade(19);


function aplicarDesconto(valor,desconto){

 
 return (valor -(valor * (desconto / 100)));

}

function aplicarJuros (valor,desconto) {
    return (valor + (valor * (desconto / 100)));
}


const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta,10));
}

else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta,15));
}
 else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
 }
 else {
    console.log(aplicarJuros(precoEtiqueta,10));
 }