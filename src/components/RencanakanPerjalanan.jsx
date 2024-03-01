import React, { useState } from 'react';
import "./RencanakanPerjalanan.css"

import { useParams } from 'react-router-dom';

// const AboutMePage = () => {
//   return (
    // <div className="container">
    //   <h2 className="heading">Rencanakan Perjalanan Anda</h2>
    //   <img
    //   />
    //   <div className="paragraph">
    //   </div>
    //   <p>
    //     SILAKAN PESAN TIKET
    //   </p>
    // </div>

    const DestinationPage = () => {
      const [pesan, setPesan] = useState("tiket berhasil dipesan")
      
        const { id } = useParams();
      
        // Simpan data pemesanan
        const [bookingData, setBookingData] = useState({
          name: '',
          email: '',
          numberOfTickets: 1,
          tujuanrekreasi: '',
        });
      
        // Fungsi untuk menangani perubahan input
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setBookingData({ ...bookingData, [name]: value });
        };
      
        // Fungsi untuk menangani submit formulir pemesanan
        const handleSubmit = (e) => {
          e.preventDefault();
          // Lakukan validasi data pemesanan dan kirim data pemesanan ke server atau lakukan tindakan lainnya sesuai kebutuhan
          console.log("Data pemesanan:", bookingData);
          // Reset formulir setelah pengiriman
          setBookingData({ name: '', email: '', numberOfTickets: 1 });
        };
      
        return (
          <div className="container">
            <h1>Pesan Tiket Anda Disini!</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="numberOfTickets">Jumlah Tiket:</label>
                <input
                  type="number"
                  id="numberOfTickets"
                  name="numberOfTickets"
                  value={bookingData.numberOfTickets}
                  onChange={handleInputChange}
                  min={1}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Tujuanrekseasi">Tujuan rekseasi:</label>
                <input
                  type="Tujuanrekseasi"
                  id="Tujuanrekseasi"
                  name="Tujuanrekseasi"
                  value={bookingData.Tujuanrekreasi}
                  onChange={handleInputChange}
                  min={1}
                  required
                />
                </div>
              <button type="submit" className="button-enter" onClick={() => alert("tiket anda berhasil dipesan") }>Pesan Tiket</button>
            </form>
          </div>
        );
      };
      
      export default DestinationPage;
      