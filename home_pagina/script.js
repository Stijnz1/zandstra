const arrowIcons = document.querySelectorAll(".arrow-icons");

arrowIcons.forEach((arrowIcon) => {
    arrowIcon.addEventListener("click", () => {
        const hiddenDivs = document.querySelectorAll(".hidden");
        if (hiddenDivs.length > 0) {
            const nextDiv = hiddenDivs[0];
            nextDiv.classList.remove("hidden");
            arrowIcon.closest("div").classList.add("hidden");
        }
    });
});