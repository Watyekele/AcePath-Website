export default function About() {
  return (
    <div className="mt-[316px] flex gap-4 p-2 h-[200px]">
      <img src="../About-Picture.png " alt="" />
      <section className=" flex flex-col gap-2 h-[200px] text-left">
        <h2 className="text-xl font-bold ">About our Services</h2>
        <img src="../Rectangle-6.png" className="w-16" alt="" />
        <p className="w-[207px] h-[143px] text-xs ">
          At AcePath Learning, we believe every learner deserves a clear path to
          success. We offer personalized, high-quality tutoring services
          designed to unlock each student’s potential — whether they’re
          struggling with basics or aiming for top performance.
        </p>
      </section>
    </div>
  );
}
