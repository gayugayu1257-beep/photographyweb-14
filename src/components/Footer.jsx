import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">
          <h2>📸 MyGallery</h2>
          <p>Capturing moments that last forever.</p>
        </div>

        {/* CENTER LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="icons">
            <a href="#">🌐</a>
            <a href="#">📸</a>
            <a href="#">💼</a>
            <a href="#">🐦</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyGallery. All rights reserved.
      </div>
    </footer>
  );
}
