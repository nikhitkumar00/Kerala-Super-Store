import { useState } from "react";

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const terms: { name: string; link: string }[] = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#About",
    },
    {
      name: "Gallery",
      link: "#Gallery",
    },
    {
      name: "Contact",
      link: "#Contact",
    },
  ];

  return (
    <nav className="flex h-16 items-center justify-between border-b border-indigo-700 p-4 font-semibold capitalize">
      <a href="#" className="text-2xl">
        Kerala Super Store
      </a>
      <ul className="hidden items-center gap-4 sm:flex">
        {terms.map((term) => (
          <li
            key={term.name}
            className={
              term.name === "Contact"
                ? "rounded-full bg-indigo-600 px-4 py-2 text-white transition-all duration-200 ease-in hover:scale-105 hover:bg-indigo-700"
                : "transition-all duration-200 ease-in-out hover:scale-105 hover:underline"
            }
          >
            <a href={term.link}>{term.name}</a>
          </li>
        ))}
      </ul>
      <svg
        onClick={() => setHamOpen(!hamOpen)}
        className="w-10 rounded-md fill-black p-2 hover:bg-gray-200 sm:hidden"
        viewBox="0 0 15 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"></path>
      </svg>
      {hamOpen && (
        <ul className="absolute inset-0 top-16 z-50 flex h-fit flex-col items-center justify-center gap-4 bg-white p-6 font-semibold capitalize shadow-lg sm:hidden">
          {terms.map((term) => (
            <li
              key={term.name}
              className={
                term.name === "Contact"
                  ? "w-3/4 rounded-full bg-indigo-600 px-4 py-2 text-center text-white hover:bg-indigo-700"
                  : "w-3/4 rounded-full bg-gray-100 px-4 py-2 text-center text-black hover:bg-gray-200"
              }
            >
              <a href={term.link}>{term.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
