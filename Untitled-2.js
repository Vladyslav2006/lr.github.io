let username = '';
let password = '';

function login() {
    username = prompt("Введіть ім'я користувача:");
    password = prompt("Введіть пароль:");

    const loginButton = document.getElementById('loginButton');
    loginButton.innerHTML = `<span class="crimson">${username}</span>`;
}

document.getElementById('loginButton').addEventListener('click', login);

document.getElementById('profileButton').addEventListener('click', function() {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
});

