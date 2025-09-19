const tickets = [
  { type: "REGULAR", price: 150000, desc: "Akses standar" },
  { type: "VIP", price: 300000, desc: "Akses premium + merchandise" },
  { type: "VVIP", price: 500000, desc: "Akses backstage + meet & greet" },
];

function TicketTypeSelector({ formData, setFormData }) {
  return (
    <div>
      <h3>🎟 Pilih Jenis Tiket</h3>
      <div className="ticket-options">
        {tickets.map((ticket) => (
          <div
            key={ticket.type}
            className={`ticket-box ${formData.ticketType === ticket.type ? "active" : ""}`}
            onClick={() =>
              setFormData({
                ...formData,
                ticketType: ticket.type,
                ticketPrice: ticket.price,
                ticketDesc: ticket.desc,
              })
            }
          >
            <h4>{ticket.type}</h4>
            <p className="price">Rp {ticket.price.toLocaleString()}</p>
            <p>{ticket.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TicketTypeSelector;
