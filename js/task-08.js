const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const formDataOdject = {};

        formData.forEach((value, key) => {
            formDataOdject[key] = value;
        });

        if (formDataOdject.email === '' || formDataOdject.password === '') {
            alert('Всі поля повинні бути заповнені');
            return;
        }
        console.log(formDataOdject);

        loginForm.reset();
    });
