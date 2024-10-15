const movies = [
  {
    title: "Joker: Folie à Deux",
    jenis_penayangan: "2D",
    rating: "R13+",
    image: "/Images/joker.jpg",
  },
  {
    title: "Captain Marvel",
    jenis_penayangan: "2D",
    rating: "SU",
    image: "/Images/captain_marvel.jpg",
  },
  {
    title: "Avenger: Ininity War",
    jenis_penayangan: "3D",
    rating: "R13+",
    image: "/Images/avenger_infinity_war.jpg",
  },
  {
    title: "Titanic",
    jenis_penayangan: "2D",
    rating: "D17+",
    image: "/Images/titanic.jpg",
  },
  {
    title: "Spider-Man: No Way Home",
    jenis_penayangan: "2D",
    rating: "R13+",
    image: "/Images/spiderman_no_way_home.jpg",
  },
  {
    title: "Deadpool & Wolverine",
    jenis_penayangan: "2D",
    rating: "D21+",
    image: "/Images/deadpool_and_wolverine.jpg",
  },
  {
    title: "Venom: The Last Dance",
    jenis_penayangan: "2D",
    rating: "SU",
    image: "/Images/venom_the_last_dance.jpg",
  },
  {
    title: "John Wick: Chapter 4",
    jenis_penayangan: "2D",
    rating: "D17+",
    image: "/Images/john_wick_chapter_four.jpg",
  },
  {
    title: "Godzilla vs. Kong",
    jenis_penayangan: "2D",
    rating: "R13+",
    image: "/Images/godzilla_vs_kong.jpg",
  },
  {
    title: "Kong: Skull Island",
    jenis_penayangan: "2D",
    rating: "D17+",
    image: "/Images/kong_skull_island.jpg",
  },
];

const movieList = document.getElementById("movie-list");

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "col-md-4 movie-card";
  card.innerHTML = `
        <div class="card card-1">
            <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <span class="badge bg-secondary">${movie.jenis_penayangan}</span>
              <span class="badge bg-secondary">${movie.rating}</span><br>
              <button class="book-1" data-bs-toggle="modal" data-bs-target="#bookingModal" onclick="openBookingModal('${movie.title}')">Book Ticket</button>
            </div>
        </div>
        
    `;
  movieList.appendChild(card);
});

function openBookingModal(movieTitle) {
  document.getElementById("movieTitle").value = movieTitle;
}

function bookTicket() {
  const movieName = document.getElementById("movieTitle").value;
  const name = document.getElementById("name").value;
  const seatsValue = document.getElementById("seats").value;

  const message = `Booking ${movieName} for ${seatsValue} seats by ${name}`;

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("bookingModal")
  );
  modal.hide();

  alert(message);

  document.getElementById("name").value = "";
  document.getElementById("seats").value = "";
}
