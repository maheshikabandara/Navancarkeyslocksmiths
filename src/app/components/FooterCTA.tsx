import { Phone, WhatsappLogo, Clock } from 'phosphor-react';

export function FooterCTA() {
  return (
    <section className="bg-red-600 text-white py-24 md:py-32 px-4 md:px-20 text-center relative overflow-hidden border-t border-red-700">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/50 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-800 via-white to-red-800 opacity-40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tight drop-shadow-sm">
          Locked Out or Lost Your Keys?
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 font-medium leading-relaxed max-w-2xl mx-auto">
          We're on the way. Call now and get back on the road fast.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a href="tel:0862000066" className="bg-white hover:bg-gray-100 text-red-600 font-black py-5 px-10 rounded-xl flex items-center justify-center gap-3 transition-all shadow-2xl shadow-red-900/50 hover:shadow-red-900/70 hover:-translate-y-1 text-lg md:text-xl w-full sm:w-auto">
            <Phone size={28} weight="fill" className="text-red-500" />
            CALL NOW 086 200 0066
          </a>
          <a href="https://wa.me/353862000066" target="_blank" rel="noreferrer" className="bg-transparent border-2 border-white hover:bg-red-700 hover:border-red-700 text-white font-black py-5 px-10 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-1 text-lg md:text-xl w-full sm:w-auto backdrop-blur-sm">
            <WhatsappLogo size={28} weight="fill" />
            WHATSAPP US
          </a>
        </div>
        
        <div className="inline-flex items-center justify-center gap-3 bg-red-800/40 border border-red-500/30 px-6 py-3 rounded-full backdrop-blur-md shadow-inner text-sm md:text-base font-bold uppercase tracking-widest">
          <Clock size={20} weight="fill" className="text-red-200" />
          <span className="opacity-90">Average Response Time: 20-30 Minutes</span>
        </div>
      </div>
    </section>
  );
}
