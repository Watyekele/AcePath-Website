export default function Navbar() {
  return (
    <div className="flex justify-between border border-white ">
      <img src="../Acepath Logo.png" alt="" className="p-2" />
      <section className="nav-elements flex justify-end gap-4 p-2 items-center flex-1 ">
        <img src="../Navigate.png" alt="" />
        <img src="../Message.png" alt="" />
        <img src="../Phone.png" alt="" />
        <img src="../User_fill.png" alt="" />
      </section>
    </div>
  );
}
