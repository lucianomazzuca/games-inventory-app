const btn = document.querySelector('#dropdown');
const linkContainer = document.querySelector('#links');

btn.addEventListener('click', () => {
    linkContainer.classList.toggle('hidden');
})