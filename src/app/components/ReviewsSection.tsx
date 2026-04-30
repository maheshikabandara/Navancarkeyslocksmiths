import { Star, Quotes, MapPin } from 'phosphor-react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Navan',
    text: 'Lost my key at the shopping centre and they sorted it fast — highly recommend! Friendly service and fair pricing.',
    rating: 5,
  },
  {
    name: 'John D.',
    location: 'Trim',
    text: 'Locked my keys in the car outside work. They arrived in 20 minutes and got me back in without any damage. Lifesavers!',
    rating: 5,
  },
  {
    name: 'Emma K.',
    location: 'Kells',
    text: 'Needed a spare key for my VW Golf. Came to my house and programmed it on the spot. Much cheaper than the dealer!',
    rating: 5,
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Trusted by Drivers Across <span className="text-[#DC0000]">Meath</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={32} weight="fill" className="text-[#DC0000]" />
            ))}
          </div>
          <p className="text-2xl font-bold text-gray-700">
            100% Recommend <span className="text-[#DC0000]">(33 Reviews)</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-black text-white p-8 rounded-xl shadow-xl relative hover:shadow-2xl transition-all border-2 border-black hover:border-[#DC0000]"
            >
              <Quotes size={48} weight="fill" className="text-[#DC0000] mb-4 opacity-50" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} weight="fill" className="text-[#DC0000]" />
                ))}
              </div>

              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="border-t border-gray-700 pt-4">
                <div className="font-bold text-white">{review.name}</div>
                <div className="text-gray-400 text-sm flex items-center gap-1">
                  <MapPin size={14} weight="fill" />
                  {review.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.facebook.com/navancarkeyslocksmith" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border-2 border-black hover:border-[#DC0000]"
          >
            Read More Reviews on Facebook →
          </a>
        </div>
      </div>
    </section>
  );
}
