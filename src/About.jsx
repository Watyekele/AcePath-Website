export default function About() {
  return (
    <div className="mt-[50px] flex flex-col md:flex-row items-center justify-center gap-6 p-4 min-h-[35vh] w-full">
      <img
        src="../About-Picture.png"
        className="w-[250px] md:w-[300px]"
        alt="About"
      />
      <section className="flex flex-col gap-2 h-[200px] items-start text-left max-w-[500px]">
        <h2 className="text-2xl font-bold">About our Services</h2>
        <img src="../Rectangle-6.png" className="w-[20%] h-2" alt="underline" />
        <p className="text-md">
          At AcePath Learning, we believe every learner deserves a clear path to
          success. We offer personalized, high-quality tutoring services
          designed to unlock each student’s potential — whether they’re
          struggling with basics or aiming for top performance.
        </p>
      </section>
    </div>
  );
}
