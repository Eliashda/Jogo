// pegar o elemento canvas pelo id
const canvas = document.getElementById('jogo2d')
// inicializar o canvas
const ctx = canvas.getContext('2d')
const gravidade = 0.5
let gameover = false;  // Definindo a variável gameover

document.addEventListener('keypress', (e) => {
    if (e.code == 'Space' && personagem.pulando == false) {
        console.log('clicou')
        personagem.velocidadey = 15
        personagem.pulando = true
    }
})

document.addEventListener('click', (E) => {
    if (gameover == true) {
        location.reload()
    }
})

const personagem = {
    x: 50,
    y: canvas.height - 50,
    altura: 50,
    largura: 50,
    velocidadey: 0,
    pulando: false,
    imagem: new Image()  // Corrigido a inicialização da imagem
}
personagem.imagem.src = './static/godzilla.png'  // Corrigido o caminho da imagem

function desenharPersonagem() {
    ctx.drawImage(personagem.imagem, personagem.x, personagem.y, personagem.largura, personagem.altura)  // Corrigido o erro de digitação 'drawImagem'
}

function atualizarPersonagem() {
    if (personagem.pulando == true) {
        personagem.velocidadey -= gravidade
        personagem.y -= personagem.velocidadey
        if (personagem.y >= canvas.height - 50) {
            personagem.velocidadey = 0
            personagem.pulando = false
            personagem.y = canvas.height - 50
        }
    }
}

const obstaculo = {
    x: canvas.width - 50,
    y: canvas.height - 100,
    largura: 50,
    altura: 100,
    velocidadex: 10,
}

function desenharObstaculo() {
    ctx.fillStyle = 'black'
    ctx.fillRect(obstaculo.x, obstaculo.y, obstaculo.largura, obstaculo.altura)
}

function atualizarObstaculo() {
    obstaculo.x -= obstaculo.velocidadex
    if (obstaculo.x <= 0 - obstaculo.largura) {
        obstaculo.x = canvas.width
        obstaculo.velocidadex += 0.2
        let nova_altura = (Math.random() * 50) + 100
        obstaculo.altura = nova_altura
        obstaculo.y = canvas.height - nova_altura
    }
}

function HouveColisao() {
    personagem.velocidadey = 0
    obstaculo.velocidadex = 0
    ctx.fillStyle = 'red'
    ctx.fillRect((canvas.width / 2) - 200, (canvas.height / 2) - 50, 400, 100)
    ctx.fillStyle = 'black'
    ctx.font = '50px Arial'
    ctx.fillText("GAME OVER", (canvas.width / 20)+250 , (canvas.height / 20)+200, 200, 600)
    gameover = true
}

function verificaColisao() {
    if (personagem.x < obstaculo.x + obstaculo.largura &&
        personagem.x + personagem.largura > obstaculo.x &&
        personagem.y < obstaculo.y + obstaculo.altura &&
        personagem.y + personagem.altura > obstaculo.y
    ) {
        HouveColisao()
    }
}

// função que seja executada 60hz loop
function loop() {
    if (!gameover) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // desenhar novamente
        desenharPersonagem()
        // atualizar posições
        atualizarPersonagem()
        // chamar o loop novamente
        desenharObstaculo()
        verificaColisao()
        atualizarObstaculo()

        requestAnimationFrame(loop)
    }
}
loop()
