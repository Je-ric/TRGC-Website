import SectionTitle from "./pageTitle"; // or correct relative path

export default function PageCover() {
  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage: `url('/assets/images/bg/contact-bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-[#1a2235] bg-opacity-60 backdrop-blur-sm"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTitle
          first="Get in"
          second="Touch"
          firstColor="#FFFFFF"
        />

        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Have questions about our programs? Want to partner with us?
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
    </div>
  );
}
