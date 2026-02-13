import "./ImageModal.css";

export default function ImageModal({ image, closeModal }) {
  if (!image) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <img src={image} className="modal-img" />
    </div>
  );
}
