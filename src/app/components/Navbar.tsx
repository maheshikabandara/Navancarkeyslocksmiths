import { Phone, MapPin } from 'phosphor-react';

export function Navbar() {
  return (
    <nav className="bg-[#0b101b] text-white px-4 md:px-20 py-5 flex items-center justify-between sticky top-0 z-40 border-b border-gray-800 shadow-sm">
      <div className="font-black text-xl md:text-2xl tracking-tight text-white flex items-center gap-2">
        Navan Car Keys Locksmiths
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-gray-300">
        <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
        <a href="#about" className="hover:text-red-500 transition-colors">About</a>
        <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
      </div>
      
      <div className="flex items-center gap-6">
        <a href="tel:0862000066" className="flex items-center gap-2 font-bold hover:text-red-500 transition-colors text-lg">
          <Phone size={24} weight="fill" className="text-red-500" />
          <span className="hidden sm:inline">086 200 0066</span>
        </a>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 bg-gray-900 px-3 py-1.5 rounded-full border border-gray-800">
          <MapPin size={16} weight="fill" className="text-red-500" />
          Serving Meath & Beyond
        </div>
      </div>
    </nav>
  );
}
