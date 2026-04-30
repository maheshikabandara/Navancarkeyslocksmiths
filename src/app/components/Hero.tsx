import { Phone, WhatsappLogo, CheckCircle } from 'phosphor-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="bg-[#0b101b] text-white px-4 md:px-20 py-16 md:py-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2 z-10 flex flex-col gap-6">
        <div className="inline-flex items-center gap-2">
          <span className="text-red-500 font-bold uppercase tracking-widest text-sm bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            Mobile Locksmith
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
          Lost Your Car Keys or <span className="text-red-600 block mt-2">Locked Out?</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-lg font-medium leading-relaxed">
          We come to you, anywhere in Meath. Fast, reliable, no damage.
        </p>
        
        <div className="flex flex-col gap-4 my-4 bg-gray-900/50 p-6 rounded-xl border border-gray-800 backdrop-blur-sm w-fit">
          <div className="flex items-center gap-3">
            <CheckCircle size={24} weight="fill" className="text-red-500 shrink-0" />
            <span className="text-gray-100 font-medium">24/7 Emergency Response</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={24} weight="fill" className="text-red-500 shrink-0" />
            <span className="text-gray-100 font-medium">Mobile Service (We Come To You)</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle size={24} weight="fill" className="text-red-500 shrink-0" />
            <span className="text-gray-100 font-medium">All Car Makes & Models</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a href="tel:0862000066" className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-1 text-lg">
            <Phone size={24} weight="fill" />
            CALL NOW: 086 200 0066
          </a>
          <a href="https://wa.me/353862000066" target="_blank" rel="noreferrer" className="bg-white hover:bg-gray-100 text-gray-900 font-black py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-white/10 hover:shadow-white/20 hover:-translate-y-1 text-lg">
            <WhatsappLogo size={24} weight="fill" className="text-green-600" />
            WHATSAPP US
          </a>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
        <div className="aspect-square bg-red-600/20 rounded-full absolute -right-20 -top-20 opacity-50 blur-[100px] z-0"></div>
        <div className="aspect-square bg-blue-600/20 rounded-full absolute -left-20 -bottom-20 opacity-30 blur-[100px] z-0"></div>
        
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1533558701576-23c65e0272fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Car keys and locksmith tools" 
          className="rounded-2xl shadow-2xl relative z-10 w-full h-[400px] md:h-[550px] object-cover border-4 border-gray-800" 
        />
        
        {/* Floating badge */}
        <div className="absolute -bottom-6 -left-6 z-20 bg-white text-gray-900 p-4 rounded-xl shadow-xl font-bold flex items-center gap-4 animate-bounce">
          <div className="bg-red-100 p-3 rounded-full text-red-600">
            <Phone size={24} weight="fill" />
          </div>
          <div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Emergency?</div>
            <div className="text-lg">We are available!</div>
          </div>
        </div>
      </div>
    </section>
  );
}
