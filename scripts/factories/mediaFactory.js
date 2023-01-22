// class MediaFactory {
//     addELement() {
//         ///

//         const htmlImageElement = this.createMediaElement();
        
//         ///
//     }

//     createMediaElement() {
//         throw new Exception('You have to implement this method');
//     }
// }

// class PhotoMediaFactory extends MediaFactory {
//     createMediaElement() {
//         const img = document.createElement('img');
//         img.setAttribute("src", imageLink);

//         return img;
//     }
// }

// class VideoMediaFactory extends MediaFactory {
//     createMediaElement() {
//         const video = document.createElement('video');
//         video.setAttribute("src", videoLink);
//         video.controls = "controls";

//         return video;
//     }
// }



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
        const likeValue = document.createElement('div');
        const coeur  = document.createElement( 'i' );

        // Attribution des valeurs
        article.appendChild(img);
        img.setAttribute("alt", title);
        imageTitle.textContent = title;
        likeValue.textContent = likes;
        imageTitle.setAttribute("aria-label", "Titre du média");
        img.classList.add("book_"+mediaType);
        legend.classList.add("legend");
        likeDisplay.classList.add("likes");
        coeur.classList.add("fa-solid");
        coeur.classList.add("fa-heart");

        // Construction de l'element à renvoyer
        legend.appendChild(imageTitle);
        likeDisplay.appendChild(coeur);
        likeDisplay.appendChild(likeValue);
        legend.appendChild(likeDisplay);
        likeDisplay.appendChild(coeur);
        article.appendChild(legend);


        return article;
    }

    return { addElement }
}