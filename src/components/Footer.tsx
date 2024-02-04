const Footer = () => {
  const footerLinks = [
    { text: "About", url: "#" },
    { text: "Privacy Policy", url: "#" },
    { text: "Licensing", url: "#" },
    { text: "Contact", url: "#" },
  ];
  return (
    <footer className="bg-white ">
      <div className="p-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="ml-12 flex gap-4">
              <a href="#">
                <img
                  src="./whats.svg"
                  alt="Logo"
                  className="h-6 w-6 transition-all duration-200 ease-in hover:scale-125"
                />
              </a>
              <a href="#">
                <img
                  src="./insta.svg"
                  alt="Logo"
                  className="h-6 w-6 transition-all duration-200 ease-in hover:scale-125"
                />
              </a>
            </div>
            <ul className="mx-6 mb-4 flex space-x-3 text-sm font-medium text-black lg:mx-12">
              {footerLinks.map((link, index) => (
                <li
                  key={index}
                  className="transition-all duration-200 ease-in hover:scale-110 hover:underline"
                >
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-6 my-6 border-t border-gray-700 lg:mx-12"></div>
          <span className="text-center text-sm text-gray-400">
            © 2023{" "}
            <a href="#App" className="hover:underline">
              Kerala Super Store
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
