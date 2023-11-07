document.getElementById("btnXMLHttpRequest").addEventListener("click", () => {
    const randomCharacterId = Math.floor(Math.random() * 671) + 1;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            if (this.status === 200) {
                const characterData = JSON.parse(this.responseText);
                displayCharacterInfo(characterData);
            } else {
                console.error("Error al obtener datos del personaje (XMLHttpRequest).");
            }
        }
    });
    xhr.open("GET", `https://rickandmortyapi.com/api/character/${randomCharacterId}`);
    xhr.send();
});
document.getElementById("btnFetch").addEventListener("click", () => {
    const randomCharacterId = Math.floor(Math.random() * 671) + 1;
    fetch(`https://rickandmortyapi.com/api/character/${randomCharacterId}`)
        .then((response) => response.json())
        .then((characterData) => {
            displayCharacterInfo(characterData);
        })
        .catch((error) => {
            console.error("Error al obtener datos del personaje (Fetch).", error);
        });
});
document.getElementById("btnAsyncAwait").addEventListener("click", async () => {
    const randomCharacterId = Math.floor(Math.random() * 671) + 1;
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacterId}`);
        const characterData = await response.json();
        displayCharacterInfo(characterData);
    } catch (error) {
        console.error("Error al obtener datos del personaje (Async/Await).", error);
    }
});
document.getElementById("btnjQuery").addEventListener("click", () => {
    const randomCharacterId = Math.floor(Math.random() * 671) + 1;
    $.get(`https://rickandmortyapi.com/api/character/${randomCharacterId}`, (characterData) => {
        displayCharacterInfo(characterData);
    })
    .fail((error) => {
        console.error("Error al obtener datos del personaje (jQuery).", error);
    });
});
document.getElementById("btnAxios").addEventListener("click", () => {
    const randomCharacterId = Math.floor(Math.random() * 671) + 1;
    axios.get(`https://rickandmortyapi.com/api/character/${randomCharacterId}`)
        .then((response) => {
            const characterData = response.data;
            displayCharacterInfo(characterData);
        })
        .catch((error) => {
            console.error("Error al obtener datos del personaje (Axios).", error);
        });
});
function displayCharacterInfo(characterData) {
    const characterInfoDiv = document.getElementById("character-info");
    const image = characterData.image;
    characterInfoDiv.innerHTML = `
        <h2>${characterData.name}</h2>
        <img src="${image}" alt="${characterData.name}">
        <p>Especie: ${characterData.species}</p>
        <p>Estado: ${characterData.status}</p>
        <p>Género: ${characterData.gender}</p>`;
}
 src="https://code.jquery.com/jquery-3.6.0.min.js";
 src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";