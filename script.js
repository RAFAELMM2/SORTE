const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinButton = document.getElementById('spinButton');
const resultText = document.getElementById('result');
const chanceText = document.getElementById('chance');

const texts = ['LUCK', 'FORTUNA', 'SORTE', 'AZAR', 'GANHO', 'PERDA'];

// Chance de "SORTE" (1 em 12)
const chanceOfWinning = 12;
let rolls = 0;  // Contador de tentativas

// Função para gerar texto aleatório
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

// Função para rodar os slots
function spinSlots() {
    rolls++;  // Incrementa o número de tentativas

    // Atualiza a porcentagem de chance
    const chancePercentage = (1 / chanceOfWinning) * 100;
    chanceText.innerText = `Chance de ganhar: ${chancePercentage}%`;

    // Limpa o resultado
    resultText.innerText = '';
    
    // Adiciona a animação de rotação nas fileiras
    slot1.classList.add('spin');
    slot2.classList.add('spin');
    slot3.classList.add('spin');

    // Gera o texto aleatório após a animação de rotação
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
    }, 2000); // Espera o tempo de rotação para mudar os textos

    // Remove a animação após o efeito
    setTimeout(() => {
        slot1.classList.remove('spin');
        slot2.classList.remove('spin');
        slot3.classList.remove('spin');
    }, 2000); // A duração da animação
}

// Evento para o botão de rodar
spinButton.addEventListener('click', spinSlots);
