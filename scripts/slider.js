const carousel = document.querySelector('.carousel');
const arrowBtns = document.querySelectorAll('.wrapper i');
const firstCardWhite = carousel.querySelector(".card").offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -(firstCardWhite) : (firstCardWhite);
    })
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add('dragging');
    startX=e.pageX;
    startScrollLeft = carousel.scrollLeft;
}


const dragging = (e) =>{
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
  
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging');
}

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);

