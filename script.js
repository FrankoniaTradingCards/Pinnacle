const trips = [
  {
    title: "City Explorer",
    category: "Budget Friendly",
    description: "Discover Sydney’s most famous sights in a compact and affordable way.",
    image: "city-explorer.jpg",
    price: "From $49"
  },
  {
    title: "Family Day Out",
    category: "For Families",
    description: "Relaxed Sydney tours with safe activities, short distances and plenty of fun.",
    image: "family-trip.jpg",
    price: "From $79"
  },
  {
    title: "Harbour Adventure",
    category: "Adventure",
    description: "Experience Sydney Harbour, coastal views and outdoor highlights.",
    image: "harbour-adventure.jpg",
    price: "From $99"
  },
  {
    title: "Premium Sydney Experience",
    category: "Premium",
    description: "A more exclusive way to explore Sydney with comfort and personal guidance.",
    image: "premium-experience.jpg",
    price: "From $149"
  }
];

const tripContainer = document.getElementById("tripContainer");

trips.forEach(trip => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${trip.image}" alt="${trip.title}">
    <div class="card-content">
      <span>${trip.category}</span>
      <h3>${trip.title}</h3>
      <p>${trip.description}</p>
      <strong>${trip.price}</strong>
    </div>
  `;

  tripContainer.appendChild(card);
});