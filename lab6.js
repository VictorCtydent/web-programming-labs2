function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Виктор Дорогин';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'Введите имя';
    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'введите фамилию';
    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('your-age').placeholder = 'введите возраст';
    document.getElementById('OK-button').value = 'Кнопка ОК';
    document.getElementById('RESET-button').value = 'Кнопка СБРОС';
} 

function setEnglish() {
    let name = document.getElementById('student');
    name.innerHTML = 'Victor Dorogin';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-03, 3rd year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'enter your name';
    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'enter surname';
    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'Enter your age';
    document.getElementById('OK-button').value = 'OK button';
    document.getElementById('RESET-button').value = 'Reset button';
}
