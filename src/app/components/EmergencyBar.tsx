import { WarningCircle, Phone } from 'phosphor-react';

export function EmergencyBar() {
  return (
    <div className="bg-[#c50101] flex items-center justify-between px-4 md:px-20 py-3 text-white shadow-md relative z-50">
      <div className="flex items-center gap-3">
        <WarningCircle size={24} weight="fill" className="animate-pulse" />
        <p className="font-semibold text-xs sm:text-sm md:text-base uppercase tracking-wide">
          Locked Out? We're 20-30 Minutes Away
        </p>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <a href="tel:0862000066" className="font-bold flex items-center gap-2 hover:text-gray-200 transition-colors">
          <Phone size={20} weight="fill" />
          Call Now: 086 200 0066
        </a>
        <span className="text-sm border-l border-red-400 pl-4 text-red-100">Available 24/7</span>
      </div>
    </div>
  );
}
