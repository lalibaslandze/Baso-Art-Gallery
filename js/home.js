// FEATURED ARTWORKS

const featuredContainer = document.getElementById(
  "featured-artworks-container"
);

if (featuredContainer) {

  const featured = [...artworks]
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  featured.forEach(artwork => {

    const artist = artists.find(
      artist => artist.id === artwork.artistId
    );

    const card = document.createElement("a");

    card.href = `artwork.html?id=${artwork.id}`;
    card.classList.add("featured-artwork-card");

    card.innerHTML = `
      <img src="${artwork.image}" alt="${artwork.title}">
      <h3>${artwork.title}</h3>
      <p>${artist ? artist.name : ""}</p>
    `;

    featuredContainer.appendChild(card);

  });

}