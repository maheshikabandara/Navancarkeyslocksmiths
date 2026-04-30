import svgPaths from "./svg-3y9bx4m8zm";
import heroImg from "../hero.png";
import workImg from "../work.png";
import aboutImg from "../about.png";

function IconBase() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="IconBase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_1605)" id="IconBase" opacity="0.913184">
          <g id="Vector" />
          <path d={svgPaths.p3b5b6180} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_1605">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="flex gap-[12px] items-center relative size-full">
        <IconBase />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] md:text-[16px] text-white whitespace-normal">{`LOCKED OUT? WE'RE 20–30 MINUTES AWAY`}</p>
      </div>
    </div>
  );
}

function IconBase1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="IconBase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_6_1599)" id="IconBase">
          <g id="Vector" />
          <path d={svgPaths.p1678ab00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_6_1599">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="flex gap-[8px] items-center relative size-full">
        <IconBase1 />
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[14px] md:text-[16px] text-white whitespace-nowrap">Call Now: 086 200 0066</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="hidden md:block relative shrink-0" data-name="Text">
      <div className="flex items-start relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] text-white whitespace-nowrap">Available 24/7</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="flex gap-[16px] items-center relative size-full">
        <Link />
        <Text />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between relative shrink-0 w-full max-w-7xl mx-auto" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function EmergencyBar() {
  return (
    <div className="bg-[#c50101] flex flex-col items-start px-4 md:px-[80px] py-[12px] relative shadow-md shrink-0 w-full" data-name="EmergencyBar">
      <Container />
    </div>
  );
}

function Frame10() {
  return (
    <div className="hidden lg:block relative shrink-0">
      <div className="flex font-['Inter:Medium',sans-serif] font-medium gap-[24px] items-center justify-center text-[16px] text-white whitespace-nowrap">
        <p className="cursor-pointer hover:text-gray-300">Home</p>
        <p className="cursor-pointer hover:text-gray-300">About</p>
        <p className="cursor-pointer hover:text-gray-300">Contact</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="flex gap-[8px] items-center relative size-full">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#fdfdfd] text-[16px] whitespace-nowrap">086 200 0066</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="hidden md:flex relative shrink-0" data-name="Container">
      <div className="flex gap-[8px] items-center relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[#fdfdfd] text-[14px] whitespace-nowrap">Serving Meath</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="flex gap-[16px] md:gap-[24px] items-center relative size-full">
        <Link1 />
        <Container5 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-between relative shrink-0 w-full max-w-7xl mx-auto" data-name="Container">
      <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px] text-white whitespace-nowrap">Navan Car Keys Locksmiths</p>
      <Frame10 />
      <Container4 />
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex flex-col py-4 px-4 md:px-[80px] relative shadow-md w-full" data-name="Navbar">
      <Container3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex flex-col gap-4 items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex gap-3 items-center relative shrink-0 w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-white">✓ 24/7 Emergency Response</p>
      </div>
      <div className="flex gap-3 items-center relative shrink-0 w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-white">✓ Mobile Service (We Come to You)</p>
      </div>
      <div className="flex gap-3 items-center relative shrink-0 w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-white">✓ All Car Makes & Models</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#c50101] relative rounded-[12px] shadow-md shrink-0 w-full sm:w-auto cursor-pointer" data-name="Link">
      <div className="flex gap-[8px] justify-center items-center px-6 py-4 relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] text-white whitespace-nowrap">CALL NOW – 086 200 0066</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full sm:w-auto cursor-pointer" data-name="Link">
      <div className="flex gap-[8px] justify-center items-center px-6 py-4 relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[16px] md:text-[18px] text-black whitespace-nowrap">WHATSAPP US</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="flex flex-col gap-[28px] items-start relative shrink-0 w-full lg:w-1/2" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#fdfdfd] text-[20px] md:text-[24px] w-full">Mobile Locksmith</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold text-white w-full leading-tight text-[40px] md:text-[60px] lg:text-[70px]">
        Lost Your Car Keys or <span className="text-[#c50101]">Locked Out?</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal text-[#d1d5dc] text-[18px] md:text-[24px] w-full max-w-lg">We come to you anywhere in Meath, fast, reliable, no damage.</p>
      <Container7 />
      <Container11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[300px] sm:h-[400px] lg:h-[800px] relative shrink-0 w-full lg:w-1/2 rounded-2xl overflow-hidden mt-8 lg:mt-0">
      <img alt="" className="absolute inset-0 object-cover size-full" src={heroImg} />
    </div>
  );
}

