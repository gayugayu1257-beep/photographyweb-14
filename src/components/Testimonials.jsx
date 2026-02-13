import "./testimonials.css";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul",
      role: "Wedding Client",
      text: "Amazing photography! Every moment was captured beautifully. Highly recommended!",
      img: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Priya",
      role: "Model Shoot",
      text: "Professional work and very friendly. The edits were next level!",
      img: "https://i.pravatar.cc/100?img=5"
    },
    {
      name: "Arjun",
      role: "Event Manager",
      text: "Delivered on time with stunning quality photos. Will hire again!",
      img: "https://i.pravatar.cc/100?img=8"
    }
  ];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Client Testimonials</h2>

      <div className="testimonial-grid">
        {reviews.map((r, i) => (
          <div key={i} className="testimonial-card">
            <img src={r.img} alt={r.name} />
            <p className="testimonial-text">“{r.text}”</p>
            <h4>{r.name}</h4>
            <span>{r.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
