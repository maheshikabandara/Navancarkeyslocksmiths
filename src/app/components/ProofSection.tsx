import { Play, MapPin, Clock } from 'phosphor-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProofSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Real Jobs. <span className="text-[#DC0000]">Real Results.</span>
          </h2>
          <p className="text-xl text-gray-600">
            See our work in action — we do this every single day
          </p>
        </div>

        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <div className="relative aspect-video group cursor-pointer">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1707296916498-7f93df6caff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2Nrc21pdGglMjBtb2JpbGUlMjB2YW4lMjBzZXJ2aWNlfGVufDF8fHx8MTc3NzU2Njk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mobile locksmith service in action"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
              <div className="bg-[#DC0000] rounded-full p-6 group-hover:scale-110 transition-transform">
                <Play size={48} weight="fill" className="text-white" />
              </div>
            </div>
          </div>

          <div className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Seat Ibiza Key Replacement</h3>
            <p className="text-gray-300 text-lg mb-4">
              "Customer needed a spare key — completed in minutes. No need to visit a dealership, we came to them at home."
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin size={16} weight="fill" />
                Navan, Co. Meath
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} weight="fill" />
                Completed in 25 minutes
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-gray-200">
            <div className="text-4xl font-bold text-[#DC0000] mb-2">500+</div>
            <div className="text-gray-700">Jobs Completed</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-gray-200">
            <div className="text-4xl font-bold text-[#DC0000] mb-2">100%</div>
            <div className="text-gray-700">Mobile Service</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-gray-200">
            <div className="text-4xl font-bold text-[#DC0000] mb-2">24/7</div>
            <div className="text-gray-700">Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
