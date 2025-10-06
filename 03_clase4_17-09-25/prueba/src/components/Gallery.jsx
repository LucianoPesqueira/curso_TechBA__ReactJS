import "../styles/Gallery.css"

function Gallery() {
    const images = [
        "https://picsum.photos/id/64/4326/2884",
        "https://picsum.photos/id/64/4326/2884",
        "https://picsum.photos/id/64/4326/2884"
    ];
  return (
    <section>
        {images.map((src, index) => (
            <img key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
    </section>
  );
}

export default Gallery