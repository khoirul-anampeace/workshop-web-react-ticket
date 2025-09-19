const methods = ["Transfer Bank", "Kartu Kredit", "E-Wallet", "Tunai di Lokasi"];

function PaymentMethod({ formData, setFormData }) {
  return (
    <div>
      <h3>💳 Metode Pembayaran</h3>
      <div className="payment-options">
        {methods.map((method) => (
          <button
            key={method}
            className={formData.payment === method ? "active" : ""}
            onClick={() => setFormData({ ...formData, payment: method })}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethod;
