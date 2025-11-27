export default function VolcanicEmber({ children, className = '' }) {
  return (
    <div className={`relative w-full ${className}`}>      
      {/* Modern Ember Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(255, 99, 72, 0.15), rgba(255, 159, 67, 0.05)),
            linear-gradient(45deg, rgba(87, 24, 69, 0.15), rgba(153, 27, 27, 0.08)),
            #1c1917
          `
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
