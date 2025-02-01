function formatName(name) {
  return name
      .trim() // Убираем лишние пробелы в начале и конце
      .toLowerCase() // Приводим к нижнему регистру
      .replace(/^(.)/, (match) => match.toUpperCase()); // Делаем первую букву заглавной
}

// Функция для проверки спама
function checkSpam(str) {
  return str.replace(/viagra|xxx/gi, '***'); // Заменяем 'viagra' и 'xxx' на '***'
}

// Функция для добавления комментария
function addComment() {
  const nameInput = document.getElementById('name');
  const avatarInput = document.getElementById('avatar');
  const messageInput = document.getElementById('message');
  
  const name = formatName(nameInput.value);
  const avatar = avatarInput.value;
  const message = checkSpam(messageInput.value);

  if (name && message) {
      const commentsDiv = document.getElementById('comments');
      
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
      
      if (avatar) {
          const avatarImg = document.createElement('img');
          avatarImg.src = avatar;
          avatarImg.alt = 'Avatar';
          avatarImg.className = 'avatar';
          commentDiv.appendChild(avatarImg);
      }

      const commentText = document.createElement('div');
      commentText.innerHTML = `<strong>${name}</strong>: ${message}`;
      commentDiv.appendChild(commentText);
      
      commentsDiv.appendChild(commentDiv);

      // Очистка полей ввода
      nameInput.value = '';
      avatarInput.value = '';
      messageInput.value = '';
  } else {
      alert('Пожалуйста, заполните имя и сообщение.');
  }
}

// Добавляем обработчик события для кнопки
document.getElementById('submit').addEventListener('click', addComment);