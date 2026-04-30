import { Phone, ChatCircle, FileText, Check } from 'phosphor-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - COPY */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Lost Your Car Keys or <span className="text-[#DC0000]">Locked Out?</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              We come to you anywhere in Meath — fast, reliable, no damage.
            </p>

            {/* Trust Bullets */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <Check size={24} weight="bold" className="text-[#DC0000] flex-shrink-0" />
                <span className="text-lg">24/7 Emergency Response</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={24} weight="bold" className="text-[#DC0000] flex-shrink-0" />
                <span className="text-lg">Mobile Service (We Come to You)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check size={24} weight="bold" className="text-[#DC0000] flex-shrink-0" />
                <span className="text-lg">All Car Makes & Models</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0862000066"
                className="bg-[#DC0000] hover:bg-[#B80000] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone size={24} weight="fill" />
                CALL NOW – 086 200 0066
              </a>

              <a
                href="https://wa.me/353862000066"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all border-2 border-white"
              >
                <ChatCircle size={24} weight="fill" />
                WHATSAPP US
              </a>
            </div>

            <a
              href="#quote"
              className="inline-flex items-center gap-2 mt-4 text-gray-300 hover:text-white transition-colors"
            >
              <FileText size={20} weight="fill" />
              <span className="underline">Get a Quick Quote</span>
            </a>
          </div>

          {/* RIGHT SIDE - VISUAL */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-[#DC0000]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1707296916319-037ad32dc7f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBrZXklMjBmb2IlMjBoYW5kJTIwZW1lcmdlbmN5fGVufDF8fHx8MTc3NzU2Njk2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Car key fob emergency service"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#DC0000] text-white px-6 py-4 rounded-lg shadow-xl">
              <div className="text-3xl font-bold">20-30</div>
              <div className="text-sm">Min Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
