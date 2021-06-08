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


for (let i = 0; i < btnsOpenModal.length; i++) { // Loop through buttons and add an event listener under each button for when the button is clicked it will open the modal.
    btnsOpenModal[i].addEventListener('click', openModal)
}


//-------------------------------EVENT LISTENERS--------------------------------------------
btnCloseModal.addEventListener('click', closeModal) // Upon click of X button on modal window it will close the modal.
overlay.addEventListener('click', closeModal) // Upon clicking anywhere in the blurry area outside the modal window it will close the modal window.
document.addEventListener('keydown', (e) => {
    console.log(e); // Use console.log to see object; keydown produces an object and it says name of key pressed under one of the keys in the object as a value. In the particular case 'Escape' is what is shown under the key so that's why we access e.key to do comparisons.
    if (e.key === 'Escape') { // When pressing escape key it closes the modal
        closeModal();
    }
})

