class veiculo{
#velocidade
    constructor(tipo,marca,cor,velocidade,passageiros){
        this.tipo = tipo
        this.marca = marca
        this.cor = cor 
        this.#velocidade = velocidade
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
class aviao extends veiculo{
    #mach
    constructor(tipo,marca,cor,velocidade,passageiros,companhia){
        super(tipo,marca,cor,velocidade,passageiros);
        this.companhia = companhia;
        this.#mach = 10
    }
    acelerar = function (){
        this.#mach += 10
        console.log(this.#mach)
    }
    desacelerar = function(){
        if (this.#mach > 0){
         this.#mach -= 0.1
         console.log(this.#mach)
        } else{
         console.log('ja esta parado')
        }
         
     }
}

class barco extends veiculo{
    #nos
    constructor(tipo,marca,cor,velocidade,passageiros,marina){
        super(tipo,marca,cor,velocidade,passageiros);
        this.marina = marina;
        this.#nos = 0
    }
    acelerar = function (){
        this.#nos += 10
        console.log(this.#nos)
    }
    desacelerar = function(){
        if (this.#nos > 0){
         this.#nos -= 0.5
         console.log(this.#nos)
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
const outro_carro = new veiculo('sedan,fiat,vermelho')

console.log(carro)
carro.acelerar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desacelerar()
const aviaoo = new aviao ('comercial', 'boeing', 'branco', 0, 0, 'AirFrance')
console.log(aviaoo)
aviaoo.acelerar()
aviaoo.desacelerar()
const barcoo = new barco ('cargueiro','marinha','camuflado',0,0, 'itajai')
console.log(barcoo)
barcoo.acelerar()
barcoo.desacelerar()

aviaoo.acelerar()
aviaoo.setVelocidade(50)
console.log(aviaoo.getVelocidade())

