const buttonOpen = document.getElementById("btn-open-modal");
const buttonClose = document.getElementById("btn-close-modal");
const form = document.getElementById("modal-form");

function initModal() {
    buttonOpen.addEventListener("click", displayModal);
    buttonClose.addEventListener("click", closeModal);

    form.addEventListener("submit", event => {
        event.preventDefault();
        sendForm()
    });
}

function displayModal() {
    const modal = document.getElementById("contact_modal");
    var container = document.getElementById("container")

    modal.style.display = "block";
    container.className = "is-blurred";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    var container = document.getElementById("container")

    modal.style.display = "none";
    container.className = "";
}

function sendForm() {
    let formData = new FormData(form);
    console.log(Object.fromEntries(formData));
    form.reset();
    closeModal()
}

