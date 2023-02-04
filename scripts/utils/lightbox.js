let bookImageElementList;
let currentIndex = 0;

function initLightBox() {
    bookImageElementList = document.querySelectorAll(".book_img");
    bookImageElementList.forEach(img => img.addEventListener('click', displayLightBox));
}

function displayLightBox({ target }) {
    console.log(target);
    currentIndex = [...bookImageElementList].indexOf(target);
    const lightbox = document.getElementById('lightbox');
    const container = document.getElementById('container');

    lightbox.style.display = "block";
    container.className = "is-blurred";
}
