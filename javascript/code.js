const wrapper = document.querySelector('.wrapper');
const startscreen = document.querySelector('#startscreen');
const portfolio = document.querySelector('#portfolio');

startscreen.addEventListener('click', startsite);

function startsite() {
    wrapper.classList.add('cracked');

    setTimeout(() => {
        startscreen.classList.add('invisible');
        portfolio.classList.remove('invisible');
    }, 1500);
}