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
        img.setAttribute("src", picture);
        img.setAttribute("alt", "");
        h2.textContent = name;
        h3.textContent = city + ', ' + country ;
        txt_tagline.textContent = tagline;
        txt_price.classList.add('price');
        txt_price.textContent = price + '€/jour';

        // COnstruction de la fioche photographe
        article.appendChild(link);
        link.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(txt_tagline);
        article.appendChild(txt_price);

        return (article);
    }
    return { name, picture, getUserCardDOM }
}