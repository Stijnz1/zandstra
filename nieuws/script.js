document.querySelectorAll('.modal-trigger').forEach(function (image) {
    image.addEventListener('click', function () {
        const imageUrl = image.getAttribute('src');
        openModal(imageUrl);
    });
});

function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `<img class="max-w-full max-h-full" src="${imageSrc}">`;
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
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.opacity = 1;
        document.body.style.overflow = 'auto';
    }, 500);
}