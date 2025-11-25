export default function SectionTitle({ first, second, firstColor }) {
  return (
    <h2 className="text-4xl font-bold mb-6">
      <span style={{ color: firstColor }}>{first}</span>{" "}
      <span className="text-primary">{second}</span>
    </h2>
  );
}
