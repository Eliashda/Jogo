class veiculo{
    constructor(tipo,marca,cor,velocidade,passageiros){
        this.tipo = tipo
        this.marca = marca
        this.cor = cor 
        this.velocidade = velocidade
        this.passageiros = passageiros
    }
    acelerar = function (){
        this.velocidade += 10
        console.log(this.velocidade)
    }
    desacelerar = function(){
       if (this.velocidade > 0){
        this.velocidade -=5
        console.log(this.velocidade)
       } else{
        console.log('ja esta parado')
       }
        
    }
}

const carro = new veiculo(
    'SUV',
    'Audi',
    'prata',
    0,
    1
)
const outro_carro = new Veiculo('sedan,fiat,vermelho')

console.log(carro)
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desacelerar()