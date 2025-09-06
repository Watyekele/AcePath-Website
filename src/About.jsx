export default function About() {
  return (
    <div className="mt-8 flex flex-col items-center gap-8 p-8 w-full min-h-screen ">
      <section className="flex flex-col items-center gap-2 w-full">
        <h2 className="text-4xl font-bold">About Our Services</h2>
        <img
          src="../Rectangle-6.png"
          className="w-[15%] mx-auto h-2"
          alt="underline"
        />
      </section>
      <div className=" flex flex-col md:flex-row items-center justify-center gap-8 p-4 min-h-[35vh] w-full">
        <img
          src="../About-Picture.png"
          className="w-full md:w-1/2 max-w-md object-contain"
          alt="About"
        />
        <section className="flex flex-col gap-2 text-center  items-start md:text-left max-w-xl">
          <p className="  text-lg  text-center  leading-relaxed max-w-xl ">
            At AcePath Learning, we believe every learner deserves a clear path
            to success. We offer personalized, high-quality tutoring services
            designed to unlock each student’s potential — whether they’re
            struggling with basics or aiming for top performance. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Eius consequuntur
            nostrum rem consequatur ratione sapiente?
          </p>
        </section>
      </div>
    </div>
  );
}
