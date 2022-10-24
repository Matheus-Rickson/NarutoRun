const character = document.querySelector('.character');

const jump = () => {
character.classList.add('jump');

setTimeout(() => {

 character.classList.remove('jump');
}, 500);

}

document.addEventListener('keydown', jump);
