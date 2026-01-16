import { ReactNode } from 'react';
import Button from './Button';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'white' | 'gray';
  children?: ReactNode;
}

export default function Section({
  id,
  title,
  description,
  ctaText,
  ctaLink,
  variant = 'white',
  children,
}: SectionProps) {
  const bgColor = variant === 'gray' ? 'bg-slate-50' : 'bg-white';

  return (
    <section id={id} className={`${bgColor} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {children}
          {ctaText && ctaLink && (
            <div className="mt-10">
              <Button href={ctaLink}>{ctaText}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
