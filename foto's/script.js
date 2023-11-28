fetch("foto's.json")
    .then((response) => response.json())
    .then((data) => { 
        const foto = data[0];
        const fotosDiv = document.querySelector('#foto');
        const personDiv = document.createElement('div');
        personDiv.innerHTML =`
        <img src="${foto.rupskraan1}">
        <img src="${foto.rupskraan2}">
        <img src="${foto.rupskraan3}">
    `;
        fotosDiv.appendChild(personDiv);
});