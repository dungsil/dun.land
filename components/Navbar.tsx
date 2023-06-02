import Logo from "./Logo.tsx";

export default function Navbar() {
  return (
    <header class="fixed w-full px-2 py-6 lg:px-8 shadow bg-zinc-950 bg-opacity-20 backdrop-filter backdrop-blur-sm">
      <a href="#" class="font-black text-2xl text-white hover:text-gray-200">
        <Logo />
        <span className="sr-only">DUN LAND</span>
      </a>
    </header>
  )
}
