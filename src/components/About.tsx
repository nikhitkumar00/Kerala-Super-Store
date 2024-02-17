const About = () => {
  return (
    <div className="flex h-[calc(100svh-64px)] flex-col items-center justify-center gap-10 bg-indigo-400 text-center sm:gap-44 md:flex-row">
      <div className="font-outline text-7xl font-extrabold text-transparent">
        About
      </div>
      <div className="m-2 rounded-xl bg-white bg-opacity-30 p-6 text-lg font-semibold shadow-sm md:w-1/2">
        Kerala Super Store, situated at the heart of Aloor, stands as a
        prominent supermarket with a rich history. Originating as a grocery
        store in the 1980s, the establishment underwent significant growth,
        transforming into a full-fledged superstore in May 2013. Committed to
        providing quality products to the community, Kerala Super Store offers a
        diverse range of items at prices substantially lower than the MRP. With
        a customer-centric approach, this superstore aims to create a friendly
        and affordable shopping experience for all.
      </div>
    </div>
  );
};

export default About;
