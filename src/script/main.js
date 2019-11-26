/* Testing this out*/


const animalItems = document.querySelectorAll('.animal-item-wrapper');
animalItems.forEach(animalItem => {
    animalItem.addEventListener('mouseover', () => {
        console.log(animalItem.childNodes[1].classList)
        animalItem.childNodes[1].classList.add('image-blur');
    });
    animalItem.addEventListener('mouseout', () => {
        console.log(animalItem.childNodes[1].classList)
        animalItem.childNodes[1].classList.remove('image-blur');
    });
});