import { MapPin, Phone, Car } from 'phosphor-react';

export function EmergencySteps() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 px-4 md:px-20 text-center border-b border-gray-200">
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
          Locked Out? Follow These <span className="text-red-600">3 Steps</span>
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          We'll guide you through this, stay calm, we're here to help.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {/* Step 1 */}
        <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-red-200 transition-all shadow-xl shadow-gray-200/50 hover:-translate-y-2 group">
          <div className="w-20 h-20 bg-red-50 group-hover:bg-red-100 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <MapPin size={40} weight="fill" className="text-red-600" />
          </div>
          <h3 className="text-7xl font-black text-gray-100 mb-6 group-hover:text-red-50 transition-colors">1</h3>
          <h4 className="text-2xl font-bold mb-3 text-gray-900">Stay where you are</h4>
          <p className="text-gray-600 leading-relaxed font-medium">Find a safe, visible spot near your location and wait for us.</p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-10 rounded-2xl border-2 border-red-600 shadow-2xl shadow-red-600/20 relative transform md:-translate-y-4">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white font-bold text-xs uppercase tracking-wider py-1 px-4 rounded-full">
            Crucial Step
          </div>
          <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-600/40 animate-pulse">
            <Phone size={40} weight="fill" className="text-white" />
          </div>
          <h3 className="text-7xl font-black text-gray-100 mb-6">2</h3>
          <h4 className="text-2xl font-bold mb-3 text-gray-900">Call us immediately</h4>
          <p className="text-gray-600 leading-relaxed font-medium mb-8">We'll answer right away and get our nearest driver on the route.</p>
          <a href="tel:0862000066" className="bg-red-600 hover:bg-red-700 text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors w-full shadow-lg shadow-red-600/30">
            <Phone size={24} weight="fill" />
            CALL NOW
          </a>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-red-200 transition-all shadow-xl shadow-gray-200/50 hover:-translate-y-2 group">
          <div className="w-20 h-20 bg-red-50 group-hover:bg-red-100 transition-colors rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Car size={40} weight="fill" className="text-red-600" />
          </div>
          <h3 className="text-7xl font-black text-gray-100 mb-6 group-hover:text-red-50 transition-colors">3</h3>
          <h4 className="text-2xl font-bold mb-3 text-gray-900">We'll be there fast</h4>
          <p className="text-gray-600 leading-relaxed font-medium">Our technician will arrive in 20-30 mins to get you back on the road.</p>
        </div>
      </div>

      <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gray-900 text-white px-8 py-5 rounded-2xl font-bold shadow-xl">
        <div className="bg-red-600 p-2 rounded-full">
          <MapPin size={24} weight="fill" />
        </div>
        <span className="text-lg">Only a small call out charge! Payment on arrival.</span>
      </div>
    </section>
  );
}
