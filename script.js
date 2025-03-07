const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const spinButton = document.getElementById('spinButton');

const texts = ['LUCK', 'FORTUNA', 'SORTE', 'AZAR', 'GANHO', 'PERDA'];

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

function spinSlots() {
    // Adiciona a classe de animação
    slot1.classList.add('spin');
    slot2.classList.add('spin');
    slot3.classList.add('spin');

    // Gera textos aleatórios para cada slot
    setTimeout(() => {
        slot1.innerText = getRandomText();
        slot2.innerText = getRandomText();
        slot3.innerText = getRandomText();

        // Verifica se todas as slots têm "SORTE"
        if (slot1.innerText === 'SORTE' && slot2.innerText === 'SORTE' && slot3.innerText === 'SORTE') {
            slot1.style.color = 'green';
            slot2.style.color = 'green';
            slot3.style.color = 'green';
        } else {
            // Restaura a cor original
            slot1.style.color = '#ccc';
            slot2.style.color = '#ccc';
            slot3.style.color = '#ccc';
        }

        // Remove a classe de animação após a rotação
        setTimeout(() => {
            slot1.classList.remove('spin');
            slot2.classList.remove('spin');
            slot3.classList.remove('spin');
        }, 1000);
    }, 1000);
}

spinButton.addEventListener('click', spinSlots);
