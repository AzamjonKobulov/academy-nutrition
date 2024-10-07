export default function Button({
  variant = "",
  children,
  className,
  onClick,
  ...props
}) {
  const variantStyle = {
    primary:
      "text-white bg-brand-primary border border-transparent hover:bg-white hover:text-brand-primary hover:border-brand-primary transition-all duration-300",
    outline:
      "text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300",
  };

  const classes = `${variantStyle[variant]} ${className}`;

  return (
    <button className={classes} {...props} onClick={onClick}>
      {children}
    </button>
  );
}
