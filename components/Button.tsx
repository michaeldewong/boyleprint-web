import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary:
      'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900',
    secondary:
      'bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-600',
    ghost:
      'bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-50 focus:ring-slate-900',
    light:
      'bg-white text-slate-950 border border-slate-200/90 shadow-md hover:bg-slate-100 hover:border-slate-300 hover:shadow-lg focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-white',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
