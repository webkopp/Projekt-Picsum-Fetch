// Phase I: Nutze die https://picsum.photos/v2/list und lass dir die Liste in der Console ausgeben.

// Phase II: Da du dir die Daten jetzt schon in der Konsole ausgeben lassen kannst, darfst du als nächstes für jeden Datensatz eine Kombination aus Bild und Autor:in in ein figure-Element wrappen und in deinem HTML ausgeben lassen.
// Die Elemente in deinem HTML sollten dann so aussehen: 
// https://uploads-ssl.webflow.com/62d9141584e7b750edcafa6a/64ba8f8b4b0c2ac2a4874331_API-fetch-level-2_1-example.png


// - Für dieses Projekt verwendest du die API von Picsum, um eine Galerie zu erstellen.
// - Diese beiden Links sind wichtig für die Umsetzung, schau sie dir an:
//     - [picsum](https://picsum.photos/)
//     - [picsum list](https://picsum.photos/v2/list/)

// ✨ Bonus
// - Schaue dir den Parameter "?page" an und überlege, wie du ihn einsetzen könntest.

// console.log(fetch("https://picsum.photos/v2/list"))

fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
        const gallery = document.getElementById("gallery")
        console.log(gallery)

        data.forEach(item => {
            const figure = document.createElement("figure")
            const image = document.createElement("img")
            image.src = `https://picsum.photos/id/${item.id}/200/200`
            image.url = `https://picsum.photos/id/${item.URL}/full`

            const caption = document.createElement("figcaption")
            caption.textContent = `Photo by ${item.author}`
            const button = document.createElement("button")
            button.textContent = "See more"
            button.addEventListener("click", () => {
                window.open(`https://picsum.photos/id/${item.id}`)
            })
            figure.appendChild(image)
            figure.appendChild(caption)
            figure.appendChild(button)
            gallery.appendChild(figure)
        })
    })
    .catch((error) => console.log("der link geht leider nicht", error))