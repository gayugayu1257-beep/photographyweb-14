import "./services.css";
export default function Services() {
  const services = [
    {
      title: "Wedding Photography",
      desc: "Capture your special moments with cinematic wedding shots",
      icon: "💍"
    },
    {
      title: "Street Photography",
      desc: "Real life candid storytelling photography",
      icon: "🏙"
    },
    {
      title: "Nature Shoots",
      desc: "Beautiful landscapes & outdoor portraits",
      icon: "🌿"
    },
    {
      title: "Event Coverage",
      desc: "Birthdays, parties, corporate events & more",
      icon: "🎉"
    },
    {
      title: "Portrait Sessions",
      desc: "Professional personal & model shoots",
      icon: "📸"
    },
    {
      title: "Photo Editing",
      desc: "Color grading & premium retouching services",
      icon: "✨"
    }
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">My Services</h2>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
