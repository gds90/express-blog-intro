const posts = [
    {
        title: "Come imparare a cucinare piatti italiani",
        content: "La cucina italiana è famosa in tutto il mondo per i suoi sapori unici e autentici. In questo post, condividerò alcune delle mie ricette preferite e consigli su come preparare piatti italiani a casa.",
        image: "cucina_italiana.jpg",
        tags: ["cucina", "ricette", "Italia", "gastronomia"]
    },
    {
        title: "Le migliori serie TV da non perdere",
        content: "Ci sono così tante serie TV disponibili oggi che può essere difficile scegliere cosa guardare. In questo post, elencherò alcune delle migliori serie TV da non perdere, con una breve recensione di ciascuna.",
        image: "serie_tv.jpg",
        tags: ["serie TV", "intrattenimento", "recensioni", "consigli"]
    },
    {
        title: "Viaggio attraverso le meraviglie dell'Italia",
        content: "L'Italia è un paese ricco di storia, cultura e bellezze naturali. In questo post, vi guiderò attraverso alcune delle destinazioni più affascinanti d'Italia.",
        image: "italia.jpg",
        tags: ["viaggi", "Italia", "cultura", "turismo"]
    },
    {
        title: "Come pianificare una vacanza perfetta",
        content: "Pianificare una vacanza può essere stressante, ma con alcuni consigli è possibile organizzare un viaggio perfetto. In questo post, condividerò alcuni suggerimenti su come pianificare ogni dettaglio della tua vacanza.",
        image: "vacanza.jpg",
        tags: ["viaggi", "pianificazione", "vacanza", "consigli"]
    },
    {
        title: "Il mio primo viaggio in Giappone",
        content: "Il Giappone è un paese affascinante con una cultura ricca e diversificata. In questo post vi racconto la mia esperienza durante il mio primo viaggio in Giappone, esplorando Tokyo, Kyoto e altre città meravigliose.",
        image: "giappone.jpg",
        tags: ["viaggi", "Giappone", "cultura", "avventura"]
    },
    {
        title: "I benefici dello yoga per il corpo e la mente",
        content: "Lo yoga è una pratica millenaria che offre numerosi benefici per il corpo e la mente. In questo post, esploreremo i vari tipi di yoga e come possono migliorare il nostro benessere.",
        image: "yoga.jpg",
        tags: ["benessere", "yoga", "salute", "fitness"]
    }
]

module.exports = {
    posts: (req, res) => {
        res.format({
            html: () => {
                let html = '<main>';
                posts.forEach((post) => {
                    html += `
                    <article>
                    <h2>${post.title}</h2>
                    <img src="/${post.image}" alt="${post.title}">
                    <p>${post.content}</p>
                    <h4>Tags:</h4>
                    <ul>
                        ${post.tags.map(tag => `<li>${tag}</li>`).join('')}
                    </ul>
                    </article>`
                });
                html += '</main>';
                res.send(html);
            },
            json: () => {
                res.json({
                    data: posts,
                    count: posts.length,
                    description: 'Lista dei post'
                });
            }
        })
    }
}