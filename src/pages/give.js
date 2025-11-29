import HeaderBanner from "../Components/HeaderBanner";
import ParallaxSection from "../Components/ParallaxSection";
import DiagonalGrid from '../Components/ui/DiagonalGrid';
import VolcanicEmber from '../Components/ui/VolcanicEmber';
import Mark from "../Components/ui/Mark";
import { Wallet, Landmark, Smartphone, HandCoins } from "lucide-react";

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


      {/* Two-column layout */}
      <VolcanicEmber className="py-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 text-white">
          {/* Left: Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Why We Give</h2>
            <p className="mb-4">
              We believe that everything we have is because of God and because He gives and has
              given us so much we <strong>LOVE</strong> to give back to Him. We also believe that giving
              accomplishes many things like:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Helps you grow in your faith.</li>
              <li>Supports the ministries of TRGC.</li>
              <li>Allows you to be part of God's impact in making our community better.</li>
              <li>Puts God first in all things, including your finances.</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <img
              src="img/Give-3.jpg"
              alt="Giving"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </VolcanicEmber>


      <section
        className="relative px-6 py-16 z-10 bg-cover bg-no-repeat bg-top -mt-24" // for overlap
        style={{
          backgroundImage: "url('/img/TornPaper.jpg')",
        }}
      >

        <div className="relative z-10 flex flex-col gap-8">
          <h2 className="text-5xl font-semibold mb-8 text-center text-black drop-shadow-lg pt-24">
            Ways to <Mark>Give</Mark>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 lg:gap-10 flex-wrap">
            {/* GCash */}
            <div className="flex-1 min-w-[250px] p-6 rounded-2xl text-center backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-blue-50">
                  <Smartphone className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">GCash</h3>
              </div>
              <div className="space-y-1 text-gray-700">
                <p className="font-medium">Mary Ann Sabio</p>
                <p className="text-gray-600">0935-647-6800</p>
              </div>
            </div>

            {/* PNB */}
            <div className="flex-1 min-w-[250px] p-6 rounded-2xl text-center backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-purple-50">
                  <Landmark className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">PNB</h3>
              </div>
              <div className="space-y-1 text-gray-700">
                <p className="font-medium">The Senior Pastor of TRGC</p>
                <p className="text-gray-600">2259-1015-3350</p>
              </div>
            </div>

            {/* Maya */}
            <div className="flex-1 min-w-[250px] p-6 rounded-2x text-center backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-green-50">
                  <Wallet className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Maya</h3>
              </div>
              <div className="space-y-1 text-gray-700">
                <p className="font-medium">Mary Ann Sabio</p>
                <p className="text-gray-600">0919-233-8055</p>
              </div>
            </div>

            {/* In Person */}
            <div className="flex-1 min-w-[250px] p-6 rounded-2xl text-center backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-orange-50">
                  <HandCoins className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">In Person</h3>
              </div>
              <p className="text-gray-700">
                You may give personally during our worship services at the local church.
              </p>
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
