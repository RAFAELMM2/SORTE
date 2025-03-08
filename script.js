const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinButton = document.getElementById('spinButton');
const resultText = document.getElementById('result');
const chanceText = document.getElementById('chance');

const susLetters = ['S', 'U', 'S'];

// Chance de "SUS" (1 em 12 rolls)
const chanceOfWinning = 12;
let rolls = 0;  // Contador de tentativas

// Função para gerar um número aleatório entre min e max
function getRandomRolls(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
        slot1.innerText = susLetters[Math.floor(Math.random() * susLetters.length)];
        slot2.innerText = susLetters[Math.floor(Math.random() * susLetters.length)];
        slot3.innerText = susLetters[Math.floor(Math.random() * susLetters.length)];

        slot1.style.color = 'red';
        slot2.style.color = 'red';
        slot3.style.color = 'red';
    }, 100);

    // Para a rotação após "spinCount" tentativas
    setTimeout(() => {
        clearInterval(spinInterval);

        // Define os resultados finais
        slot1.innerText = susLetters[Math.floor(Math.random() * susLetters.length)];
        slot2.innerText = susLetters[Math.floor(Math.random() * susLetters.length)];
        slot3.innerText = susLetters[Math.floor(Math.random() * susLetters.length)];

        slot1.style.color = 'red';
        slot2.style.color = 'red';
        slot3.style.color = 'red';

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
