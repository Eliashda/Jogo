const canvas = document.getElementById('jogo2d')
// inicializar o canvas
const ctx = canvas.getContext('2d')
let gameover = false


document.addEventListener('keypress', (e) => {
    if (e.code == 'Space' && personagem.pulando == false) {
        console.log('clicou')
        personagem.saltar()
    }
})






document.addEventListener('click', (E) => {
    if (gameover == true) {
        location.reload()
    }
})

class Entidade{
    #gravidade
    constructor (x,y,largura,altura){
        this.x = x
        this.y = y 
        this.largura = largura 
        this.altura = altura 
        this.#gravidade = 0.5
    }
    get gravidade (){
        return this.#gravidade
    }


    desenhar = function (ctx, cor){
        ctx.fillStyle = cor
        ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}

class Personagem extends Entidade{
    #pulando
    #velocidadey

    constructor(x,y,largura,altura){
        super(x,y,altura,largura)
        this.#pulando = false
        this.#velocidadey = 0
    }
    saltar = function (){
        personagem.#velocidadey = 15
        personagem.#pulando = true
        console.log('pulou')
    }
    get pulando () {
        return this.#pulando
    }

    atualizarPersonagem() {
        if (this.#pulando == true) {
            this.#velocidadey -= this.gravidade
            this.y -= this.#velocidadey
            if (this.y >= canvas.height - 50) {
                this.#velocidadey = 0
                this.#pulando = false
                this.y = canvas.height - 50
            }
        }
    }
        
}
const personagem = new Personagem(50,canvas.height - 50,50,50)

class Obstaculo extends Entidade{
    constructor(x,y,largura,altura){
        super(x,y,altura,largura)
    }
    atualizarObstaculo() {
       this.x -=this.velocidadex
        if (obstaculo.x <= 0 -this.largura) {
           this.x = canvas.width
           this.velocidadex += 0.2
            let nova_altura = (Math.random() * 50) + 100
           this.altura = nova_altura
           this.y = canvas.height - nova_altura
        }
    }
    
}





function loop() {
    if (gameover == false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        personagem.desenhar(ctx,'black')
        requestAnimationFrame(loop)
        personagem.atualizarPersonagem()
        obstaculo.atualizarObstaculo()
    }
}
loop()