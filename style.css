// Botões de Cadastro e Login
document.getElementById('registerButton').addEventListener('click', function() {
    window.location.href = 'cadastro.html'; // Redireciona para a página de cadastro
});

document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'login.html'; // Redireciona para a página de login
});

// Slots do jogo
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinButton = document.getElementById('spinButton');
const resultText = document.getElementById('result');
const chanceText = document.getElementById('chance');

// Lista de textos possíveis nos slots
const texts = ['LUCK', 'FORTUNA', 'SORTE', 'AZAR', 'GANHO', 'PERDA'];

// Chance de ganhar (1 em 12 rolls)
const chanceOfWinning = 12;
let rolls = 0;

// Função para gerar um número aleatório dentro de um intervalo
function getRandomRolls(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para escolher um texto aleatório e definir a cor
function getRandomSlotContent() {
    let text = texts[Math.floor(Math.random() * texts.length)];
    let color = text === 'SORTE' ? 'green' : '#ddd';
    return { text, color };
}

// Função para rodar a roleta
function spinSlots() {
    rolls++;

    // Atualiza a porcentagem de chance de ganhar
    const chancePercentage = (1 / chanceOfWinning) * 100;
    chanceText.innerText = `Chance de ganhar: ${chancePercentage.toFixed(2)}%`;

    resultText.innerText = '';

    const spinCount = getRandomRolls(10, 90); // Define quantas vezes a roleta vai girar

    let spinInterval = setInterval(() => {
        let slotContent1 = getRandomSlotContent();
        let slotContent2 = getRandomSlotContent();
        let slotContent3 = getRandomSlotContent();

        slot1.innerText = slotContent1.text;
        slot2.innerText = slotContent2.text;
        slot3.innerText = slotContent3.text;

        slot1.style.color = slotContent1.color;
        slot2.style.color = slotContent2.color;
        slot3.style.color = slotContent3.color;
    }, 100);

    // Define quando a roleta vai parar
    setTimeout(() => {
        clearInterval(spinInterval);

        let finalSlot1 = getRandomSlotContent();
        let finalSlot2 = getRandomSlotContent();
        let finalSlot3 = getRandomSlotContent();

        slot1.innerText = finalSlot1.text;
        slot2.innerText = finalSlot2.text;
        slot3.innerText = finalSlot3.text;

        slot1.style.color = finalSlot1.color;
        slot2.style.color = finalSlot2.color;
        slot3.style.color = finalSlot3.color;

        // Se os 3 slots forem "SORTE", o jogador ganha
        if (slot1.innerText === 'SORTE' && slot2.innerText === 'SORTE' && slot3.innerText === 'SORTE') {
            resultText.innerText = 'VOCÊ GANHOU!';
            resultText.style.color = 'green';
        } else {
            resultText.innerText = 'TENTE NOVAMENTE!';
            resultText.style.color = '#fff';
        }
    }, spinCount * 50);
}

// Adiciona o evento ao botão de rodar a roleta
spinButton.addEventListener('click', spinSlots);
