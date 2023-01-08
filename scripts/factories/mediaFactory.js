function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    const imageLink = `../assets/images/${photographerId}/${image}`;
    const videoLink = `../assets/images/${photographerId}/${video}`;

    function addElement(element) {
        let mediaType = '';
        let img;

        const article = document.createElement('article');
        if (typeof video === 'undefined') {
            mediaType = 'img';
            img = document.createElement('img');
            img.setAttribute("src", imageLink);
        }
        else {
            mediaType = 'video';
            img = document.createElement('video');
            img.setAttribute("src", videoLink);
            img.controls = "controls";
        }
        const legend = document.createElement('div');
        const imageTitle = document.createElement('h3');
        const likeDisplay = document.createElement('h3');

        article.appendChild(img);
        img.setAttribute("alt", title);
        imageTitle.textContent = title;
        likeDisplay.textContent = likes;
        imageTitle.setAttribute("aria-label", "Titre du média");
        img.classList.add("book_"+mediaType);
        legend.classList.add("legend");
        likeDisplay.classList.add("likes");
        legend.appendChild(imageTitle);
        legend.appendChild(likeDisplay);
        article.appendChild(legend);


        return article;
    }

    return { addElement }
}