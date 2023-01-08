function mediaFactory(data) {
    const {id, photographerId, title, image, video, likes, date, price } = data;

    const imageLink = `../assets/images/${photographerId}/${image}`;
    const videoLink = `../assets/images/${photographerId}/${video}`;

    function addElement(element)
    {
        const article = document.createElement('article');
        const img = document.createElement( 'img' );
        const legend = document.createElement( 'div' );
        const imageTitle  = document.createElement( 'h3' );

        article.appendChild(img);
        img.setAttribute("src", imageLink);
        img.setAttribute("alt", title);
        imageTitle.textContent = title;
        imageTitle.setAttribute("aria-label", title);
        img.classList.add("book_photo");
        legend.classList.add("legend");
        legend.appendChild(imageTitle);
        article.appendChild(legend);


        return article;
    }

    return { addElement }
}