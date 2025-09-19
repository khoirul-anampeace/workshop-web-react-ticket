function TicketSummary({ formData, setSubmitted }) {
  const total = formData.ticketPrice * formData.quantity;

  return (
    <div className="card">
      <h2>📋 Ringkasan Pembelian</h2>

      {formData.ticketType ? (
        <div>
          <p><strong>Jenis Tiket:</strong> {formData.ticketType}</p>
          <p><strong>Harga per Tiket:</strong> Rp {formData.ticketPrice.toLocaleString()}</p>
          <p><strong>Jumlah:</strong> {formData.quantity}</p>
          <p className="total">Total: Rp {total.toLocaleString()}</p>
        </div>
      ) : (
        <p className="muted">Pilih jenis tiket untuk melihat ringkasan</p>
      )}

      <button
        disabled={!formData.name || !formData.email || !formData.phone || !formData.ticketType || !formData.payment}
        onClick={() => setSubmitted(true)}
      >
        Bayar Sekarang
      </button>
    </div>
  );
}

export default TicketSummary;
