// Abstract
class MediaElement {

    constructor({ id, photographerId, title, mediaFilename, likes }) {
        if (this.constructor == MediaElement)
            throw new Error("Abstract classes can't be instantiated.");

        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.mediaFilename = mediaFilename;
        this.likes = likes;
    }

    get type() {
        throw new Exception('You have to implement this method');
    }

    get dom() {
        const articleElement = document.createElement('article');
        const mediaElement = this.createMediaElement();
        const legend = document.createElement('div');
        const mediaTitle = document.createElement('h3');
        const likeDisplay = document.createElement('h3');
        const coeur  = document.createElement( 'i' );

        // Attribution des valeurs
        articleElement.appendChild(mediaElement);
        mediaElement.setAttribute("alt", this.title);
        mediaTitle.textContent = this.title;
        likeDisplay.textContent = this.likes;
        mediaTitle.setAttribute("aria-label", "Titre du média");
        mediaElement.classList.add(`book_${this.type}`);
        legend.classList.add("legend");
        likeDisplay.classList.add("likes");
        coeur.classList.add("fa-solid");
        coeur.classList.add("fa-heart");

        // Construction de l'element à renvoyer
        legend.appendChild(mediaTitle);
        likeDisplay.appendChild(coeur);
        legend.appendChild(likeDisplay);
        likeDisplay.appendChild(coeur);
        articleElement.appendChild(legend);

        return articleElement;
        ///
    }

    createMediaElement() {
        throw new Exception('You have to implement this method');
    }
}

class PhotoMediaElement extends MediaElement {
    get type() {
        return 'img';
    }

    createMediaElement() {
        const imagePath = `../assets/images/${this.photographerId}/${this.mediaFilename}`;
        const imgElement = document.createElement('img');
        imgElement.setAttribute("src", imagePath);

        return imgElement;
    }
}

class VideoMediaElement extends MediaElement {
    get type() {
        return 'video';
    }

    createMediaElement() {
        const videoPath = `../assets/images/${this.photographerId}/${this.mediaFilename}`;
        const videoElement = document.createElement('video');
        videoElement.setAttribute("src", videoPath);

        return videoElement;
    }
}

function mediaFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    const isVideo = !!video;

    return isVideo ? new VideoMediaElement({
        id,
        photographerId,
        title,
        likes,
        date,
        price,
        mediaFilename: video
    }) : new PhotoMediaElement({
        id,
        photographerId,
        title,
        likes,
        date,
        price,
        mediaFilename: image
    });
}