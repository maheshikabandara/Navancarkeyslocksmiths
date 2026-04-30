import { MapPin, Shield, Lightning, Users } from 'phosphor-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Your Local <span className="text-[#DC0000]">Car Key Specialists</span>
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We\'re a mobile locksmith service based in Navan, serving Meath and surrounding areas.
              We specialize in car keys, emergency lockouts, and key fob programming.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-[#DC0000] p-3 rounded-lg flex-shrink-0">
                  <MapPin size={24} weight="fill" className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-black">All Car Brands</h3>
                  <p className="text-gray-600">
                    From Ford to Mercedes, we work with all makes and models. Modern key fobs, transponders, and traditional keys.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#DC0000] p-3 rounded-lg flex-shrink-0">
                  <Shield size={24} weight="fill" className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-black">Years of Experience</h3>
                  <p className="text-gray-600">
                    Fully trained and insured technicians with extensive experience in automotive locksmithing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#DC0000] p-3 rounded-lg flex-shrink-0">
                  <Lightning size={24} weight="fill" className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-black">Emergency Ready</h3>
                  <p className="text-gray-600">
                    Available 24/7 for emergencies. We understand that lockouts don\'t happen at convenient times.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#DC0000] p-3 rounded-lg flex-shrink-0">
                  <Users size={24} weight="fill" className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-black">Customer First</h3>
                  <p className="text-gray-600">
                    Fair pricing, no hidden fees. We explain everything before we start work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-[#DC0000]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1716395300732-3b36a3be038e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWNobmljaWFuJTIwd29ya2luZ3xlbnwxfHx8fDE3Nzc1NjY5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional locksmith technician at work"
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-black text-white px-8 py-6 rounded-lg shadow-xl border-2 border-[#DC0000]">
              <div className="text-sm text-gray-300 mb-1">Serving</div>
              <div className="font-bold text-2xl">Meath & Beyond</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
