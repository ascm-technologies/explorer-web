import Card from "./Card";

export default function Section({
  children,
  className = "",
}) {
  return (
    <Card className={`section ${className}`}>
      {children}
    </Card>
  );
}