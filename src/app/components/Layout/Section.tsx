'use client';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'alternate';
}

export default function Section({ id, children, className = "", background = 'default' }: SectionProps) {
  const bgClass = background === 'alternate' ? 'bg-gray-900/50' : '';
  
  return (
    <section id={id} className={`min-h-screen flex items-center justify-center py-20 ${bgClass} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
}