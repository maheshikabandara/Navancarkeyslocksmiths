import { Car, Clock, Star, Wrench } from 'phosphor-react';

export function TrustStrip() {
  return (
    <section className="py-12 px-4 bg-black text-white border-y-4 border-[#DC0000]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Car size={48} weight="fill" className="text-[#DC0000] mx-auto mb-3" />
            <div className="font-bold text-xl mb-1">100% Mobile Service</div>
            <div className="text-gray-400">We come to you</div>
          </div>

          <div className="text-center">
            <Clock size={48} weight="fill" className="text-[#DC0000] mx-auto mb-3" />
            <div className="font-bold text-xl mb-1">Fast Response Time</div>
            <div className="text-gray-400">20-30 minute arrival</div>
          </div>

          <div className="text-center">
            <Star size={48} weight="fill" className="text-[#DC0000] mx-auto mb-3" />
            <div className="font-bold text-xl mb-1">5-Star Rated</div>
            <div className="text-gray-400">Trusted by locals</div>
          </div>

          <div className="text-center">
            <Wrench size={48} weight="fill" className="text-[#DC0000] mx-auto mb-3" />
            <div className="font-bold text-xl mb-1">Expert Technicians</div>
            <div className="text-gray-400">Fully qualified</div>
          </div>
        </div>
      </div>
    </section>
  );
}
