let params = (new URL(document.location)).searchParams;
let photographer_id = params.get('id');
let medias;
let photographer;

async function getMedias() {
    // Recuperation du fichier JSON en utilisant "fetch".
    return fetch('../data/photographers.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            const  mediaOfPhotographer=[];
            medias = json['media'];
            medias.forEach(function(media) {
                if(media.photographerId==photographer_id) 
                {
                    mediaOfPhotographer.push(media);
                }
            });

            // default sort is by popularity (likes)
            mediaOfPhotographer.sort((a, b) => (a.likes < b.likes ? 1 : -1));

            return mediaOfPhotographer;
        })
        .catch(function (err) {
            // Une erreur est survenue
            console.log(err)
        });
}

async function getPhotographer() {
    // Recuperation du fichier JSON en utilisant "fetch".
    return fetch('../data/photographers.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            return json['photographers'];
        })
        .then(function (photographers) {
            let result = null;
            photographers.forEach(element => {
                if (element.id == photographer_id) {
                    result = element;
                }
            });
            
            return result;
        })
        .catch(function (err) {
            // Une erreur est survenue
            console.log(err)
        });
}


async function displayPhotographer(photographer) {
        // Photographer's detail
    const photographersHeader = document.querySelector(".photographer_header");
    const contactButton = document.querySelector(".contact_button");
    const photographerDetails = photographerDetailFactory(photographer);
    const userCardDOM = photographerDetails.getUserCardDOM();
    const photographerAvatar = photographerDetails.getUserAvatarDOM();
    photographersHeader.insertBefore(userCardDOM, contactButton );
    photographersHeader.appendChild(photographerAvatar);
};

async function displayMedias(medias) {
    // Photographer's book
    const bookSection = document.querySelector(".photobook");
    medias.forEach(function (media) {
        let mediaFactory;
        mediaElement = mediaFactory(media);

        // if ("video") {
        //     mediaFactory = new VideoMediaFactory();
        // } else {
        //     mediaFactory = new ImageMediaFactory();
        // }

        bookSection.appendChild(mediaElement.addElement());
    });
};

async function init() {
    // Récupère les data des photographes
    medias = await getMedias();
    console.log(medias);
    photographer = await getPhotographer();

    displayPhotographer(photographer);
    displayMedias(medias);
};

init();