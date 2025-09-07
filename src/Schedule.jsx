export default function Schedule() {
  const bookings = [
    {
      title: "CONSULTATION MEETING",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit adipisicing elit.",
      price: "Free",
    },
    {
      title: "STRATEGY SESSION",
      description:
        "Plan your learning journey with a tailored roadmap and actionable steps.",
      price: "Free",
    },
  ];

  return (
    <div className="mt-8 flex flex-col items-center gap-4 m-4 w-full max-w-5xl min-h-screen">
      {/* Header */}

      <header className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-bold">SCHEDULE BOOKING</h1>
        <img src="../Rectangle 7.png" alt="underline" className="w-[15%] h-2" />
      </header>

      {/* Booking Cards */}
      <div className="flex flex-col flex-1 items-center justify-center min-h-[400px] w-full ">
        {bookings.map((booking, index) => (
          <section
            key={index}
            className="flex gap-8 p-8 m-4 border-none border-white rounded-xl items-center bg-white/5 shadow-md w-[90%] md:w-[80%] lg:w-[70%] 
                   min-h-[300px] max-w-5xl  relative"
          >
            {/* Image Placeholder */}
            <img
              src="../Rectangle-13.png"
              alt="Thumbnail"
              className="w-[50%] object-cover rounded-lg"
            />

            {/* Text Section */}
            <article className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{booking.title}</h2>
              <p className="text-lg text-gray-300">{booking.description}</p>
            </article>

            {/* Price Tag */}
            <p className="text-red-500 font-bold ml-auto absolute right-2 bottom-2">
              {booking.price}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
