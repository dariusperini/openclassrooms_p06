function photographerDetailFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `../assets/photographers/${portrait}`;

    function getUserCardDOM() {

        // Déclaration des éléments du DOM
        const h2 = document.createElement( 'h2' );

        // Attribution des valeurs
        h2.textContent = name;
        h2.setAttribute("aria-label", "Nom du photographe");

        return (h2);
    }

    function getUserAvatarDOM() {
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo de " + name);
        img.classList.add("photographer_avatar");

        return img;

    }

    return { name, picture, getUserCardDOM, getUserAvatarDOM }
}