function Hero() {
  return (
    <div className="relative w-full max-w-7xl mx-auto" data-name="Hero">
      <div className="flex flex-col lg:flex-row items-center justify-between size-full px-4 md:px-[80px] py-[40px] lg:py-[100px]">
        <Container6 />
        <Frame />
      </div>
    </div>
  );
}

function HeroNav() {
  return (
    <div className="flex flex-col min-h-screen items-start relative w-full bg-gradient-to-br from-black via-gray-900 to-black" data-name="Hero + Nav">
      <Navbar />
      <Hero />
    </div>
  );
}

function EmergencySteps() {
  return (
    <div className="bg-white py-16 px-4 md:px-[80px] w-full" data-name="Emergency Steps">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[36px] text-black">Locked Out? Follow These 3 Steps</p>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[20px] text-gray-600 mt-2">{`We'll guide you through this, stay calm, we're here to help`}</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 w-full justify-center">
          {/* Step 1 */}
          <div className="bg-[#fdfdfd] border-2 border-[#c50101] p-8 rounded-[14px] flex-1 flex flex-col items-center text-center gap-4">
            <div className="bg-[#c50101] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[12px] flex items-center justify-center text-white font-bold text-2xl md:text-3xl">1</div>
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px] text-black">Stay where you are</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-gray-600">{`Don't panic. Note your exact location and keep safe.`}</p>
          </div>
          {/* Step 2 */}
          <div className="bg-[#fdfdfd] border-2 border-[#c50101] p-8 rounded-[14px] flex-1 flex flex-col items-center text-center gap-4">
            <div className="bg-[#c50101] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[12px] flex items-center justify-center text-white font-bold text-2xl md:text-3xl">2</div>
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px] text-black">Call us immediately</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-gray-600">{`We'll answer right away and get details about your situation.`}</p>
            <div className="bg-[#c50101] px-4 py-2 rounded-[10px] text-white font-bold">086 200 0066</div>
          </div>
          {/* Step 3 */}
          <div className="bg-[#fdfdfd] border-2 border-[#c50101] p-8 rounded-[14px] flex-1 flex flex-col items-center text-center gap-4">
            <div className="bg-[#c50101] w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-[12px] flex items-center justify-center text-white font-bold text-2xl md:text-3xl">3</div>
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px] text-black">{`We'll be there in 20-30 minutes`}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[18px] text-gray-600">Our mobile unit will arrive fast and get you back on the road.</p>
          </div>
        </div>

        <div className="bg-[#c50101] rounded-[10px] w-full max-w-4xl p-4 text-center">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] md:text-[20px] text-white">{`This is what we do every day. You're in safe hands.`}</p>
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="bg-[#f6f6f6] py-16 px-4 md:px-[80px] w-full" data-name="ServicesSection">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[48px] text-black">
            {`How We Can Help You `} <span className="text-[#c50101]">Fast</span>
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[20px] text-gray-600 mt-2">Expert solutions when you need them most</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black border-2 border-black rounded-[14px] p-8 flex flex-col gap-4 text-white">
             <div className="bg-[#c50101] w-16 h-16 rounded-[10px] flex items-center justify-center">🔑</div>
             <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px]">Car Key Replacement</p>
             <p className="text-gray-300">Lost your only key? We can create a new one on-site for all makes and models.</p>
          </div>
          <div className="bg-white rounded-[14px] p-8 flex flex-col gap-4 text-black shadow-sm">
             <div className="bg-[#c50101] w-16 h-16 rounded-[10px] flex items-center justify-center text-white">🔑</div>
             <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px]">Spare Car Keys</p>
             <p className="text-gray-600">Get a backup key made before disaster strikes. Quick and affordable.</p>
          </div>
          <div className="bg-white rounded-[14px] p-8 flex flex-col gap-4 text-black shadow-sm">
             <div className="bg-[#c50101] w-16 h-16 rounded-[10px] flex items-center justify-center text-white">📱</div>
             <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px]">Key Fob Programming</p>
             <p className="text-gray-600">Remote not working? We program and sync key fobs to your vehicle.</p>
          </div>
          <div className="bg-white rounded-[14px] p-8 flex flex-col gap-4 text-black shadow-sm">
             <div className="bg-[#c50101] w-16 h-16 rounded-[10px] flex items-center justify-center text-white">🔓</div>
             <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px]">Emergency Lockout</p>
             <p className="text-gray-600">{`Locked your keys in the car? We'll get you back in without damage.`}</p>
          </div>
          <div className="bg-white rounded-[14px] p-8 flex flex-col gap-4 text-black shadow-sm">
             <div className="bg-[#c50101] w-16 h-16 rounded-[10px] flex items-center justify-center text-white">💻</div>
             <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px]">ECU Tuning & Remapping</p>
             <p className="text-gray-600">Performance tuning and engine management programming services available.</p>
          </div>
        </div>

        <div className="text-center mt-4 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[18px] text-[#303030]">{`Not sure what you need? Call us and we'll advise you.`}</p>
          <div className="bg-[#c50101] px-6 py-3 rounded-[10px] text-white font-bold cursor-pointer hover:bg-red-800 transition">086 200 0066</div>
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black border-y-4 border-[#c50101] py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[#c50101] text-4xl mb-2">🚗</div>
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-white">100% Mobile Service</p>
          <p className="font-['Inter:Regular',sans-serif] text-gray-400">We come to you</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[#c50101] text-4xl mb-2">⏱️</div>
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-white">Fast Response Time</p>
          <p className="font-['Inter:Regular',sans-serif] text-gray-400">20-30 minute arrival</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[#c50101] text-4xl mb-2">⭐</div>
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-white">5-Star Rated</p>
          <p className="font-['Inter:Regular',sans-serif] text-gray-400">Trusted by locals</p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-[#c50101] text-4xl mb-2">🛠️</div>
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[18px] md:text-[20px] text-white">Expert Technicians</p>
          <p className="font-['Inter:Regular',sans-serif] text-gray-400">Fully qualified</p>
        </div>
      </div>
    </div>
  );
}

function ProofSection() {
  return (
    <div className="bg-white py-16 px-4 md:px-[80px] w-full" data-name="ProofSection">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <div className="text-center w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[48px] text-black">
            {`Real Jobs. `} <span className="text-[#c50101]">Real Results.</span>
          </p>
          <p className="font-['Inter:Regular',sans-serif] font-normal text-[16px] md:text-[20px] text-gray-600 mt-2">See our work in action, we do this every single day</p>
        </div>

        <div className="bg-black rounded-[16px] overflow-hidden shadow-2xl w-full max-w-5xl">
          <div className="relative h-[300px] md:h-[500px] w-full group">
            <img alt="Real jobs" className="absolute inset-0 object-cover size-full" src={workImg} />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition group-hover:bg-black/30 cursor-pointer">
              <div className="bg-[#c50101] rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center hover:scale-105 transition-transform">
                <div className="w-8 h-8 md:w-10 md:h-10 ml-2 border-y-[16px] border-y-transparent border-l-[24px] border-l-white"></div>
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col gap-4">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[20px] md:text-[24px] text-white">Seat Ibiza Key Replacement</p>
            <p className="font-['Inter:Regular',sans-serif] text-gray-300">Customer needed a spare key, completed in minutes. No need to visit a dealership, we came to them at home.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <span className="text-gray-400 text-sm">📍 Navan, Co. Meath</span>
              <span className="text-gray-400 text-sm">⏱️ Completed in 25 minutes</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl">
          <div className="bg-white border flex-1 p-6 rounded-[14px] shadow-sm text-center">
            <p className="text-[#c50101] font-bold text-3xl md:text-4xl mb-1">500+</p>
            <p className="text-gray-600">Jobs Completed</p>
          </div>
          <div className="bg-white border flex-1 p-6 rounded-[14px] shadow-sm text-center">
            <p className="text-[#c50101] font-bold text-3xl md:text-4xl mb-1">100%</p>
            <p className="text-gray-600">Mobile Service</p>
          </div>
          <div className="bg-white border flex-1 p-6 rounded-[14px] shadow-sm text-center">
            <p className="text-[#c50101] font-bold text-3xl md:text-4xl mb-1">24/7</p>
            <p className="text-gray-600">Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewsSection() {
  return (
    <div className="bg-[#f6f6f6] py-16 px-4 md:px-[80px] w-full" data-name="ReviewsSection">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        <div className="text-center w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[28px] md:text-[48px] text-black mb-4">
            {`Trusted by Drivers Across `} <span className="text-[#c50101]">Meath</span>
          </p>
          <div className="flex justify-center gap-2 text-[#FDCB02] text-2xl">
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 w-full justify-center">
          <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-[14px] text-white flex-1 flex flex-col gap-4 shadow-xl border border-gray-800">
            <div className="text-[#FDCB02]">⭐⭐⭐⭐⭐</div>
            <p className="font-['Inter:Regular',sans-serif] text-gray-300 flex-1 italic">{`"Lost my key at the shopping centre and they sorted it fast, highly recommend! Friendly service and fair pricing."`}</p>
            <div className="border-t border-gray-700 pt-4 mt-2">
              <p className="font-bold">Sarah M.</p>
              <p className="text-sm text-gray-400">Navan</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-[14px] text-white flex-1 flex flex-col gap-4 shadow-xl border border-gray-800">
            <div className="text-[#FDCB02]">⭐⭐⭐⭐⭐</div>
            <p className="font-['Inter:Regular',sans-serif] text-gray-300 flex-1 italic">{`"Locked my keys in the car outside work. They arrived in 20 minutes and got me back in without any damage. Lifesavers!"`}</p>
            <div className="border-t border-gray-700 pt-4 mt-2">
              <p className="font-bold">John D.</p>
              <p className="text-sm text-gray-400">Trim</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-black via-gray-900 to-black p-8 rounded-[14px] text-white flex-1 flex flex-col gap-4 shadow-xl border border-gray-800">
            <div className="text-[#FDCB02]">⭐⭐⭐⭐⭐</div>
            <p className="font-['Inter:Regular',sans-serif] text-gray-300 flex-1 italic">{`"Needed a spare key for my VW Golf. Came to my house and programmed it on the spot. Much cheaper than the dealer!"`}</p>
            <div className="border-t border-gray-700 pt-4 mt-2">
              <p className="font-bold">Emma K.</p>
              <p className="text-sm text-gray-400">Kells</p>
            </div>
          </div>
        </div>

        <div className="bg-black hover:bg-gray-800 transition py-4 px-8 rounded-[10px] cursor-pointer text-center">
          <p className="font-bold text-[16px] md:text-[18px] text-white">Read More Reviews on Google →</p>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-[#f9fafb] py-16 px-4 md:px-[80px] w-full" data-name="AboutSection">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col gap-6">
          <p className="font-['Inter:Bold',sans-serif] font-bold text-[32px] md:text-[48px] text-black leading-tight">
            {`Your Local `} <span className="text-[#c50101]">Car Key Specialists</span>
          </p>
          <p className="text-[#364153] text-[16px] md:text-[20px]">{`We're a mobile locksmith service based in Navan, serving Meath and surrounding areas. We specialize in car keys, emergency lockouts, and key fob programming.`}</p>
          
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex gap-4 items-start">
              <div className="bg-[#c50101] w-12 h-12 rounded-lg shrink-0 flex items-center justify-center text-white text-xl">🚘</div>
              <div>
                <p className="font-bold text-[18px] text-black">All Car Brands</p>
                <p className="text-gray-600 mt-1">From Ford to Mercedes, we work with all makes and models. Modern key fobs, transponders, and traditional keys.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#c50101] w-12 h-12 rounded-lg shrink-0 flex items-center justify-center text-white text-xl">⭐</div>
              <div>
                <p className="font-bold text-[18px] text-black">Years of Experience</p>
                <p className="text-gray-600 mt-1">Fully trained and insured technicians with extensive experience in automotive locksmithing.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-[#c50101] w-12 h-12 rounded-lg shrink-0 flex items-center justify-center text-white text-xl">🚨</div>
              <div>
                <p className="font-bold text-[18px] text-black">Emergency Ready</p>
                <p className="text-gray-600 mt-1">{`Available 24/7 for emergencies. We understand that lockouts don't happen at convenient times.`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="border-4 border-[#c50101] rounded-[14px] overflow-hidden h-[400px] md:h-[600px] shadow-xl relative">
            <img alt="About us" className="object-cover size-full" src={aboutImg} />
          </div>
          {/* Floating Badge */}
          <div className="absolute top-10 right-[-10px] md:right-[-20px] bg-white border-2 border-[#c50101] rounded-lg p-4 shadow-lg">
            <p className="text-sm text-gray-600">Serving</p>
            <p className="font-bold text-[18px] md:text-[22px] text-black">Meath & Beyond</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <div className="bg-gradient-to-br from-red-800 to-[#5F0000] w-full" data-name="Final CTA">
      <div className="max-w-7xl mx-auto px-4 md:px-[80px] py-[80px] md:py-[120px] flex flex-col items-center justify-center text-center gap-8">
        <p className="font-['Inter:Bold',sans-serif] font-bold text-[36px] md:text-[60px] text-white leading-tight">Locked Out or Lost Your Keys?</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium text-[20px] md:text-[30px] text-white">{`We're on the way, call now and get back on the road fast.`}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <div className="bg-white rounded-[14px] shadow-xl px-8 py-4 cursor-pointer hover:bg-gray-100 transition flex items-center justify-center gap-3">
             <span className="text-[#dc0000] text-xl">📞</span>
             <p className="font-bold text-[#dc0000] text-[18px] md:text-[20px]">CALL NOW: 086 200 0066</p>
          </div>
          <div className="bg-black/30 border border-white/50 rounded-[14px] px-8 py-4 cursor-pointer hover:bg-black/50 transition flex items-center justify-center gap-3">
             <span className="text-white text-xl">💬</span>
             <p className="font-bold text-white text-[18px] md:text-[20px]">WHATSAPP US</p>
          </div>
        </div>

        <div className="bg-white/10 px-6 py-3 rounded-[10px] flex items-center gap-2 mt-4">
          <span className="text-white text-lg">⏱️</span>
          <p className="text-white text-[16px] md:text-[18px]">{`Average Response Time: `} <span className="font-bold">20-30 Minutes</span></p>
        </div>

        <p className="text-white/70 text-sm mt-4">{`Available 24/7 • Mobile Service • All Car Makes & Models`}</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black border-t-4 border-[#c50101] w-full" data-name="Footer">
      <div className="max-w-7xl mx-auto px-4 md:px-[80px] py-12 md:py-16 flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row gap-12 justify-between w-full">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[#c50101] text-[20px] md:text-[24px]">Navan Car Keys Locksmiths</p>
            <div className="flex flex-col gap-2 text-white">
              <p>📞 086 200 0066</p>
              <p>✉️ navancarkeys@gmail.com</p>
              <p>📍 Meath</p>
            </div>
          </div>
          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[#c50101] text-[20px]">Service Areas</p>
            <div className="flex gap-8 text-gray-300">
              <div className="flex flex-col gap-2">
                <p>Navan</p>
                <p>Kells</p>
                <p>Dunshaughlin</p>
                <p>Slane</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Trim</p>
                <p>Athboy</p>
                <p>Ashbourne</p>
                <p>Ratoath</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-2">+ surrounding areas</p>
          </div>
          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[#c50101] text-[20px]">Our Services</p>
            <div className="flex flex-col gap-2 text-gray-300">
              <p>• Car Key Replacement</p>
              <p>• Spare Car Keys</p>
              <p>• Key Fob Programming</p>
              <p>• Emergency Lockout</p>
              <p>• ECU Tuning & Remapping</p>
            </div>
            <div className="mt-4 flex items-center gap-2 text-white cursor-pointer hover:text-blue-400">
              <span>🔵</span> Follow us on Facebook
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-gray-400 text-sm">© 2026 Navan Car Keys Locksmiths. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Fully Insured • Licensed • Professional Service</p>
        </div>
      </div>
    </div>
  );
}

export default function NavanCarKeysLocksmiths() {
  return (
    <div className="w-full flex flex-col font-sans overflow-x-hidden" data-name="Navan Car Keys Locksmiths">
      <EmergencyBar />
      <HeroNav />
      <EmergencySteps />
      <ServicesSection />
      <TrustStrip />
      <ProofSection />
      <ReviewsSection />
      <AboutSection />
      <FinalCta />
      <Footer />
    </div>
  );
}
