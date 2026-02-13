import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Let's Work Together</h2>
      <p className="contact-sub">
        Have a project in mind? Feel free to contact me anytime.
      </p>

      <div className="contact-wrapper">
        {/* FORM */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message Sent ✅");
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>

        {/* QUICK CONTACT */}
        <div className="contact-info">
          <h3>Quick Contact</h3>

          <a href="mailto:yourmail@gmail.com" className="contact-btn">
            📧 Email Me
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="contact-btn whatsapp"
          >
            💬 WhatsApp
          </a>

          <a href="#gallery" className="contact-btn outline">
            📷 View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
