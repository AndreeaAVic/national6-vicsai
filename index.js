console.log(window.screen);

document.getElementById('open').addEventListener('click', () => {
    window.open();
});

document.getElementById('close').addEventListener('click', () => {
    window.close();
});


setTimeout(() => {
    console.log('focus');
    window.focus();
}, 3000);


window.addEventListener('load', () => {
    console.log('all is loaded');
});


window.addEventListener('resize', (event) => {
    console.log(event);
});


document.getElementById('redirect').addEventListener('click', () => {
    window.location = 'https://google.com';
});