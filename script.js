const btn = document.querySelector('button');
const pwd = document.querySelector('#password');
const repeatPwd = document.querySelector('#repeat');
const container = document.querySelector('#container');
const text = document.createElement('p');

btn.addEventListener('click', () => {
    if (repeatPwd.value != pwd.value) {
        text.textContent = "Passwords do not match!";
        text.style.cssText = "color: #ff0000; font-weight: bold; padding: 15px;";
        container.appendChild(text);
        btn.type = 'button';
    }
    else if (pwd.value === '' && repeatPwd.value === ''){
        text.textContent = '';
    }
    else {
        btn.type = 'submit';
    }
})