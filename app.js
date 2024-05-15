 // Найти элемент audio
 const audio = document.getElementById('myAudio');
const ha = document.getElementById('ha')
const modal = document.getElementById('modal')

function playMusic() {
    audio.play();
}

function addClassAfterDelay() {
    const element = document.getElementById('my-element');
    const element2 = document.getElementById('my-element2');
    if (element) {
        setTimeout(() => {
            element.classList.add('start');
            element2.classList.add('start2');
        }, 1000);
        
        modal.classList.add('dn');
    }
}

document.getElementById('Ha').addEventListener('click', function() {
    addClassAfterDelay();
    playMusic();
});


    function getYars(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getDay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getHour(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getMin(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function getSek(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function animateNumber(elementId, targetNumber, duration, callback) {
        let currentNumber = 0;
        const element = document.getElementById(elementId);
        const interval = Math.ceil(duration / Math.abs(targetNumber - currentNumber));
        const increment = (targetNumber > currentNumber) ? 1 : -1;

        const animation = setInterval(() => {
            currentNumber += increment;
            element.textContent = (currentNumber < 10 ? '0' : '') + currentNumber;
            if (currentNumber === targetNumber) {
                clearInterval(animation);
                if (callback) {
                    callback();
                }
            }
        }, interval);
    }

    function startCountdown(sekElementId, minElementId) {
        let sekNumber = parseInt(document.getElementById(sekElementId).textContent);
        let minNumber = parseInt(document.getElementById(minElementId).textContent);
        const sekElement = document.getElementById(sekElementId);
        const minElement = document.getElementById(minElementId);

        const countdown = setInterval(() => {
            sekNumber--;
            if (sekNumber < 0) {
                sekNumber = 59;
                minNumber--;
                if (minNumber < 0) {
                    minNumber = 59; // или остановите обратный отсчет при необходимости
                }
                minElement.textContent = (minNumber < 10 ? '0' : '') + minNumber;
            }
            sekElement.textContent = (sekNumber < 10 ? '0' : '') + sekNumber;
        }, 1000); // Обновление каждую секунду
    }

    setTimeout(() => {
        let randomNumber = getYars(0, 50);
        let dayNumber = getDay(0, 99);
        let hourNumber = getHour(0, 23);
        let minNumber = getMin(0, 59);
        let sekNumber = getSek(0, 59);

        animateNumber('yers-number', randomNumber, 3000);
        animateNumber('day-number', dayNumber, 3000);
        animateNumber('hour-number', hourNumber, 3000);
        animateNumber('min-number', minNumber, 3000);
        animateNumber('sek-number', sekNumber, 3000, () => {
            // Запускаем обратный отсчет после завершения анимации
            startCountdown('sek-number', 'min-number');
        });
    }, 1000); // 1000 миллисекунд = 1 секунда задержки перед началом анимации
