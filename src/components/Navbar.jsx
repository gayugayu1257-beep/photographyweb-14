import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">PhotoGallery</h2>
      <ul className="nav-links">
        <li>Home</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
