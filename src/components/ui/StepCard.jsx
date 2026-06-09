export default function StepCard({
  number,
  title,
  desc,
}) {
  return (
    <div className="step-card">

      <div className="step-circle">
        {number}
      </div>

      <h3>
        {title}
      </h3>

      <p className="text-muted">
        {desc}
      </p>

    </div>
  );
}