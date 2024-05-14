// Функция для добавления класса
        function addClassAfterDelay() {
            const element = document.getElementById('my-element');
            const element2 = document.getElementById('my-element2');
            if (element) {
                element.classList.add('start');
                element2.classList.add('start2');
            }
        }
// Запускаем функцию через 2 секунды после загрузки страницы
        window.onload = function() {
            setTimeout(addClassAfterDelay, 2000);
        };
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
                        minNumber = 59; // or you can stop the countdown if needed
                    }
                    minElement.textContent = (minNumber < 10 ? '0' : '') + minNumber;
                }
                sekElement.textContent = (sekNumber < 10 ? '0' : '') + sekNumber;
            }, 1000); // Update every second
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
                // Start the countdown once the animation is complete
                startCountdown('sek-number', 'min-number');
            });
        }, 1000); // 1000 milliseconds = 1 second delay before starting animation