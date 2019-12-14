window.onload = () => {
  const form = document.querySelector('.form');
  const fields = form.querySelectorAll('.form__field');
  const pattern = {
    text: /^[a-zA-Z]{1,20}$/,
    email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    phone: /^[\+]\d{1}\s[\(]\d{3}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}$/,
  };

  const createMessage = (elem, text, className) => {
    const message = document.createElement('span');
    message.innerHTML = text;
    message.className = `form__message form__message_${className}`;
    elem.parentElement.insertBefore(message, elem);
  };

  const deleteMessages = (elem) => {
    const messages = form.querySelectorAll('.form__message');
    messages.forEach((message) => {
      if (elem === 'all') message.remove();
      else if (elem.previousElementSibling === message) {
        elem.previousElementSibling.remove();
      }
    });
  };

  const changeState = (elem, class1, class2) => {
    elem.classList.remove(`form__field_${class1}`);
    elem.classList.add(`form__field_${class2}`);
  };

  fields.forEach((field) => {
    field.onblur = (event) => {
      const { value, id } = event.target;
      if (value === '' && field.className === 'form__field') return false;
      if (
        (id === 'firstname' && value.match(pattern.text))
        || (id === 'lastname' && value.match(pattern.text))
        || (id === 'country' && value.match(pattern.text))
      ) {
        changeState(field, 'invalid', 'valid');
        deleteMessages(field);
      } else if (id === 'email' && value.match(pattern.email)) {
        changeState(field, 'invalid', 'valid');
        deleteMessages(field);
      } else if (id === 'phone' && value.match(pattern.phone)) {
        changeState(field, 'invalid', 'valid');
        deleteMessages(field);
      } else {
        changeState(field, 'valid', 'invalid');
        deleteMessages(field);
        createMessage(field, field.getAttribute('data-format'), 'failure');
      }
    };
  });

  const checkForm = (event) => {
    event.preventDefault();
    let validation = true;
    deleteMessages('all');

    fields.forEach((field) => {
      if (!field.classList.contains('form__field_valid')) {
        validation = false;
        changeState(field, 'valid', 'invalid');
        createMessage(field, field.getAttribute('data-format'), 'failure');
      }
    });

    if (validation === true) {
      createMessage(fields[0], 'Данные успешно отправлены!', 'success');
      fields.forEach((field) => {
        field.value = '';
        field.className = 'form__field';
      });
    }
  };

  form.addEventListener('submit', checkForm);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuICBjb25zdCBmaWVsZHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19maWVsZCcpO1xuICBjb25zdCBwYXR0ZXJuID0ge1xuICAgIHRleHQ6IC9eW2EtekEtWl17MSwyMH0kLyxcbiAgICBlbWFpbDogL15bLVxcdy5dK0AoW0EtejAtOV1bLUEtejAtOV0rXFwuKStbQS16XXsyLDR9JC8sXG4gICAgcGhvbmU6IC9eW1xcK11cXGR7MX1cXHNbXFwoXVxcZHszfVtcXCldXFxzXFxkezN9W1xcLV1cXGR7Mn1bXFwtXVxcZHsyfSQvLFxuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZU1lc3NhZ2UgPSAoZWxlbSwgdGV4dCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBtZXNzYWdlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgbWVzc2FnZS5jbGFzc05hbWUgPSBgZm9ybV9fbWVzc2FnZSBmb3JtX19tZXNzYWdlXyR7Y2xhc3NOYW1lfWA7XG4gICAgZWxlbS5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShtZXNzYWdlLCBlbGVtKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVNZXNzYWdlcyA9IChlbGVtKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtX19tZXNzYWdlJyk7XG4gICAgbWVzc2FnZXMuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgaWYgKGVsZW0gPT09ICdhbGwnKSBtZXNzYWdlLnJlbW92ZSgpO1xuICAgICAgZWxzZSBpZiAoZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nID09PSBtZXNzYWdlKSB7XG4gICAgICAgIGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTdGF0ZSA9IChlbGVtLCBjbGFzczEsIGNsYXNzMikgPT4ge1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShgZm9ybV9fZmllbGRfJHtjbGFzczF9YCk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKGBmb3JtX19maWVsZF8ke2NsYXNzMn1gKTtcbiAgfTtcblxuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBmaWVsZC5vbmJsdXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIGlkIH0gPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAodmFsdWUgPT09ICcnICYmIGZpZWxkLmNsYXNzTmFtZSA9PT0gJ2Zvcm1fX2ZpZWxkJykgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKFxuICAgICAgICAoaWQgPT09ICdmaXJzdG5hbWUnICYmIHZhbHVlLm1hdGNoKHBhdHRlcm4udGV4dCkpXG4gICAgICAgIHx8IChpZCA9PT0gJ2xhc3RuYW1lJyAmJiB2YWx1ZS5tYXRjaChwYXR0ZXJuLnRleHQpKVxuICAgICAgICB8fCAoaWQgPT09ICdjb3VudHJ5JyAmJiB2YWx1ZS5tYXRjaChwYXR0ZXJuLnRleHQpKVxuICAgICAgKSB7XG4gICAgICAgIGNoYW5nZVN0YXRlKGZpZWxkLCAnaW52YWxpZCcsICd2YWxpZCcpO1xuICAgICAgICBkZWxldGVNZXNzYWdlcyhmaWVsZCk7XG4gICAgICB9IGVsc2UgaWYgKGlkID09PSAnZW1haWwnICYmIHZhbHVlLm1hdGNoKHBhdHRlcm4uZW1haWwpKSB7XG4gICAgICAgIGNoYW5nZVN0YXRlKGZpZWxkLCAnaW52YWxpZCcsICd2YWxpZCcpO1xuICAgICAgICBkZWxldGVNZXNzYWdlcyhmaWVsZCk7XG4gICAgICB9IGVsc2UgaWYgKGlkID09PSAncGhvbmUnICYmIHZhbHVlLm1hdGNoKHBhdHRlcm4ucGhvbmUpKSB7XG4gICAgICAgIGNoYW5nZVN0YXRlKGZpZWxkLCAnaW52YWxpZCcsICd2YWxpZCcpO1xuICAgICAgICBkZWxldGVNZXNzYWdlcyhmaWVsZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VTdGF0ZShmaWVsZCwgJ3ZhbGlkJywgJ2ludmFsaWQnKTtcbiAgICAgICAgZGVsZXRlTWVzc2FnZXMoZmllbGQpO1xuICAgICAgICBjcmVhdGVNZXNzYWdlKGZpZWxkLCBmaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybWF0JyksICdmYWlsdXJlJyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgY2hlY2tGb3JtID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdmFsaWRhdGlvbiA9IHRydWU7XG4gICAgZGVsZXRlTWVzc2FnZXMoJ2FsbCcpO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoIWZpZWxkLmNsYXNzTGlzdC5jb250YWlucygnZm9ybV9fZmllbGRfdmFsaWQnKSkge1xuICAgICAgICB2YWxpZGF0aW9uID0gZmFsc2U7XG4gICAgICAgIGNoYW5nZVN0YXRlKGZpZWxkLCAndmFsaWQnLCAnaW52YWxpZCcpO1xuICAgICAgICBjcmVhdGVNZXNzYWdlKGZpZWxkLCBmaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZm9ybWF0JyksICdmYWlsdXJlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodmFsaWRhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgY3JlYXRlTWVzc2FnZShmaWVsZHNbMF0sICfQlNCw0L3QvdGL0LUg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90YshJywgJ3N1Y2Nlc3MnKTtcbiAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICBmaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICBmaWVsZC5jbGFzc05hbWUgPSAnZm9ybV9fZmllbGQnO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY2hlY2tGb3JtKTtcbn07XG4iXSwiZmlsZSI6InNjcmlwdHMuanMifQ==
