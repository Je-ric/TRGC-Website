export default function SectionBlend({
  variant = 'fade-dark',
  height = 'h-20',
}) {
  const baseClass = `relative w-full overflow-hidden ${height}`;

  if (variant === 'paper-light') {
    return (
      <div className={`${baseClass} bg-[#0a0a0a]`}>
        <div
          className="absolute inset-0 bg-top bg-repeat-x bg-[length:auto_100%]"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/TornPaper.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-transparent" />
      </div>
    );
  }

  if (variant === 'paper-dark') {
    return (
      <div className={`${baseClass} bg-slate-50`}>
        <div
          className="absolute inset-0 bg-top bg-repeat-x bg-[length:auto_100%]"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/TornPaper.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-black/20" />
      </div>
    );
  }

  if (variant === 'fade-light') {
    return (
      <div className={`${baseClass} bg-gradient-to-b from-[#0a0a0a] via-slate-200/80 to-slate-50`} />
    );
  }

  return (
    <div className={`${baseClass} bg-gradient-to-b from-slate-50 via-slate-300/70 to-[#0a0a0a]`} />
  );
}
