const buttonOpen = document.getElementById("btn-open-modal");
const buttonClose = document.getElementById("btn-close-modal");

buttonOpen.addEventListener("click", displayModal);
buttonClose.addEventListener("click", closeModal);

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
