import HeaderBanner from "../Components/HeaderBanner";
import ParallaxSection from "../Components/ParallaxSection";
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
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Tithes & Offering</h2>

          <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 lg:gap-10 flex-wrap">

            {/* Tithes */}
            <div className="flex-1 min-w-[250px] p-6 rounded-2xl text-center">

              <div className="space-y-1">
                <p className="text-black">When you tithe, you’re trusting God with your finances.</p>
                <p className="text-black">Tithing is a biblical principle. God calls us to give the first 10% of our income back to Him.
                  We’ve seen God provide abundantly in our church, and we know He will provide abundantly for you and your family when you put Him first in your finances.
                  In fact, it’s the one area in the Bible where God tells you to test Him.</p>
              </div>
            </div>

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

        <div className="relative z-10 flex flex-col gap-8">

          <div className="max-w-7xl mx-auto pt-28 py-6">
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

        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-black">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-tight text-white mb-4">
              Why We Give
            </h2>
            <p className="text-sm md:text-base font-bold uppercase tracking-wide text-gray-200">
              Understanding the motivation behind our contributions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="relative h-[500px] w-full group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2670&auto=format&fit=crop"
                alt="Man clapping"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-oswald font-bold uppercase mb-2 text-white">
                  Transforming Lives
                </h3>
                <p className="text-sm font-bold uppercase leading-tight text-gray-200">
                  Our contributions create real change in the lives of those in need.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative h-[500px] w-full group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2664&auto=format&fit=crop"
                alt="People smiling in community"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-oswald font-bold uppercase mb-2 text-white">
                  General Fund
                </h3>
                <p className="text-sm font-bold uppercase leading-tight text-gray-200">
                  Which supports the majority of our ministry activities.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative h-[500px] w-full group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2670&auto=format&fit=crop"
                alt="Hands raised"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-oswald font-bold uppercase mb-2 text-white">
                  Bulding Fund
                </h3>
                <p className="text-sm font-bold uppercase leading-tight text-gray-200">
                  Which supports our building expansion projects.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>



      <ParallaxSection
        title="Your generosity makes a difference."
        desc={`“Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, 
              “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.”
              — Malachi 3:10 NIV`}
        image="img/Give-2.jpg"
      />
    </div>

  );
}
