import { Star, Quotes } from 'phosphor-react';

export function Testimonials() {
  const reviews = [
    {
      text: "Saved me from a total nightmare. Lost my keys near Trim Castle. Navan Car Keys arrived fast and had a new key cut in no time. Top quality service!",
      name: "Sarah M.",
      location: "Trim"
    },
    {
      text: "Locked my keys in the car with the engine running. They arrived in 20 minutes and had me back inside with absolutely zero damage to the car. Lifesavers!",
      name: "John D.",
      location: "Navan"
    },
    {
      text: "Fantastic service! Dropped everything they were doing to help me late at night on the M3. Really professional and highly recommended.",
      name: "Michael K.",
      location: "Kells"
    }
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-20 bg-white">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
          Trusted by Drivers Across <span className="text-red-600">Meath</span>
        </h2>
        <div className="flex justify-center gap-1.5 mb-4">
          {[1,2,3,4,5].map(i => <Star key={i} size={32} weight="fill" className="text-yellow-400 drop-shadow-md" />)}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#0b101b] text-white p-10 rounded-3xl shadow-2xl shadow-gray-900/20 relative mt-8 border border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -top-8 left-8 bg-red-600 p-4 rounded-full shadow-lg shadow-red-600/30">
              <Quotes size={32} weight="fill" className="text-white" />
            </div>
            
            <div className="flex gap-1.5 mb-8 mt-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={20} weight="fill" className="text-yellow-400" />)}
            </div>
            
            <p className="text-gray-300 mb-8 italic text-lg leading-relaxed font-medium">"{review.text}"</p>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="font-bold text-xl mb-1 text-white">{review.name}</p>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">{review.location}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-20">
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-10 rounded-xl transition-colors shadow-sm text-lg border border-gray-200">
          Read More Reviews on Google
        </button>
      </div>
    </section>
  );
}
