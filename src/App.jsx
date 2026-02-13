import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import Gallery from "./components/Gallery";
import ImageModal from "./components/ImageModal";
import { images } from "./data/images";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [category, setCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    category === "all"
      ? images
      : images.filter((img) => img.category === category);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Header />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <Gallery
        filteredImages={filteredImages}
        openModal={setSelectedImage}
      />

      <ImageModal
        selected={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
