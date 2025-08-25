export default function About() {
  return (
    <div className="mt-[50px] flex  items-center justify-center p-4 h-[35vh] w-[100%]">
      <img src="../About-Picture.png " className="   ml-4" alt="" />
      <section className=" flex flex-col gap-2 h-[200px] items-center text-left">
        <h2 className="text-2xl font-bold ">About our Services</h2>
        <img src="../Rectangle-6.png" className="w-[20%] h-2 " alt="" />
        <p className="w-[70%] h-[143px] text-md ">
          At AcePath Learning, we believe every learner deserves a clear path to
          success. We offer personalized, high-quality tutoring services
          designed to unlock each student’s potential — whether they’re
          struggling with basics or aiming for top performance.
        </p>
      </section>
    </div>
  );
}
