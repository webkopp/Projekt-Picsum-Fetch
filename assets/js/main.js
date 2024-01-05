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

console.log(fetch("https://picsum.photos/v2/list"))

fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {
        const gallery = document.getElementById("gallery")
        console.log(gallery)
        data.forEach(item => {
            const figure = document.createElement("figure")
            const image = document.createElement("img")
            image.src = `https://picsum.photos/id/${item.id}/200/200`
            const caption = document.createElement("figcaption")
            caption.textContent = `Photo by ${item.author}`
            figure.appendChild(image)
            figure.appendChild(caption)
            gallery.appendChild(figure)
        })


        productsAusDemJson.forEach((product) => {
            const productTitle = product.title
            // console.log(productTitle);
            const productDesc = product.description
            // console.log(productDesc);
            const productImg = product.images[0]
            // console.log(productImg);
            const productPrice = product.price

            const productId = product.id


            // erstellt ein Div
            let productItem = document.createElement("div")


            // Title
            let h2 = document.createElement("h2")
            h2.textContent = productTitle
            productItem.appendChild(h2)


            // Beschreibung
            let p = document.createElement("p")
            p.textContent = productDesc
            productItem.appendChild(p)

            // Preis
            let h5 = document.createElement("h5")
            h5.textContent = `${productPrice} €`
            productItem.appendChild(h5)


            // Img
            const img = document.createElement("img")
            img.setAttribute("src", productImg)
            img.setAttribute("alt", productTitle)
            productItem.appendChild(img)


            // btn
            let moreInfoBtn = document.createElement("button")
            moreInfoBtn.textContent = "More Information"
            moreInfoBtn.addEventListener("click", () => {
                fetch(`https://dummyjson.com/products/${productId}`)
                    .then((resp) => resp.json())
                    .then((data) => console.log(data))
                    .catch((error) => console.log(error))
            })
            productItem.appendChild(moreInfoBtn)
            document.querySelector("#products").appendChild(productItem)
        })
    })
    .catch((error) => console.log("die Küche brennt leider", error))