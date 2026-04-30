import { Key, Wrench, LockKey, Lightning } from 'phosphor-react';

export function Services() {
  const services = [
    {
      title: "Car Key Replacement",
      desc: "Lost your only key? We can cut and program a new one on-site for all makes and models.",
      icon: <Key size={32} weight="fill" className="text-white" />,
      active: true
    },
    {
      title: "Spare Car Keys",
      desc: "Get a backup key made before disaster strikes. Quick and affordable.",
      icon: <Key size={32} weight="fill" className="text-red-600" />,
      active: false
    },
    {
      title: "Key Fob Programming",
      desc: "Remote not working? We program and sync key fobs for your vehicle.",
      icon: <Wrench size={32} weight="fill" className="text-red-600" />,
      active: false
    },
    {
      title: "Emergency Lockout",
      desc: "Locked your keys in the car? We'll get you back in with zero damage.",
      icon: <LockKey size={32} weight="fill" className="text-red-600" />,
      active: false
    },
    {
      title: "ECU Tuning & Remapping",
      desc: "Professional tuning and engine management diagnostics to enhance performance.",
      icon: <Lightning size={32} weight="fill" className="text-red-600" />,
      active: false
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-20 bg-white">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
          How We Can Help You <span className="text-red-600">Fast</span>
        </h2>
        <p className="text-lg text-gray-600 font-medium">Exactly what you need, exactly when you need it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`p-8 md:p-10 rounded-2xl transition-all duration-300 ${
              service.active 
                ? 'bg-[#0b101b] text-white shadow-2xl shadow-gray-900/20 scale-100 lg:scale-105 z-10 border border-gray-800' 
                : 'bg-white text-gray-900 border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 hover:border-red-200'
            }`}
          >
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${
              service.active ? 'bg-red-600 shadow-red-600/40' : 'bg-red-50'
            }`}>
              {service.icon}
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${service.active ? 'text-white' : 'text-gray-900'}`}>
              {service.title}
            </h3>
            <p className={`leading-relaxed font-medium ${service.active ? 'text-gray-300' : 'text-gray-600'}`}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-20 max-w-2xl mx-auto">
        <p className="text-gray-600 font-medium mb-8 text-lg">Not sure what you need? Call us, we'll figure it out for you.</p>
        <a href="tel:0862000066" className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black text-lg py-5 px-10 rounded-xl transition-all shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-1 w-full sm:w-auto">
          CALL 086 200 0066
        </a>
      </div>
    </section>
  );
}
