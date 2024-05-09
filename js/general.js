

const arrow = document.querySelector('.arrow')
let toggle = 1;
arrow.addEventListener('click', () => {

    console.log(toggle)

    if (toggle === 1) {
        document.querySelector('.dropdownextended').classList.add('appear');
        document.querySelector('.dropdownextended').classList.remove('disappear');
        document.querySelector('.dropdownextended').style.display = 'flex';

    }
    else if (toggle === -1) {

        document.querySelector('.dropdownextended').classList.add('disappear');
        document.querySelector('.dropdownextended').classList.remove('appear');
        setTimeout(() => {
            document.querySelector('.dropdownextended').style.display = 'none';
        }, 500)
    }
    toggle *= -1;

})

// arrow.addEventListener('click', () => {

//     console.log(toggle)

//     if (toggle === 1) {
//         arrow.classList.add('leftTurn');
//         arrow.classList.remove('rightTurn');
//         document.querySelector('.dropdownextended').classList.add('appear');
//         document.querySelector('.dropdownextended').classList.remove('disappear');
//         document.querySelector('.dropdownextended').style.display = 'flex';

//     }
//     else if (toggle === -1) {
//         arrow.classList.add('rightTurn');
//         arrow.classList.remove('leftTurn');
//         document.querySelector('.dropdownextended').classList.add('disappear');
//         document.querySelector('.dropdownextended').classList.remove('appear');
//         setTimeout(() => {
//             document.querySelector('.dropdownextended').style.display = 'none';
//         }, 500)
//     }
//     toggle *= -1;

// })

let toggle2 = 1
const exit = document.querySelector('.exit');
exit.addEventListener('click', () => {
        document.querySelector('.mobilenav').style.display = 'none'
})


const MB = document.querySelector('.mobilebutton')
MB.addEventListener('click',()=>{
    if(toggle2 == 1){
        document.querySelector('.mobilenav').style.display = 'flex';
        document.querySelector('.mobilenav').classList.add('appear');
        document.querySelector('.mobilenav').classList.remove('disappear');
    }
    if(toggle2 == -1){
        document.querySelector('.mobilenav').style.display = 'none'
        document.querySelector('.mobilenav').classList.add('disappear');
        document.querySelector('.mobilenav').classList.remove('appear');
        setTimeout(() => {
            document.querySelector('.mobilenav').style.display = 'none';
        }, 500)
    }
    console.log(toggle2)
    toggle2 = -toggle2;
})