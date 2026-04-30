import { PlayCircle, MapPin, Clock } from 'phosphor-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function RealResults() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-20 bg-gray-50 text-center border-b border-gray-200">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
          Real Jobs. <span className="text-red-600">Real Results.</span>
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          See our work in action. We let the results speak for themselves.
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto bg-[#0b101b] rounded-3xl overflow-hidden shadow-2xl text-left border border-gray-800">
        <div className="relative h-64 md:h-[450px] w-full group cursor-pointer overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1563442375728-31731baa5f02?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Ford Mk3 Key Replacement Job" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle size={96} weight="fill" className="text-red-600 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300 group-hover:text-red-500" />
          </div>
          <div className="absolute top-6 left-6 bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg">
            Recent Job
          </div>
        </div>
        <div className="p-8 md:p-12">
          <h3 className="text-white text-3xl font-bold mb-4">Ford Mk3 Key Replacement</h3>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-3xl">
            Done for James in Navan, who called us at 11:30 PM. We fixed it with a brand new key fob in under 45 mins. He was back on the road safely.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-400">
            <span className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-800">
              <MapPin size={20} weight="fill" className="text-red-500" /> 
              Navan, Co. Meath
            </span>
            <span className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-lg border border-gray-800">
              <Clock size={20} weight="fill" className="text-red-500" /> 
              Finished in 45 Mins
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-1 transition-transform">
          <h4 className="text-4xl md:text-5xl font-black text-red-600 mb-2">500+</h4>
          <p className="text-gray-900 font-bold uppercase tracking-widest text-sm">Keys Replaced</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-1 transition-transform">
          <h4 className="text-4xl md:text-5xl font-black text-red-600 mb-2">100%</h4>
          <p className="text-gray-900 font-bold uppercase tracking-widest text-sm">Mobile Service</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:-translate-y-1 transition-transform">
          <h4 className="text-4xl md:text-5xl font-black text-red-600 mb-2">24/7</h4>
          <p className="text-gray-900 font-bold uppercase tracking-widest text-sm">Support</p>
        </div>
      </div>
    </section>
  );
}
