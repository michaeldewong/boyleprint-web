import Button from './Button';

interface HeroSectionProps {
  id: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroSection({
  id,
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroSectionProps) {
  return (
    <section
      id={id}
      className="bg-white pt-20 md:pt-32 pb-20 md:pb-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}
          <Button href={ctaLink} variant="primary">
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
