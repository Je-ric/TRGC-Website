import giveImage from "../assets/img/test-image.webp";

export default function Give() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Give</h1>
        <p className="mt-4 text-gray-700">
          Be a blessing by giving and supporting God's work through our ministry.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Why We Give</h2>
          <p className="mb-4 text-gray-700">
            We believe that everything we have is because of God and because He gives and has
            given us so much we <strong>LOVE</strong> to give back to Him. We also believe that giving
            accomplishes many things like:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Helps you grow in your faith.</li>
            <li>Supports the ministry of Cornerstone.</li>
            <li>Allows you to be part of God's impact in making our community better.</li>
            <li>Puts God first in all things, including your finances.</li>
          </ul>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src={giveImage}
            alt="Giving"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}