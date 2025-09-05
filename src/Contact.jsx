export default function Contact() {
  return (
    <div className="flex flex-col items-center gap-4 mt-10 p-4 w-full max-w-[600px] mx-auto">
      {/* Heading */}
      <header className="flex flex-col items-center gap-2 w-full">
        <h1 className="text-2xl font-bold">CONTACT</h1>
        <img src="../Rectangle-6.png" alt="underline" className="w-[15%] h-2" />
      </header>

      <div className="flex flex-col md:flex-row justify-evenly   gap-14 w-full">
        {/* Contact Info */}
        <section className="text-sm flex flex-col  gap-3">
          <p className="font-medium">Lubowa, Kampala, Uganda</p>

          <article className="flex items-center gap-2">
            <img src="../Vector-189.png" alt="Phone icon" className="w-4 h-4" />
            <p>0784400989, Acepath-Learning</p>
          </article>

          <article className="flex items-center gap-2">
            <img
              src="../Message_light.png"
              alt="Email icon"
              className="w-4 h-4"
            />
            <p>acepathtutoring@gmail.com</p>
          </article>

          <p className="font-light">Mon-Fri: 8am - 5pm</p>
        </section>

        {/* Contact Form */}
        <section className="flex-1">
          <form className="flex flex-col gap-3">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 border border-white bg-transparent h-10 text-sm p-2 rounded"
              />
              <input
                type="text"
                placeholder="Phone"
                className="flex-1 border border-white bg-transparent h-10 text-sm p-2 rounded"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border border-white bg-transparent h-10 text-sm p-2 rounded w-full"
            />

            <textarea
              placeholder="Message"
              className="border border-white bg-transparent text-sm p-2 rounded w-full h-24 resize-none"
            ></textarea>

            <button
              type="submit"
              className="border border-white bg-red-800 font-bold py-2 rounded-md hover:bg-red-700 transition"
            >
              Contact Us
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
