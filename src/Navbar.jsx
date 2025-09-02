export default function Navbar() {
  return (
    <div className="flex justify-between border border-white/30 w-full absolute top-0">
      <img src="../Acepath Logo.png" alt="" className="p-2" />
      <section className="nav-elements flex justify-end gap-4 p-2 items-center flex-1  ">
        <img src="../Navigate.png" alt="" className="cursor-pointer" />
        <img src="../Message.png" alt="" className="cursor-pointer" />
        <img src="../Phone.png" alt="" className="cursor-pointer" />
        <img src="../User_fill.png" alt="" className="cursor-pointer" />
      </section>
    </div>
  );
}
