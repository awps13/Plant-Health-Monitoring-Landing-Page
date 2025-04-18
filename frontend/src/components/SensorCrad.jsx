// src/components/SensorCard.jsx
export default function SensorCard({ title, value, unit, children }) {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-2xl">
        {value} {unit}
      </p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
