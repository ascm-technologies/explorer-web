export default function FeatureCard({
  icon,
  title,
  desc,
}) {
  return (
    <div className="feature-card">

      <div className="feature-icon">
        {icon}
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