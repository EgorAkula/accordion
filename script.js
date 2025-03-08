let accordion = document.querySelector(".accordion");
let elements = document.querySelectorAll(".accordion__items");


// При клике на accordion 

accordion.addEventListener('click', (event)=> {
    let elementTarget = event.target;
    console.log(elementTarget);
    for(let item of elements) {
        item.classList.remove('active');
    }
    // Метод .closest('.accordion__items) возращает родителя с указанным классом
    elementTarget.closest('.accordion__items').classList.add('active');
})