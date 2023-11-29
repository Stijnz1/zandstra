document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.grid img');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            overlayImage.src = image.src;
            overlay.classList.remove('hidden');
        });
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.add('hidden');
        }
    });
});
