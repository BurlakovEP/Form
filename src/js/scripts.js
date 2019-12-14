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
