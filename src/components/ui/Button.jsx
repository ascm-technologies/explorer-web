export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {

  const classes = {
    primary: "btn-primary",
    outline: "btn-outline",
  };

  return (
    <button
      className={`${classes[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}