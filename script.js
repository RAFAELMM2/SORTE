const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinButton = document.getElementById('spinButton');
const resultText = document.getElementById('result');
const chanceText = document.getElementById('chance');

const texts = ['LUCK', 'FORTUNA', 'SORTE', 'AZAR', 'GANHO', 'PERDA'];
const susLetters = ['S', 'U', 'S'];

// Chance de "SUS" (1 em 12 rolls)
const chanceOfWinning = 12;
let rolls = 0;  // Contador de tentativas

// Função para gerar um número aleatório entre min e max
function getRandomRolls(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para escolher aleatoriamente entre texto normal ou letra "SUS"
function getRandomSlotContent() {
    if (Math.random() < 0.3) { // 30% de chance de cair "SUS"
        return { text: susLetters[Math.floor(Math.random() * susLetters.length)], color: 'red' };
    } else { // 70% de chance de cair um texto normal
        return { text: texts[Math.floor(Math.random() * texts.length)], color: '#ddd' };
    }
}

// Função para rodar os slots
function spinSlots() {
    rolls++;  // Incrementa o número de tentativas

    // Atualiza a porcentagem de chance
    const chancePercentage = (1 / chanceOfWinning) * 100;
    chanceText.innerText = `Chance de ganhar: ${chancePercentage}%`;

    // Limpa o resultado
    resultText.innerText = '';

    // Número aleatório de giros (1 a 90)
    const spinCount = getRandomRolls(1, 90);
    
    // Animação dos slots
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

    // Para a rotação após "spinCount" tentativas
    setTimeout(() => {
        clearInterval(spinInterval);

        // Define os resultados finais
        let finalSlot1 = getRandomSlotContent();
        let finalSlot2 = getRandomSlotContent();
        let finalSlot3 = getRandomSlotContent();

        slot1.innerText = finalSlot1.text;
        slot2.innerText = finalSlot2.text;
        slot3.innerText = finalSlot3.text;

        slot1.style.color = finalSlot1.color;
        slot2.style.color = finalSlot2.color;
        slot3.style.color = finalSlot3.color;

        // Verifica se todos os slots têm "SUS" na sequência correta
        if (slot1.innerText === 'S' && slot2.innerText === 'U' && slot3.innerText === 'S') {
            resultText.innerText = 'VOCÊ GANHOU!';
            resultText.style.color = 'green';
        } else {
            resultText.innerText = 'TENTE NOVAMENTE!';
            resultText.style.color = '#fff';
        }
    }, spinCount * 50); // Tempo de rotação baseado no número aleatório de giros
}

// Evento para o botão de rodar
spinButton.addEventListener('click', spinSlots);
