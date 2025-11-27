export default function DiagonalGrid({ children, className = '' }) {
  return (
    <div className={`relative w-full bg-gray-50 ${className}`}>
      {/* Modern Diagonal Grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, rgba(99, 102, 241, 0.05) 0, rgba(99, 102, 241, 0.05) 2px, transparent 2px, transparent 40px),
            repeating-linear-gradient(-45deg, rgba(99, 102, 241, 0.05) 0, rgba(99, 102, 241, 0.05) 2px, transparent 2px, transparent 40px)
          `,
          backgroundSize: "40px 40px",
          filter: "blur(0.5px)",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
