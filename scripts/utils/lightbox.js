const bookImg = document.querySelectorAll(".book_img");

console.log(bookImg);

bookImg.forEach(elem => elem.addEventListener("click", event => {
    displayLightBox(event.target);
}));

function displayLightBox(media) {
    const lightbox = document.getElementById('lightbox');
    var container = document.getElementById('container')

    lightbox.style.display = "block";
    container.className = "is-blurred";
}
