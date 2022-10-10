const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
// const container = document.getElementById('container');

//deschide popup-ul cu butonul open cu clasa active din css
openBtn.addEventListener('click', () => {
    container.classList.add('active');
})

//inchide popup-ul cu butonul close cu clasa active din css
closeBtn.addEventListener('click', () => {
    container.classList.remove('active');
})