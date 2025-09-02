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
    <div className="mt-8 flex flex-col items-center gap-4 m-2 w-full max-w-[500px]">
      {/* Header */}
      <h1 className="text-2xl font-bold">SCHEDULE BOOKING</h1>
      <img src="../Rectangle 7.png" alt="underline" className="w-[120px] h-2" />

      {/* Booking Cards */}
      {bookings.map((booking, index) => (
        <section
          key={index}
          className="flex gap-4 p-4 m-2 border border-white rounded-xl items-start bg-white/5 shadow-md w-full relative"
        >
          {/* Image Placeholder */}
          <img
            src="../Rectangle-13.png"
            alt="Thumbnail"
            className="w-[80px] h-[80px] object-cover rounded-lg"
          />

          {/* Text Section */}
          <article className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">{booking.title}</h2>
            <p className="text-sm text-gray-300">{booking.description}</p>
          </article>

          {/* Price Tag */}
          <p className="text-red-500 font-bold ml-auto">{booking.price}</p>
        </section>
      ))}
    </div>
  );
}
