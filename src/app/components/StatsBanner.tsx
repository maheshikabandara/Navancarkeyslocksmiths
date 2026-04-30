import { Car, Clock, Star, ShieldCheck } from 'phosphor-react';

export function StatsBanner() {
  return (
    <div className="bg-[#0b101b] text-white py-16 px-4 md:px-20 border-t-4 border-red-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
        <div className="flex flex-col items-center gap-4 group">
          <div className="bg-gray-900 p-4 rounded-2xl group-hover:bg-red-600/10 transition-colors border border-gray-800">
            <Car size={48} weight="fill" className="text-red-500 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h4 className="font-bold text-xl mb-1">100% Mobile Service</h4>
            <p className="text-gray-400 font-medium">We come to you</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 group">
          <div className="bg-gray-900 p-4 rounded-2xl group-hover:bg-red-600/10 transition-colors border border-gray-800">
            <Clock size={48} weight="fill" className="text-red-500 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h4 className="font-bold text-xl mb-1">Fast Response Time</h4>
            <p className="text-gray-400 font-medium">20-30 minute average</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 group">
          <div className="bg-gray-900 p-4 rounded-2xl group-hover:bg-red-600/10 transition-colors border border-gray-800">
            <Star size={48} weight="fill" className="text-red-500 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h4 className="font-bold text-xl mb-1">5-Star Rated</h4>
            <p className="text-gray-400 font-medium">Trusted locally</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-4 group">
          <div className="bg-gray-900 p-4 rounded-2xl group-hover:bg-red-600/10 transition-colors border border-gray-800">
            <ShieldCheck size={48} weight="fill" className="text-red-500 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <h4 className="font-bold text-xl mb-1">Expert Technicians</h4>
            <p className="text-gray-400 font-medium">Zero damage guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}
