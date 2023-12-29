const lamp = document.getElementById('lamp');
const turnOnButton = document.getElementById('turnOn');
const tunrOffButton = document.getElementById('turnOff');

turnOnButton.addEventListener('click', function() {
    lamp.src = './img/ligada.jpg';
});

tunrOffButton.addEventListener('click', function() {
    lamp.src = './img/desligada.jpg';
});