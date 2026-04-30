import { CheckCircle, ShieldCheck, MapPin } from 'phosphor-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Specialists() {
  const points = [
    {
      title: "All Car Brands",
      desc: "From Ford to Mercedes, we have the software and equipment to key most makes and models.",
      icon: <CheckCircle size={32} weight="fill" className="text-red-600" />
    },
    {
      title: "Years of Experience",
      desc: "Fully trained and insured technicians with extensive experience in automotive locksmithing.",
      icon: <ShieldCheck size={32} weight="fill" className="text-red-600" />
    },
    {
      title: "Emergency Ready",
      desc: "Operating 24/7 for emergencies, you're never stranded outside when locked out of your vehicle.",
      icon: <CheckCircle size={32} weight="fill" className="text-red-600" />
    },
    {
      title: "Customer First",
      desc: "Fair pricing, no hidden fees. We explain everything before we start work.",
      icon: <CheckCircle size={32} weight="fill" className="text-red-600" />
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-20 bg-white border-t border-gray-200 flex flex-col md:flex-row items-center gap-16 xl:gap-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50/50 skew-x-12 translate-x-32 hidden md:block"></div>
      
      <div className="w-full md:w-1/2 relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
            Local Expertise
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 tracking-tight leading-tight">
          Your Local <span className="text-red-600 block mt-2">Car Key Specialists</span>
        </h2>
        
        <p className="text-lg text-gray-600 mb-12 font-medium leading-relaxed">
          We're a mobile locksmith service based in Navan, serving Meath and surrounding areas. We specialize in car keys, emergency lockouts, and key fob programming.
        </p>
        
        <div className="flex flex-col gap-8">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-6 group">
              <div className="bg-red-50 group-hover:bg-red-100 p-4 rounded-2xl shrink-0 transition-colors shadow-sm">
                {point.icon}
              </div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">{point.title}</h4>
                <p className="text-base text-gray-600 font-medium leading-relaxed">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="w-full md:w-1/2 relative z-10 max-w-2xl mx-auto">
        <div className="bg-red-600 absolute -inset-6 md:-inset-8 rounded-3xl transform translate-x-4 translate-y-6 md:translate-x-8 md:translate-y-8 z-0"></div>
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1764173039542-fb43f4e71136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Mechanic holding keys near car" 
            className="w-full h-[500px] md:h-[700px] object-cover transform hover:scale-105 transition-transform duration-700" 
          />
        </div>
        
        {/* Floating badge */}
        <div className="absolute top-12 -left-4 md:-left-12 bg-white p-6 rounded-2xl shadow-2xl z-20 hidden sm:flex items-center gap-4 border border-gray-100 animate-bounce">
          <div className="bg-gray-900 p-3 rounded-xl text-white">
            <MapPin size={24} weight="fill" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest font-black mb-1">Serving Area</p>
            <p className="font-black text-gray-900 text-xl">Meath & Beyond</p>
          </div>
        </div>
      </div>
    </section>
  );
}
