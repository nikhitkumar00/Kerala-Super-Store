import Marquee from "react-fast-marquee";

const Gallery = () => {
  const images: { url: string; alt: string }[] = [
    { url: "./1.jpg", alt: "image 1" },
    { url: "./2.jpg", alt: "image 1" },
    { url: "./bg.webp", alt: "image 2" },
    { url: "./background.jpeg", alt: "image 3" },
  ];

  return (
    <div className="h-fitvh flex flex-col">
      <h1 className="mt-4 p-8 text-4xl font-bold sm:text-5xl">Gallery</h1>
      <Marquee speed={100} pauseOnHover={true}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.alt}
            className="mx-3 h-48 w-auto rounded-xl border-4 border-indigo-700 sm:h-96"
          ></img>
        ))}
      </Marquee>
    </div>
  );
};

export default Gallery;
