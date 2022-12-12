const sendForm = (name) => {
    const forms = document.querySelectorAll(`form[name="${name}"]`);
    const popupThanks = document.querySelector('.popup--thanks');
    const popupForm = document.querySelector('.popup--form');

    // Отправляем данные
    const sendData = async (data) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    }

    const checkForm = (myForm) => {
        const inputs = myForm.querySelectorAll('.input--required');
        const errors = {}; // объект ошибок

        inputs.forEach(input => {
            if (input.value === '' || (input.type == 'checkbox' && input.checked === false)) {
                errors[input.name] = true;

                if (input.type !== 'checkbox') {
                    input.classList.add('error');
                } else {
                    input.parentNode.classList.add('error');
                    input.nextElementSibling.classList.add('error');
                }
            } else {
                if (input.type !== 'checkbox') {
                    input.classList.remove('error');
                } else{
                    input.parentNode.classList.remove('error');
                    input.nextElementSibling.classList.remove('error');
                }
                errors[input.name] = false;
            }

            input.addEventListener('input', (e) => {
                e.target.classList.remove('error');
            })
            input.addEventListener('change', (e) => {
                e.target.parentNode.classList.remove('error');
                e.target.nextElementSibling.classList.remove('error');
            })
        })

        return errors;
    }

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const formErrors = checkForm(form);

            for (let key in formErrors) {
                if (formErrors[key] == true) {
                    return false;
                }
            }

            // Экземпляр Формдаты для отправки данных
            const formData = new FormData(form);
            const userData = {};

            // Создаем объект с именами инпутов и значениями
            formData.forEach((val, key) => {
                userData[key] = val.trim();
            })

            // При успешной отправке вызываем модалку и чистим форму
            sendData(userData).then(data => {
                popupThanks.classList.add('open')
                setTimeout(() => {
                    popupThanks.classList.remove('open');
                    if (popupForm.classList.contains('open')) {
                        popupForm.classList.remove('open');
                    }
                }, 2000)
                form.reset();
            }).catch(error => {
                console.log('Ошибка')
            })
        })
    })
}

sendForm('form-question');