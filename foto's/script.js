let currentIndex = 0;
const images = document.querySelectorAll('.grid img');
const modalImage = document.getElementById('modalImage');

images.forEach(function (image, index) {
    image.addEventListener('click', function () {
        currentIndex = index;
        updateModal();
        openModal();
    });
});

function updateModal() {
    const imageUrl = images[currentIndex].getAttribute('src');
    modalImage.innerHTML = `<img class="max-w-full max-h-full" src="${imageUrl}">`;
}

function navigate(offset) {
    currentIndex += offset;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateModal();
}

function openModal() {
    const modal = document.getElementById('imageModal');
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
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        navigate(1);
    } else if (event.key === 'ArrowLeft') {
        navigate(-1);
    }
});
document.getElementById("modal-prev").addEventListener('click', () => {
    navigate(-1);
});
document.getElementById("modal-next").addEventListener('click', () => {
    navigate(1);
});