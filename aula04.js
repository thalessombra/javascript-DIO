class Pessoa {
    nome;
    idade;

constructor(nome,idade) {

    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2022 - idade;

}
    descrever() {
        console.log(`meu nome é ${this.nome} e a idade é ${this.idade} anos `);
    }
}

const felipe = new Pessoa('Felipe', 25);
const renato = new Pessoa('Renato', 29)

console.log(vitor)
console.log(renan)



////////////////////////////

function compararPessoas(p1,p2) {
    if(p1.idade > p2.idade) {
        console.log (`${p1.nome} é mais velho que ${p2.nome}`);
       
    }
 else if (p2.idade > p1.idade) {
    console.log (`${p2.nome} é mais velho que ${p1.nome}]`);
 }else {
    console.log(" os 2 tem a mesma idade")
 }        
}


const vitor = new Pessoa('Vitor', 35);
const renan = new Pessoa('Renan', 29)
compararPessoas(vitor, renan);
///////////////////////////////////////////
class Carro {
    marca;
    cor;
    gastoPorKm;

    constructor(marca,cor, gastoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKm = gastoPorKm;
    }
         
    calcularGastoEmKm (distancia,precoCombustivel) {
       return distancia  * this.gastoPorKm * precoCombustivel;
     
    }
}

const uno = new Carro('fiat', 'vermelho', 1/10);
console.log(uno.calcularGastoEmKm(70, 5));

const palio = new Carro('Fiat','Verde', 1/9);
console.log(palio.calcularGastoEmKm(85, 6));
///////////////////////////

class Pessoa  {
    nome;
    peso;
    altura;
    constructor(nome,peso,altura) {

        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calcularImc(peso, altura) {
     return this.peso / (this.altura * this.altura);

    }

   
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log( 'O IMC de josé é ' + jose.calcularImc());

const victor = new Pessoa('Victor',80, 1.90);
console.log(" O imc de Victor é " + victor.calcularImc());