import type { ReactNode } from 'react';

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  children: ReactNode;
};

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function LegalPageLayout({ title, lastUpdated, intro, children }: LegalPageLayoutProps) {
  return (
    <article className="bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <header className="mb-10 pb-8 border-b border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">{title}</h1>
          <p className="text-sm text-slate-500">Last updated: {lastUpdated}</p>
        </header>
        <p className="text-slate-600 leading-relaxed mb-10">{intro}</p>
        {children}
      </div>
    </article>
  );
}
