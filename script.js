const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinButton = document.getElementById('spinButton');
const resultText = document.getElementById('result');

const texts = ['LUCK', 'FORTUNA', 'SORTE', 'AZAR', 'GANHO', 'PERDA'];

// Função para gerar texto aleatório
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

// Função para aplicar o efeito de rotação nas fileiras
function rotateSlots() {
    // Gera um número aleatório de rotações (de 3 a 5)
    const rotations = Math.floor(Math.random() * 3) + 3;
    const duration = rotations * 0.5; // Cada rotação leva 0.5 segundos

    // Aplica o efeito de rotação
    slot1.style.transition = `transform ${duration}s ease-out`;
    slot2.style.transition = `transform ${duration}s ease-out`;
    slot3.style.transition = `transform ${duration}s ease-out`;

    slot1.style.transform = `rotate(${360 * rotations}deg)`;
    slot2.style.transform = `rotate(${360 * rotations}deg)`;
    slot3.style.transform = `rotate(${360 * rotations}deg)`;

    // Após o efeito de rotação, atribui o texto aleatório a cada slot
    setTimeout(() => {
        slot1.innerText = getRandomText();
        slot2.innerText = getRandomText();
        slot3.innerText = getRandomText();

        // Verifica se todos os slots têm "SORTE"
        if (slot1.innerText === 'SORTE' && slot2.innerText === 'SORTE' && slot3.innerText === 'SORTE') {
            slot1.style.color = 'green';
            slot2.style.color = 'green';
            slot3.style.color = 'green';
            resultText.innerText = 'VOCÊ GANHOU!';
            resultText.style.color = 'green';
        } else {
            // Se não for "SORTE", restaura a cor original
            slot1.style.color = '#ddd';
            slot2.style.color = '#ddd';
            slot3.style.color = '#ddd';
            resultText.innerText = 'TENTE NOVAMENTE!';
            resultText.style.color = '#fff';
        }
    }, duration * 1000); // Espera o tempo de rotação para mudar os textos
}

// Função para rodar os slots
function spinSlots() {
    resultText.innerText = ''; // Limpa o resultado
    // Aplica o efeito de rotação nas fileiras
    rotateSlots();
}

// Evento para o botão de rodar
spinButton.addEventListener('click', spinSlots);
