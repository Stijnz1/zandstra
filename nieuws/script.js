function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `<img class="max-w-full max-h-full" src="${imageSrc}" alt="Enlarged Image">`;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}