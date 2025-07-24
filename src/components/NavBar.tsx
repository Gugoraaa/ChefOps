import Clock from "./Clock";


export default function NavBar() {
  return (
    <nav className="relative bg-gray-800 py-6  shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 relative">
        <h1 className="text-white text-2xl font-bold z-10">ChefOps</h1>

        <div className=" right -translate-x-1/2">
          <Clock />
        </div>
      </div>
    </nav>
  );
}
