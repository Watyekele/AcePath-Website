export default function Footer() {
  return (
    <div className=" flex flex-col gap-6 w-full mt-10">
      <img src="../Google-Map.png" alt="" />
      <section className="flex gap-4">
        <article className="w-50 p-2">
          <p>AcePath Learning Ug Copyright © 2025 All rights reserved</p>
        </article>
        <article className="text-sm">
          <ul className=" flex flex-wrap w-55 text-xs gap-1 mt-2 list-style-none">
            <li> Home</li>
            <li>About</li>
            <li> Services</li>
            <li>Testimonials</li>
            <li> Schedule Booking</li>
            <li> Contact</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
