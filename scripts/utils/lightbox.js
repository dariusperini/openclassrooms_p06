const lightbox = document.querySelector('.lightbox');
const container = document.getElementById('container');
let bookImageElementList;
let currentIndex = 0;

function initLightBox() {
    bookImageElementList = document.querySelectorAll(".book_img");
    bookImageElementList.forEach(img => img.addEventListener('click', displayLightBox));
}

function displayLightBox({ target }) {
    currentIndex = [...bookImageElementList].indexOf(target);
    console.log(medias[currentIndex].image);
    const content = document.querySelector('.main-media');

    const baseLink = "../assets/images/" + photographer_id + "/";

    const img = document.createElement('img');
    img.setAttribute("src", baseLink + medias[currentIndex].image);
    content.appendChild(img);

    lightbox.classList.add('lightbox-show');
    container.className = "is-blurred";
}
