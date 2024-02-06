const Contact = () => {
  return (
    <div className="py-2 lg:px-5">
      <div className="mb-6 mt-16 max-w-3xl rounded-md sm:mt-20">
        <div className="py-5 text-center text-3xl font-bold">Contact Us</div>
        <form
          action="#"
          method="POST"
          className="rounded-xl bg-white px-9 pb-14 pt-8 sm:shadow-xl "
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-md bg-transparent text-black placeholder-gray-600"
                  required
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-md bg-transparent text-black placeholder-gray-600"
                  required
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="rounded-md font-semibold">
                  Phone<span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-md bg-transparent text-black placeholder-gray-600"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="rounded-md font-semibold">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-md bg-transparent text-black placeholder-gray-600"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                rows={6}
                placeholder="Your Message"
                className="resize-none rounded-md bg-transparent text-black placeholder-gray-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
