import TicketTypeSelector from "./TicketTypeSelector";
import PaymentMethod from "./PaymentMethod";

function TicketForm({ formData, setFormData }) {
  return (
    <div className="card">
      <h2>Data Diri Pembeli</h2>
      
      <hr style={{ border: "0.5px dashed #c9c9c9ff" }} />

      <div className="input-group">
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="text"
          placeholder="Nomor Telepon"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />

        <input
          type="number"
          min="1"
          placeholder="Jumlah Tiket"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
        />
      </div>

      <TicketTypeSelector formData={formData} setFormData={setFormData} />
      <PaymentMethod formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default TicketForm;
