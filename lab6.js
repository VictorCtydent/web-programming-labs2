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

function showAlert() {
    let userName = document.getElementById('input-name').value
    let userSurname =  document.getElementById('input-surname').value
    let userAge = document.getElementById('input-age').value
    alert('Привет, ' + userName + '' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    let color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById('user-data').style.backgroundColor = color;  
} 



    function shawmassage () {
    alert("хахайка");
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("student").style.backgroundColor = color;
  }

    function shawmassage2() {
    alert("лучшие студенты в мире фби-03!!!");
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("footer").style.backgroundColor = color;
}