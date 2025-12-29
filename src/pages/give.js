import HeaderBanner from "../Components/HeaderBanner";
// import ParallaxSection from "../Components/ParallaxSection";
import DiagonalGrid from '../Components/ui/DiagonalGrid';
import PrismaticAurora from '../Components/ui/PrismaticAurora';
import Mark from "../Components/ui/Mark";
import Heading from "../Components/ui/Heading";
import { Wallet, Landmark, Smartphone, HandCoins } from "lucide-react";

const images = [
  "https://csspicker.dev/api/image/?q=church+gathering+indoor&image_type=photo",
  "https://csspicker.dev/api/image/?q=people+dancing+lights&image_type=photo",
  "https://csspicker.dev/api/image/?q=stage+lights+concert&image_type=photo",
  "https://csspicker.dev/api/image/?q=people+food+service&image_type=photo",
  "https://csspicker.dev/api/image/?q=worship+dancing+church&image_type=photo",
  "https://csspicker.dev/api/image/?q=church+community+gathering&image_type=photo",
  "https://csspicker.dev/api/image/?q=group+volunteers+outdoor&image_type=photo",
  "https://csspicker.dev/api/image/?q=worship+concert+crowd&image_type=photo",
  "https://csspicker.dev/api/image/?q=church+presentation+screen&image_type=photo"
];

export default function Give() {
  return (
    <div>
      <HeaderBanner
        title="Give"
        image="img/Give.jpg"
      />

      <DiagonalGrid>
        <section className="max-w-7xl mx-auto px-6 py-24">

          {/* Section Label */}
          <p className="text-sm uppercase tracking-[0.3em] text-black/70 text-center mb-6">
            Giving
          </p>

          {/* Main Statement */}
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center leading-tight max-w-4xl mx-auto">
            Tithes & Offering
          </h2>

          {/* Divider */}
          <div className="mt-10 mb-14 h-px bg-black/30 max-w-xl mx-auto" />

          {/* Text Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-black">

            <p className="text-lg leading-relaxed">
              <span className="font-semibold">Tithing is an act of trust.</span><br />
              When you give, you are not giving out of obligation, but out of faith —
              placing God first in your finances and acknowledging Him as your
              provider.
            </p>

            <p className="text-lg leading-relaxed">
              Scripture teaches us to return the first
              <span className="font-semibold"> ten percent </span>
              to the Lord. This principle has sustained the church, strengthened
              families, and opened the door for God’s provision.
            </p>

            <p className="text-lg leading-relaxed md:col-span-2 text-center italic text-black/80">
              “Bring the whole tithe into the storehouse… and see if I will not open
              the floodgates of heaven.” — Malachi 3:10
            </p>

          </div>

        </section>
      </DiagonalGrid>



      <PrismaticAurora className="py-20 pb-56 relative overflow-hidden bg-black">
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center gap-16">

          {/* Section Title */}
          <h2 className="text-5xl font-semibold text-center text-white drop-shadow-lg animate-fade-in">
            Ways to <Mark color="white" backgroundColor="#EF4444">Give</Mark>
          </h2>

          {/* Giving Options - Modern Grid without Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">

            {/* GCash */}
            <div className="flex flex-col items-center text-center space-y-4 group cursor-pointer transition-all duration-500 hover:scale-110 animate-slide-up">
              <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 shadow-lg group-hover:shadow-orange-500/50 transition-shadow duration-500">
                <Smartphone className="w-10 h-10 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">GCash</h3>
              <div className="space-y-1 text-gray-200">
                <p className="font-medium">Mary Ann Sabio</p>
                <p>0935-647-6800</p>
              </div>
            </div>

            {/* PNB */}
            <div className="flex flex-col items-center text-center space-y-4 group cursor-pointer transition-all duration-500 hover:scale-110 animate-slide-up animation-delay-200">
              <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 shadow-lg group-hover:shadow-orange-500/50 transition-shadow duration-500">
                <Landmark className="w-10 h-10 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">PNB</h3>
              <div className="space-y-1 text-gray-200">
                <p className="font-medium">The Senior Pastor of TRGC</p>
                <p>2259-1015-3350</p>
              </div>
            </div>

            {/* Maya */}
            <div className="flex flex-col items-center text-center space-y-4 group cursor-pointer transition-all duration-500 hover:scale-110 animate-slide-up animation-delay-400">
              <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 shadow-lg group-hover:shadow-orange-500/50 transition-shadow duration-500">
                <Wallet className="w-10 h-10 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">Maya</h3>
              <div className="space-y-1 text-gray-200">
                <p className="font-medium">Mary Ann Sabio</p>
                <p>0919-233-8055</p>
              </div>
            </div>

            {/* In Person */}
            <div className="flex flex-col items-center text-center space-y-4 group cursor-pointer transition-all duration-500 hover:scale-110 animate-slide-up animation-delay-600">
              <div className="p-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 shadow-lg group-hover:shadow-orange-500/50 transition-shadow duration-500">
                <HandCoins className="w-10 h-10 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300">In Person</h3>
              <p className="text-gray-200 max-w-xs">
                You may give personally during our worship services at the local church.
              </p>
            </div>

          </div>

        </div>
      </PrismaticAurora>




      <section
        className="relative px-6 py-16 z-10 bg-no-repeat bg-top -mt-24" // for overlap
        style={{
          backgroundImage: "url('/img/TornPaper.jpg')",
        }}
      >

        <div className="relative z-10 flex flex-col gap-8 max-w-7xl mx-auto pt-28 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left Text Column */}
            <div className="flex flex-col justify-center h-screen space-y-6">
              <Heading>
                WHY WE GIVE
              </Heading>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold text-black">
                    We exist to make Heaven more crowded by helping people know God, live on purpose and go change the world.
                  </span>
                </p>

                <p className="text-base leading-relaxed text-gray-600">
                  We believe that everything we have is because of God and because He gives and has given us so much we <span >LOVE</span> to give back to Him.
                </p>

                <p className="text-base leading-relaxed">
                  God tells us in His Word that He loves a cheerful giver, which is why we always want to create opportunities to give of our resources as He leads us.{' '}
                  <span className="font-bold text-black">
                    There is zero obligation to give, but rather an open avenue of worship to connect fully with the heart of God.
                  </span>
                </p>
              </div>
            </div>

            {/* Right 3x3 Image Grid */}
            <div className="grid grid-cols-3 gap-3">
              {images.map((src, index) => (
                <div key={index} className="aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt={`Community activity ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* <ParallaxSection
        title="Your generosity makes a difference."
        desc={`“Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, 
              “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.”
              — Malachi 3:10 NIV`}
        image="img/Give-2.jpg"
      /> */}
    </div>

  );
}
