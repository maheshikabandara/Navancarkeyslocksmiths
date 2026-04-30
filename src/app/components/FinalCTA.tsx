import { Phone, ChatCircle, WarningCircle, Lightning } from 'phosphor-react';

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#DC0000] via-[#B80000] to-black text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <WarningCircle size={80} weight="fill" className="mx-auto mb-6 animate-pulse" />
        
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Locked Out or Lost Your Keys?
        </h2>
        
        <p className="text-2xl md:text-3xl mb-12 opacity-90">
          We\'re on the way — call now and get back on the road fast.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="tel:0862000066"
            className="bg-white hover:bg-gray-100 text-[#DC0000] px-10 py-6 rounded-xl font-bold text-xl flex items-center gap-3 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <Phone size={32} weight="fill" />
            CALL NOW: 086 200 0066
          </a>

          <a
            href="https://wa.me/353862000066"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white px-10 py-6 rounded-xl font-bold text-xl flex items-center gap-3 transition-all border-2 border-white/50 hover:border-white"
          >
            <ChatCircle size={32} weight="fill" />
            WHATSAPP US
          </a>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm inline-flex items-center gap-3 px-8 py-4 rounded-lg">
          <Lightning size={20} weight="fill" />
          <p className="text-lg">
            Average Response Time: <span className="font-bold">20-30 Minutes</span>
          </p>
        </div>

        <div className="mt-8 text-sm opacity-75">
          <p>Available 24/7 • Mobile Service • All Car Makes & Models</p>
        </div>
      </div>
    </section>
  );
}
