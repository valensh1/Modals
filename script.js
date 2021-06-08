'use strict';

//-------------------------DOM VARIABLES--------------------------------------------------
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); // Selects all elements with the class name .show-modal and returns them in an array; Array.length = 3; querySelector method only gets first element if there are multiple elements with that same class name.
console.log(btnsOpenModal);


//-----------------------------FUNCTIONS--------------------------------------------------
const openModal = () => {
    modal.classList.remove('hidden'); // classList allows you to add or remove classes without affecting other classes on the element. className method DOES affect other classes and will override any other classes on element to the one you are adding or if removing a class will remove all classes.
    overlay.classList.remove('hidden'); // classList allows you to add or remove classes without affecting other classes on the element. className method DOES affect other classes and will override any other classes on element to the one you are adding or if removing a class will remove all classes.
}

const closeModal = () => {
    modal.classList.add('hidden'); // classList allows you to add or remove classes without affecting other classes on the element. className method DOES affect other classes and will override any other classes on element to the one you are adding or if removing a class will remove all classes.
    overlay.classList.add('hidden'); // classList allows you to add or remove classes without affecting other classes on the element. className method DOES affect other classes and will override any other classes on element to the one you are adding or if removing a class will remove all classes.
}


for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
}


//-------------------------------EVENT LISTENERS--------------------------------------------
btnCloseModal.addEventListener('click', closeModal) // Upon click of X button on modal window it will close the modal.
overlay.addEventListener('click', closeModal) // Upon clicking anywhere in the blurry area outside the modal window it will close the modal window.


