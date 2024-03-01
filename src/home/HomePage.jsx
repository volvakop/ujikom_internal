import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  // Data destinasi wisata
  const destinations = [
    {
      id: 1,
      name: 'Pantai Kenjeran',
      description: 'Nikmati pesona pantai dengan pemandangan yang indah dan berbagai fasilitas rekreasi.',
      imageUrl: 'pantai surabaya.webp'
    },
    {
      id: 2,
      name: 'Museum Surabaya',
      description: 'Jelajahi sejarah dan budaya kota Surabaya melalui koleksi yang beragam di museum kami.',
      imageUrl: 'museum surabaya asoy.jpg'
    },
    {
      id: 3,
      name: 'Monumen Tugu Pahlawan',
      description: 'Monumen bersejarah dan saksi hidup kemerdekaan dalam mempertahankan NKRI',
      imageUrl: "tugu.jpg"
    }
    
  ];

  return (
    <div className="container">
      <h1>Selamat Datang Di Soerabaya</h1>
      <p>Selamat datang di situs pariwisata kami! Temukan keindahan destinasi wisata terbaik di sini.</p>
      <div className="destinations">
        {destinations.map(destination => (
          <div key={destination.id} className="destination">
            <img className='image' src={destination.imageUrl} alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            {/* <Link to={`/pariwisata/${destination.id}`} className="button">Lihat Detail</Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

