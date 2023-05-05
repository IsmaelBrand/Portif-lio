const elementos=document.querySelectorAll('[data-anima]')
const animacaoClass1='animacao1'
const animacaoClass2='animacao2'


function animaScroll() {
    const topPaginaNaJanela=window.pageYOffset+300;
    elementos.forEach((elemento)=>{
        if(topPaginaNaJanela > elemento.offsetTop) {
            elemento.classList.add(animacaoClass1,animacaoClass2)
        } else {
            elemento.classList.remove(animacaoClass1,animacaoClass2)
        }
    })
}

if(elementos.length) {
       window.addEventListener('scroll',()=>{
        animaScroll();
       })
}


const carrossel =document.querySelector(".carrossel");
firstImg =  carrossel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper span");

let isDragStart = false, prevPageX, prevScrollLeft;
let scrollWidth = carrossel.scrollWidth - carrossel.clientWidth;
let firstImgWidht = firstImg.clientWidth + 14;

const showHideIcons = () => {
    arrowIcons[0].style.display = carrossel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carrossel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        carrossel.scrollLeft += icon.id == "left" ? -firstImgWidht : firstImgWidht;
        showHideIcons();
    })
})

const dragStart= (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carrossel.scrollLeft;
}

const dragging = (e)=> {
    if(!isDragStart) return;
    e.preventDefault();
    carrossel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carrossel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carrossel.classList.remove("dragging");
}
carrossel.addEventListener("mousemove", dragStart);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("mouseup", dragStop);
carrossel.addEventListener("mouseleave", dragStop);