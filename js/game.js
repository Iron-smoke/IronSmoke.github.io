// Открытие/закрытие игры
document.getElementById('gameIconNumber').addEventListener('click', function() {
  const gameWindow = document.getElementById('gameWindowNumber');
  gameWindow.style.display = gameWindow.style.display === 'none' || gameWindow.style.display === '' ? 'flex' : 'none';
});

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('userGuess').value);
  const gameMessage = document.getElementById('gameMessage');

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    gameMessage.innerText = 'Введите число от 1 до 100.';
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    gameMessage.innerText = `Поздравляю! Вы угадали число ${randomNumber} с ${attempts} попытки.`;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
  } else if (userGuess > randomNumber) {
    gameMessage.innerText = 'Слишком много! Попробуйте меньше.';
  } else {
    gameMessage.innerText = 'Слишком мало! Попробуйте больше.';
  }
}
