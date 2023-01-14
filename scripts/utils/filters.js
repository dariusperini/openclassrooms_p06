const filterSelect = document.querySelector(".filter-select");

filterSelect.addEventListener("change", changeFilter());

function changeFilter() {
    console.log('filtre changed');
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
}