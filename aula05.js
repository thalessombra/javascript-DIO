const notas = [];

notas.push(5);
notas.push(6);
notas.push(8);
notas.push(2);
notas.push(3);

let soma = 0

for(let i = 0; i < notas.length; i++) {
    const nota = notas[i]
    soma = soma + nota
}
 const media = soma / notas.length;
 console.log(media);
/////////////////////////////


/*const numero = 7
for (let i = 0; i <= 10; i++) {
    console.log(i * numero);
   
} */


 const parOuimpar = [0,1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < parOuimpar.length; i++) {
   const numero = parOuimpar[i];

   if(numero % 2 === 0) {
    console.log(numero);
}
else {
    console.log("impar")
}
}
