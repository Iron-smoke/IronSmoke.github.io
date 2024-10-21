const profilePicture = document.getElementById('profilePicture');
const popupMenu = document.getElementById('popupMenu');
const logoText = document.querySelector('.logo'); // Элемент с именем "ALex"
let menuTimeout, logoTimeout;

// Показываем иконки при наведении на фото
profilePicture.addEventListener('mouseenter', function() {
  clearTimeout(menuTimeout); // Очищаем таймер меню, если был
  popupMenu.style.display = 'flex'; // Показываем меню
});

// Показываем имя при наведении на фото
profilePicture.addEventListener('mouseenter', function() {
  clearTimeout(logoTimeout); // Очищаем таймер имени, если был
  logoText.style.color = 'white'; // Показываем имя
  logoText.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.7)'; // Добавляем тень имени
});

// Скрываем иконки, если курсор уходит с фото и с меню
profilePicture.addEventListener('mouseleave', function() {
  menuTimeout = setTimeout(function() {
    popupMenu.style.display = 'none'; // Прячем меню через 2 секунды
  }, 2000); // 2 секунды
});

// Скрываем иконки, если курсор уходит с popupMenu
popupMenu.addEventListener('mouseleave', function() {
  menuTimeout = setTimeout(function() {
    popupMenu.style.display = 'none'; // Прячем меню через 2 секунды
  }, 2000); // 2 секунды
});

// Скрываем имя, если курсор уходит с фото
profilePicture.addEventListener('mouseleave', function() {
  logoTimeout = setTimeout(function() {
    logoText.style.color = 'transparent'; // Скрываем имя через 5 секунд
    logoText.style.textShadow = 'none'; // Убираем тень
  }, 15000); // 5 секунд
});

// Очищаем таймер меню, если курсор на popupMenu (чтобы меню не исчезло)
popupMenu.addEventListener('mouseenter', function() {
  clearTimeout(menuTimeout); // Очищаем таймер меню
});

// Очищаем таймер имени и меню, если курсор снова на фото
profilePicture.addEventListener('mouseenter', function() {
  clearTimeout(logoTimeout); // Очищаем таймер имени
  clearTimeout(menuTimeout); // Очищаем таймер меню
});
const nameText = document.getElementById('nameText');

// Функция для показа и скрытия текста
function toggleText() {
  nameText.classList.add('active'); // Показываем текст
  setTimeout(() => {
    nameText.classList.remove('active'); // Скрываем текст через 10 секунд
  }, 10000); // 10 секунд
}

// Запускаем анимацию каждые 12 секунд (10 секунд видим, 2 секунды пауза)
setInterval(toggleText, 12000);

// Для начального показа
toggleText();

