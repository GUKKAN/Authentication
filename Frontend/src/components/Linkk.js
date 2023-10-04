import React from 'react';
const data = [
  {
    Name: "Naruto",
    season: 9,
    genre: ["Action", "Love", "Comedy", "Romance", "War"],
    address: {
      link: "https://zorox.to/filter?keyword=naruto"
    },
    // backgroundImage: "url('naruto.jpg')"
  },
  {
    Name: "One Piece",
    season: 21,
    genre: ["Action", "Love", "Comedy", "Romance", "War"],
    address: {
      link: "https://zorox.to/watch/one-piece-ov8/ep-1"
    },
    backgroundImage: "https://s3.amazonaws.com/images.seroundtable.com/google-rainbow-texture-1491566442.jpg"
  },
  {
    Name: "Jujutsu Kaisen",
    season: 2,
    genre: ["Action", "Drama", "Martial Arts", "Supernatural", "Demons", "Magic"],
    address: {
      link: "https://zorox.to/watch/jujutsu-kaisen-32n8/ep-1"
    },
    backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToNLcwyzwEpgKvJ0vCPprIaReCSioMr-7PzfZ_ST2jtzSNL3xKRkTX3Cl2bMaEAk60FVY&usqp=CAU" 
  },
  {
    Name: "Black Clover",
    season: 9,
    genre: ["Action", "Adventure", "Comedy", "Fantasy"],
    address: {
      link: "https://zorox.to/watch/black-clover-v2k6/ep-1"
    },
    // backgroundImage: "url('blackclover.jpg')"
  },
  {
    Name: "Bleach",
    season: 5,
    genre: ["Action", "Adventure", "Comedy", "Fantasy"],
    address: {
      link: "https://zorox.to/watch/bleach-6j9/ep-1"
    },
    // backgroundImage: "url('url_to_naruto_image.jpg')"
  }
];

export default function Linkk() {
  return (
    <div>
      <h1>Anime List</h1>
      <div className="card-container">
        {data.map((anime, index) => (
          <div
            className="card"
            key={index}
            style={{ backgroundImage: `url(${anime.backgroundImage})` }}
          >
            <div className='inner-card'>
            <h2>Name: {anime.Name}</h2>
            <p>Seasons: {anime.season}</p>
            <p>Genre: {anime.genre.join(', ')}</p>
            <address>
              <p>Watch Now: <a href={anime.address.link}>👆</a></p>
            </address>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
