export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center  mt-8 w-full min-h-[60vh] md:min-h-[80vh] lg:min-h-screen">
      {/* Heading */}
      <section className="flex flex-col items-center gap-2">
        <h1 className="text-2xl md:text-3xl font-bold">TESTIMONIALS</h1>
        <img
          src="../Rectangle-6.png"
          alt="Red underline"
          className="w-24 h-2"
        />
      </section>

      {/* Testimonial Card */}
      <div className=" flex py-16 md:py-24 items-center justify-center w-full">
        <div
          className="flex  flex-col items-center justify-center 
                   bg-white/5 rounded-2xl shadow-md p-8 
                   w-[90%] md:w-[80%] lg:w-[70%] 
                   min-h-[400px] max-w-5xl "
        >
          <section className="flex items-center justify-center gap-4 text-center">
            {/* Left Quote Icon */}
            <img
              src="../Vector-9.png"
              alt="Quote left"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <img
              src="../Ellipse-50.png"
              className="w-20 md:w-16 h-16 rounded-full"
              alt="User"
            />
            {/* Avatar & Text */}
            <div className="flex flex-col items-center gap-4">
              {/* Avatar */}

              {/* Stars */}
              <div className="flex gap-1">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <img
                      key={i}
                      src="../Star_fill@3x.png"
                      className="w-5 h-5"
                      alt="Star"
                    />
                  ))}
              </div>

              {/* Testimonial text */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                mollitia!”
              </p>
            </div>

            {/* Right Quote Icon */}
            <img
              src="../Vector-9i.png"
              alt="Quote right"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </section>

          {/* Navigation Dots */}
          <div className="flex gap-2 mt-6">
            <img src="../Ellipse-51.png" alt="Active dot" className="w-3 h-3" />
            <img
              src="../Ellipse-52.png"
              alt="Inactive dot"
              className="w-3 h-3"
            />
            <img
              src="../Ellipse-52.png"
              alt="Inactive dot"
              className="w-3 h-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
