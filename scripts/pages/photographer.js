let params = (new URL(document.location)).searchParams;
let photographer_id = params.get('id');

async function getMedias() {
    // Recuperation du fichier JSON en utilisant "fetch".
    return fetch('../data/photographers.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            return json['media'];
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
    const photographersHeader = document.querySelector(".photographer_header");
    const contactButton = document.querySelector(".contact_button");
    const photographerDetails = photographerDetailFactory(photographer);
    const userCardDOM = photographerDetails.getUserCardDOM();
    const photographerAvatar = photographerDetails.getUserAvatarDOM();


    photographersHeader.insertBefore(userCardDOM, contactButton );
    photographersHeader.appendChild(photographerAvatar);
};

async function init() {
    // Récupère les datas des photographes
    let medias;
    let photographer;

    medias = await getMedias();
    photographer = await getPhotographer();

    displayData(photographer, medias);
};

init();