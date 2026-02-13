import "./gallery.css";   // ✅ VERY IMPORTANT

export default function Gallery({ filteredImages, openModal }) {
  return (
    <div className="gallery-container">
      {filteredImages.map((img) => (
        <img
          key={img.id}
          src={img.src}
          alt=""
          className="gallery-img"
          onClick={() => openModal(img.src)}
        />
      ))}
    </div>
  );
}
