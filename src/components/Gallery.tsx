import Marquee from "react-fast-marquee";

const Gallery = () => {
  const images: { url: string; alt: string }[] = [
    { url: "./1.jpg", alt: "image 1" },
    { url: "./2.jpg", alt: "image 1" },
    { url: "./bg.webp", alt: "image 2" },
    { url: "./background.jpeg", alt: "image 3" },
  ];

  return (
    <>
      <h1 className="p-4 text-center text-3xl font-bold">Gallery</h1>
      <Marquee speed={100} pauseOnHover={true}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className="mx-3 h-96 w-auto"
          ></img>
        ))}
      </Marquee>
    </>
  );
};

export default Gallery;
