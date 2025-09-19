const methods = ["Transfer Bank", "Kartu Kredit", "E-Wallet", "Tunai di Lokasi"];

function PaymentMethod({ formData, setFormData }) {
  return (
    <div>
      <h3>Metode Pembayaran</h3>
      <div className="payment-options">
        {methods.map((method) => (
          <label
            key={method}
            className={`payment-box ${formData.payment === method ? "active" : ""}`}
          >
            <input
              type="radio"
              name="payment"
              value={method}
              checked={formData.payment === method}
              onChange={() => setFormData({ ...formData, payment: method })}
            />
            {method}
          </label>
        ))}
      </div>
    </div>
  );
}

export default PaymentMethod;
