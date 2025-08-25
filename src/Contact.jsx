export default function Contact() {
  return (
    <div className="w-[426px] h-[233] flex flex-col items-center relative">
      <h1>CONTACT</h1>
      <img src="../Rectangle-6.png" alt="" />
      <section className=" text-sm absolute left-4 top-12 ">
        <p>Lubowa, Kampala, Uganda</p>
        <article className="flex items-center gap-1">
          <img src="../Vector-189.png" alt="" />
          <p>0784400989, Acepath-Learning</p>
        </article>
        <article className="flex items-center gap-1">
          <img src="../Message_light.png" alt="" />

          <p>acepathtutoring@gmail.com</p>
        </article>

        <p>Mon-Fri: 8am-5pm</p>
      </section>
      <section className=" m-2  absolute top-10 right-1">
        <form action="">
          <div className="flex items-center gap-2 my-2 ">
            <input
              type="text"
              placeholder="Name"
              className="border border-white w-20 h-6 text-sm p-1 rounded"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-white w-20 h-6 text-sm p-1 rounded"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border border-white w-42 text-sm p-1 block rounded "
          />
          <textarea
            name=""
            placeholder="Message"
            className="w-20 border border-white block mt-2 h-10 w-40 p-1"
            id=""
          ></textarea>
          <button
            type="submit"
            className="border border-white bg-red-800 font-bold w-40 mt-2 rounded-md"
          >
            Contact Us
          </button>
        </form>
      </section>
    </div>
  );
}
