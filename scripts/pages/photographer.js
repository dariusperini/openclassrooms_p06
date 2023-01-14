let params = (new URL(document.location)).searchParams;
let photographer_id = params.get('id');

async function getMedias(sort='popularity') {
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

            //tri: date / likes / price / title
            switch(sort) {
                case 'title':
                mediaOfPhotographer.sort((a, b) => (a.title > b.title ? 1 : -1));
                break;

                case 'date':
                mediaOfPhotographer.sort((a, b) => (a.date > b.date ? 1 : -1));
                break;

                case 'price':
                mediaOfPhotographer.sort((a, b) => (a.price > b.price ? 1 : -1));
                break;

                default:
                    mediaOfPhotographer.sort((a, b) => (a.likes < b.likes ? 1 : -1));
            }

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


async function displayData(photographer, medias) {
    // Photographer's detail
    const photographersHeader = document.querySelector(".photographer_header");
    const contactButton = document.querySelector(".contact_button");
    const photographerDetails = photographerDetailFactory(photographer);
    const userCardDOM = photographerDetails.getUserCardDOM();
    const photographerAvatar = photographerDetails.getUserAvatarDOM();
    photographersHeader.insertBefore(userCardDOM, contactButton );
    photographersHeader.appendChild(photographerAvatar);

    // Photographer's book
    const bookSection = document.querySelector(".photobook");
    medias.forEach(function (media) {
        mediaElement = mediaFactory(media);
        bookSection.appendChild(mediaElement.addElement());
    });
};

async function init() {
    // Récupère les datas des photographes
    let medias;
    let photographer;
    
    medias = await getMedias();
    console.log(medias);
    photographer = await getPhotographer();

    displayData(photographer, medias);
};

init();