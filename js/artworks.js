// DISPLAY ARTWORKS

const container = document.getElementById("artworks-container");

if (container) {

  const columns = [
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")
  ];

  columns.forEach(column => {
    column.classList.add("artworks-column");
    container.appendChild(column);
  });

  artworks.forEach((artwork, index) => {

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

    columns[index % 3].appendChild(card);

  });

}


// FILTER CONTAINERS

const artistFilters = document.getElementById("artist-filters");
const yearFilters = document.getElementById("year-filters");
const mediumFilters = document.getElementById("medium-filters");
const sizeFilters = document.getElementById("size-filters");
const priceFilters = document.getElementById("price-filters");


if (
  artistFilters &&
  yearFilters &&
  mediumFilters &&
  sizeFilters &&
  priceFilters
) {

  // ARTIST FILTERS

  artists.forEach(artist => {

    const label = document.createElement("label");

    label.innerHTML = `
      <input type="checkbox" value="${artist.id}">
      ${artist.name}
    `;

    artistFilters.appendChild(label);

  });


  // YEAR FILTERS

  const years = [...new Set(
    artworks.map(artwork => artwork.year)
  )];

  years.forEach(year => {

    const label = document.createElement("label");

    label.innerHTML = `
      <input type="checkbox" value="${year}">
      ${year}
    `;

    yearFilters.appendChild(label);

  });


  // MEDIUM FILTERS

  const mediums = [...new Set(
    artworks.map(artwork => artwork.medium)
  )];

  mediums.forEach(medium => {

    const label = document.createElement("label");

    label.innerHTML = `
      <input type="checkbox" value="${medium}">
      ${medium}
    `;

    mediumFilters.appendChild(label);

  });


  // SIZE FILTERS

  const sizes = [...new Set(
    artworks.map(artwork =>
      `${artwork.width} × ${artwork.height} ${artwork.unit}`
    )
  )];

  sizes.forEach(size => {

    const label = document.createElement("label");

    label.innerHTML = `
      <input type="checkbox" value="${size}">
      ${size}
    `;

    sizeFilters.appendChild(label);

  });


  // PRICE FILTERS

  const priceRanges = [
    {
      label: "Under €300",
      min: 0,
      max: 299
    },
    {
      label: "€300–€499",
      min: 300,
      max: 499
    },
    {
      label: "€500–€999",
      min: 500,
      max: 999
    },
    {
      label: "€1,000+",
      min: 1000,
      max: Infinity
    }
  ];

  priceRanges.forEach(range => {

    const label = document.createElement("label");

    label.innerHTML = `
      <input
        type="checkbox"
        value="${range.label}"
        data-min="${range.min}"
        data-max="${range.max}"
      >
      ${range.label}
    `;

    priceFilters.appendChild(label);

  });

}