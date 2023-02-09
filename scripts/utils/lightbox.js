let bookImageElementList;
let currentIndex = 0;

function initLightBox() {
    bookImageElementList = document.querySelectorAll(".book_img");
    bookImageElementList.forEach(img => img.addEventListener('click', displayLightBox));
}

function displayLightBox({ target }) {
    currentIndex = [...bookImageElementList].indexOf(target);
    console.log(medias[currentIndex].image);
    const lightbox = document.getElementById('lightbox');
    const container = document.getElementById('container');
    const content = document.querySelector('.main-media');

    const baseLink = "../assets/images/" + photographer_id + "/";

    const img = document.createElement('img');
    img.setAttribute("src", baseLink + medias[currentIndex].image);
    content.appendChild(img);

    lightbox.style.display = "block";
    container.className = "is-blurred";
}
