import { useState } from "react";
import TicketForm from "./components/TicketForm";
import TicketSummary from "./components/TicketSummary";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ticketType: null,
    ticketPrice: 0,
    ticketDesc: "",
    quantity: 1,
    payment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      ticketType: null,
      ticketPrice: 0,
      ticketDesc: "",
      quantity: 1,
      payment: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="container">
      <h1>🎫 Registrasi Pembelian Tiket Event</h1>

      {!submitted ? (
        <div className="grid">
          <TicketForm formData={formData} setFormData={setFormData} />
          <TicketSummary formData={formData} setSubmitted={setSubmitted} />
        </div>
      ) : (
        <div className="success-box">
          <h2>✅ Pembelian Berhasil!</h2>
          <div className="detail">
            <p><strong>Nama:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Telepon:</strong> {formData.phone}</p>
            <p><strong>Jenis Tiket:</strong> {formData.ticketType}</p>
            <p><strong>Deskripsi:</strong> {formData.ticketDesc}</p>
            <p><strong>Jumlah:</strong> {formData.quantity} tiket</p>
            <p><strong>Harga per Tiket:</strong> Rp {formData.ticketPrice.toLocaleString()}</p>
            <p><strong>Metode Pembayaran:</strong> {formData.payment}</p>
            <p className="total">
              Total: Rp {(formData.ticketPrice * formData.quantity).toLocaleString()}
            </p>
          </div>
          <button onClick={resetForm}>Beli Tiket Lagi</button>
        </div>
      )}
    </div>
  );
}

export default App;