function photographerDetailFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `../assets/photographers/${portrait}`;

    function getUserCardDOM() {

        // Déclaration des éléments du DOM
        const article = document.createElement( 'article' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const txt_tagline  = document.createElement( 'p' );

        // Attribution des valeurs
        article.classList.add('photographer_card');
        h2.textContent = name;
        h2.setAttribute("aria-label", "Nom du photographe");
        h3.textContent = city + ', ' + country ;
        h3.setAttribute("aria-label", "Ville et pays du photographe");
        txt_tagline.textContent = tagline;
        txt_tagline.setAttribute("aria-label", "Tag line");
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(txt_tagline);

        return (article);
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