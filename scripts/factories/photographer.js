function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {

        // Déclaration des éléments du DOM
        const link = document.createElement('a');
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const txt_tagline  = document.createElement( 'p' );
        const txt_price  = document.createElement( 'div' );

        // Attribution des valeurs
        link.href = './pages/photographer.html?id=' + id;
        link.classList.add('photographer_card');
        link.setAttribute("aria-label", "Lien vers la page de " + name);
        img.setAttribute("src", picture);
        img.setAttribute("alt", "Photo de " + name);
        h2.textContent = name;
        h2.setAttribute("aria-label", "Nom du photographe");
        h3.textContent = city + ', ' + country ;
        h3.setAttribute("aria-label", "Ville et pays du photographe");
        txt_tagline.textContent = tagline;
        txt_price.classList.add('price');
        txt_price.textContent = price + '€/jour';
        txt_price.setAttribute("aria-label", "Prix par jour");

        // Construction de la fiche photographe
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(txt_tagline);
        article.appendChild(txt_price);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}