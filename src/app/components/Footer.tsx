import { Phone, EnvelopeSimple, MapPin, InstagramLogo, FacebookLogo, WhatsappLogo } from 'phosphor-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0b101b] text-gray-400 py-16 md:py-24 px-4 md:px-20 border-t border-gray-800 relative z-10 shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        <div className="col-span-1 lg:col-span-1 max-w-sm">
          <div className="font-black text-xl md:text-2xl text-white mb-6 tracking-tight">
            Navan Car Keys Locksmiths
          </div>
          <p className="text-gray-500 mb-8 leading-relaxed font-medium">
            Professional, fast, and reliable mobile auto locksmith service serving Meath and surrounding areas.
          </p>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a href="tel:0862000066" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                  <Phone size={18} weight="fill" className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                086 200 0066
              </a>
            </li>
            <li>
              <a href="mailto:info@navancarkeys.ie" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                  <EnvelopeSimple size={18} weight="fill" className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                info@navancarkeys.ie
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-red-600 transition-colors">
                <MapPin size={18} weight="fill" className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
              Meath, Ireland
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Our Services</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li><span className="hover:text-white transition-colors cursor-pointer">Car Key Replacement</span></li>
            <li><span className="hover:text-white transition-colors cursor-pointer">Spare Car Keys</span></li>
            <li><span className="hover:text-white transition-colors cursor-pointer">Key Fob Programming</span></li>
            <li><span className="hover:text-white transition-colors cursor-pointer">Emergency Lockout</span></li>
            <li><span className="hover:text-white transition-colors cursor-pointer">ECU Tuning & Remapping</span></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Follow Us</h3>
          <p className="text-sm text-gray-500 mb-6 font-medium">Stay updated with our latest news and offers.</p>
          <div className="flex gap-4">
            <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-xl transition-colors hover:-translate-y-1 transform">
              <FacebookLogo size={24} weight="fill" />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-xl transition-colors hover:-translate-y-1 transform">
              <InstagramLogo size={24} weight="fill" />
            </a>
            <a href="https://wa.me/353862000066" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-green-600 text-white p-3 rounded-xl transition-colors hover:-translate-y-1 transform">
              <WhatsappLogo size={24} weight="fill" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm flex flex-col md:flex-row items-center justify-between font-medium">
        <p>© 2026 Navan Car Keys Locksmiths. All Rights Reserved.</p>
        <p className="mt-4 md:mt-0 text-gray-600 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Fast, professional, and reliable mobile service.
        </p>
      </div>
    </footer>
  );
}
