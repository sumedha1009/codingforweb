const books = [
  
  {
    id: "b1",
    img: "tomorrowandtomorrowandtomorrow.jpg",
    genres: "Fiction",
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    status: "winner"
  },
  {
    id: "b2",
    img: "TheMaid.jpg",
    genres: "Mystery & Thriller",
    title: "The Maid",
    author: "Nita Prose",
    status: "winner"
  },
  {
    id: "b3",
    img: "CarrieSotoIsBack.jpg",
    genres: "Historical Fiction",
    title: "Carrie Soto Is Back",
    author: "Taylor Jenkins Reid",
    status: "winner"
  },
  {
    id: "b4",
    img: "HouseofSkyandBreath.jpg",
    genres: "Fantasy",
    title: "House of Sky and Breath",
    author: "Sarah J. Maas",
    status: "winner"
  },
  {
    id: "b5",
    img: "WishYouWereHere.jpg",
    genres: "Fiction",
    title: "Wish You Were Here",
    author: "Jodi Picoult",
    status: "nominee"
  },
  {
    id: "b6",
    img: "TheWinners.jpg",
    genres: "Fiction",
    title: "The Winners",
    author: "Fredrik Backman",
    status: "nominee"
  },
  {
    id: "b7",
    img: "RemarkablyBrightCreatures.jpg",
    genres: "Fiction",
    title: "Remarkably Bright Creatures",
    author: "Shelby Van Pelt",
    status: "nominee"
  },
  {
    id: "b8",
    img: "TheParisApartment.jpg",
    genres: "Mystery & Thriller",
    title: "The Paris Apartment",
    author: "Lucy Foley",
    status: "nominee"
  },
  {
    id: "b9",
    img: "TheBulletThatMissed.jpg",
    genres: "Mystery & Thriller",
    title: "The Bullet That Missed",
    author: "Richard Osman",
    status: "nominee"
  },
  {
    id: "b10",
    img: "AFlickerintheDark.jpg",
    genres: "Mystery & Thriller",
    title: "A Flicker in the Dark",
    author: "Stacy Willingham",
    status: "nominee"
  },
  {
    id: "b11",
    img: "LessonsinChemistry.jpg",
    genres: "Historical Fiction",
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    status: "nominee"
  },
  {
    id: "b12",
    img: "GoTelltheBeesThatIAmGone.jpg",
    genres: "Historical Fiction",
    title: "Go Tell the Bees That I Am Gone",
    author: "Diana Gabaldon",
    status: "nominee"
  },
  {
    id: "b13",
    img: "TheDiamondEye.jpg",
    genres: "Historical Fiction",
    title: "The Diamond Eye",
    author: "Kate Quinn",
    status: "nominee"
  },
  {
    id: "b14",
    img: "BabelAnArcaneHistory.jpg",
    genres: "Fantasy",
    title: "Babel: An Arcane History",
    author: "R.F. Kuang",
    status: "nominee"
  },
  {
    id: "b15",
    img: "FairyTale.jpg",
    genres: "Fantasy",
    title: "Fairy Tale",
    author: "Stephen King",
    status: "nominee"
  },
  {
    id: "b16",
    img: "TheAtlasSix.jpg",
    genres: "Fantasy",
    title: "The Atlas Six",
    author: "Olivie Blake",
    status: "nominee"
  }

];







  // Function to generate HTML for a book
  function generateBookHtml(book) {
    return `
      <div class="book">
          <img src="${book.img}" alt="${book.title}">
          <p><strong>${book.title}</strong> by ${book.author}</p>
      </div>
    `;
  }
  
  // Create genre sections in the HTML
  const genreSections = document.getElementById("genreSections");
  
  // Group books by genre
  const genres = {};
  
  books.forEach(book => {
    if (!genres[book.genres]) {
      genres[book.genres] = [];
    }
    genres[book.genres].push(book);
  });
  
  // Iterate through genres and create sections
  for (const genre in genres) {
    const genreData = genres[genre];
    const genreSection = document.createElement("section");
    genreSection.innerHTML = `<h2>${genre} Winners and Nominees</h2>`;
  
    // Display the winner if there is one
    const winner = genreData.find(book => book.status === "winner");
    if (winner) {
      genreSection.innerHTML += "<h3>Winner</h3>";
      genreSection.innerHTML += generateBookHtml(winner);
    }
  
    // Display the nominees if there are any
    const nominees = genreData.filter(book => book.status === "nominee");
    if (nominees.length > 0) {
      genreSection.innerHTML += "<h3>Nominees</h3>";
      nominees.forEach(nominee => {
        genreSection.innerHTML += generateBookHtml(nominee);
      });
    }
  
    genreSections.appendChild(genreSection);
  }
  