export default function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-4 mt-6 w-full">
      {/* Heading */}
      <h1 className="text-2xl font-bold">TESTIMONIALS</h1>
      <img
        src="../Rectangle-6.png"
        alt="Red underline"
        className="w-[120px] h-2"
      />

      {/* Testimonial Card */}
      <div className="flex flex-col items-center bg-white/5 rounded-2xl shadow-md p-6 max-w-[600px]">
        <section className="flex items-center justify-center gap-4">
          {/* Left Quote Icon */}
          <img src="../Vector-9.png" alt="Quote left" className="w-6 h-6" />

          {/* Avatar + Text */}
          <div className="flex flex-col items-start gap-2">
            <img
              src="../Ellipse-50.png"
              className="w-[60px] rounded-full"
              alt="User"
            />

            {/* Stars */}
            <div className="flex">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <img
                    key={i}
                    src="../Star_fill@3x.png"
                    className="w-4 h-4"
                    alt="Star"
                  />
                ))}
            </div>

            {/* Testimonial text */}
            <p className="text-sm text-left text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
              mollitia!
            </p>
          </div>

          {/* Right Quote Icon */}
          <img src="../Vector-9i.png" alt="Quote right" className="w-6 h-6" />
        </section>

        {/* Navigation Dots */}
        <div className="flex gap-2 mt-4">
          <img src="../Ellipse-51.png" alt="Active dot" className="w-3 h-3" />
          <img src="../Ellipse-52.png" alt="Inactive dot" className="w-3 h-3" />
          <img src="../Ellipse-52.png" alt="Inactive dot" className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
