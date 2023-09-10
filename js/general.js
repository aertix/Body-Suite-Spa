const arrow = document.querySelector('.arrow')
let toggle = 1;
arrow.addEventListener('click', () => {

    console.log(toggle)

    if (toggle === 1) {
        arrow.classList.add('leftTurn');
        arrow.classList.remove('rightTurn');
        document.querySelector('.dropdownextended').classList.add('appear');
        document.querySelector('.dropdownextended').classList.remove('disappear');
        document.querySelector('.dropdownextended').style.display = 'flex';

    }
    else if (toggle === -1) {
        arrow.classList.add('rightTurn');
        arrow.classList.remove('leftTurn');
        document.querySelector('.dropdownextended').classList.add('disappear');
        document.querySelector('.dropdownextended').classList.remove('appear');
        setTimeout(() => {
            document.querySelector('.dropdownextended').style.display = 'none';
        }, 500)
    }
    toggle *= -1;

})