// LIST OF ARTISTS
const artists = [
  {
    id: 1,
    name: "Lali Baslandze"
  }
];


const artworks = [
  {
    id: 1,
    title: "Wildflower Milk Can",
    description: "Crisp white daisies with deep crimson centers and delicate bluebell blooms spill out of a rustic white milk container against a weathered wooden backdrop. A serene, rustic still life celebrating simple natural beauty.",
    artistId: 1,
    year: 2023,
    image: "images/artworks/artwork-1.JPEG",
    medium: "Oil on canvas",
    width: 30,
    height: 40,
    unit: "cm",
    price: 360,
    currency: "EUR"
  },

  {
    id: 2,
    title: "Amber Still Life",
    description: "Description: Warm, glowing amber liquor in an embossed glass bottle paired with a half-cut lemon, a glass, star anise, and cinnamon sticks. Rich tones and tactile textures evoke a quiet, reflective mood.",
    artistId: 1,
    year: 2024,
    image: "images/artworks/artwork-2.JPEG",
    medium: "Oil on canvas panel",
    width: 30,
    height: 30,
    unit: "cm",
    price: 270,
    currency: "EUR"
  },

  {
    id: 3,
    title: "Pussy Willow Still Life",
    description: "An oil still life pairing a rustic terracotta vase holding flowering pussy willow branches with a larger weathered blue-green ceramic vessel behind it. Soft lavender-pink buds and scattered petals on the tabletop bring texture and quiet spring color against a rough, painterly backdrop.",
    artistId: 1,
    year: 2024,
    image: "images/artworks/artwork-3.JPEG",
    medium: "Oil on canvas",
    width: 40,
    height: 50,
    unit: "cm",
    price: 600,
    currency: "EUR"
  },

  {
    id: 4,
    title: "Ruby Seeds",
    description: "A bold, dramatic still life featuring a whole pomegranate paired with a sliced seed-rich wedge against a dark, moody backdrop. Deep reds and jewel tones highlight the fruit's rich texture.",
    artistId: 1,
    year: 2024,
    image: "images/artworks/artwork-4.JPEG",
    medium: "Oil on canvas panel",
    width: 30,
    height: 30,
    unit: "cm",
    price: 270,
    currency: "EUR"
  },

 {
    id: 5,
    title: "Pastel Meadow at Dusk",
    description: "A tranquil landscape of an open field flanked by two trees, rendered in soft greens with a sky washed in blush pink and lavender. The loose, atmospheric brushwork evokes the hush of early morning or fading evening light.",
    artistId: 1,
    year: 2026,
    image: "images/artworks/artwork-5.JPEG",
    medium: "Oil on canvas panel",
    width: 30,
    height: 40,
    unit: "cm",
    price: 290,
    currency: "EUR"
  },

  {
    id: 6,
    title: "Magnolia Blossoms",
    description: "Elegant magenta magnolia blossoms reach upward against a soft, ethereal background of cool blues and purples. Rich highlights on the petals create a striking sense of depth, warmth, and grace.",
    artistId: 1,
    year: 2026,
    image: "images/artworks/artwork-6.JPEG",
    medium: "Oil on canvas panel",
    width: 20,
    height: 40,
    unit: "cm",
    price: 350,
    currency: "EUR"
  },

];


// DISPLAY ARTWORKS

const container = document.getElementById("artworks-container");

artworks.forEach(artwork => {

  const card = document.createElement("div");

  card.classList.add("artwork-card");

  card.innerHTML = `
    <img src="${artwork.image}" alt="${artwork.title}">
    <h2>${artwork.title}</h2>
    <p>${artwork.year}</p>
    <p>${artwork.medium}</p>
    <p>${artwork.width} × ${artwork.height} ${artwork.unit}</p>
    <p>${artwork.price} ${artwork.currency}</p>
  `;

  container.appendChild(card);
});