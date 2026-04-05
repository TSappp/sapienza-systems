import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-6 py-3 text-sm font-semibold rounded transition-all duration-200";
  const variants = {
    primary: "bg-amber-700 text-white hover:bg-amber-800",
    secondary: "bg-stone-900 text-white hover:bg-stone-800",
    outline:
      "border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
