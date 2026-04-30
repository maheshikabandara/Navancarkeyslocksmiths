import { Key, Radio, WarningCircle, Gear, Phone } from 'phosphor-react';

const services = [
  {
    icon: Key,
    title: 'Car Key Replacement',
    description: 'Lost your only key? We can create a new one on-site for all makes and models.',
  },
  {
    icon: Key,
    title: 'Spare Car Keys',
    description: 'Get a backup key made before disaster strikes. Quick and affordable.',
  },
  {
    icon: Radio,
    title: 'Key Fob Programming',
    description: 'Remote not working? We program and sync key fobs to your vehicle.',
  },
  {
    icon: WarningCircle,
    title: 'Emergency Lockout',
    description: 'Locked your keys in the car? We\'ll get you back in without damage.',
  },
  {
    icon: Gear,
    title: 'ECU Tuning & Remapping',
    description: 'Performance tuning and engine management programming services available.',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            How We Can Help You <span className="text-[#DC0000]">Fast</span>
          </h2>
          <p className="text-xl text-gray-600">
            Expert solutions when you need them most
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-black text-white p-8 rounded-xl hover:bg-gray-900 transition-all hover:shadow-2xl group border-2 border-black hover:border-[#DC0000]"
              >
                <div className="bg-[#DC0000] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={32} weight="fill" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Not sure what you need? Call us and we\'ll advise you.
          </p>
          <a
            href="tel:0862000066"
            className="inline-flex items-center gap-2 bg-[#DC0000] hover:bg-[#B80000] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg"
          >
            <Phone size={20} weight="fill" />
            086 200 0066
          </a>
        </div>
      </div>
    </section>
  );
}
