const filterSelect = document.querySelector(".filter-select");


function initFilters() {
    filterSelect.addEventListener("change", changeFilter());
}

function changeFilter() {
    console.log('filter changed');
    var text = filterSelect.options[filterSelect.selectedIndex].value;
    const bookSection = document.querySelector(".photobook");
    var child = bookSection.lastElementChild;
    while (child) {
        bookSection.removeChild(child);
        child = bookSection.lastElementChild;
    }

    applyFilter(text.toLowerCase());
}

function applyFilter(filter) {
    console.log('applying filter ' + filter);
    //tri: date / likes / price / title
    switch (filter) {
        case 'title':
            medias.sort((a, b) => (a.title > b.title ? 1 : -1));
            break;

        case 'date':
            medias.sort((a, b) => (a.date > b.date ? 1 : -1));
            break;

        case 'price':
            medias.sort((a, b) => (a.price > b.price ? 1 : -1));
            break;

        default:
            medias.sort((a, b) => (a.likes < b.likes ? 1 : -1));
    }
    displayMedias(medias);
}