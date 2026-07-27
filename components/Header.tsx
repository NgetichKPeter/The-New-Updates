import Link from 'next/link';
import { format } from 'date-fns';

export default function Header() {
  const currentDate = format(new Date(), 'EEEE, MMMM do, yyyy');

  return (
    <header className="bg-brand-bg border-b-2 border-brand-charcoal mb-8">
      {/* Utility Bar */}
      <div className="flex justify-between items-center px-6 py-1 border-b border-gray-300 text-xs font-sans font-medium text-brand-charcoal">
        <span>{currentDate}</span>
        <div className="flex items-center space-x-4">
          <span className="bg-brand-amber text-white px-2 py-0.5 rounded-full font-bold animate-pulse">
            BREAKING
          </span>
          <Link href="/subscribe" className="text-brand-blue hover:underline">
            Subscribe
          </Link>
        </div>
      </div>

      {/* Main Branding */}
      <div className="flex flex-col items-center py-8">
        <Link href="/" className="flex items-center space-x-4 group">
          {/* Custom Horn SVG Logo */}
          <svg viewBox="0 0 100 100" className="w-16 h-16 fill-brand-navy group-hover:fill-brand-blue transition-colors">
            <path d="M15,90 C35,90 60,70 80,45 C95,25 90,10 85,10 C80,10 75,20 65,35 C45,65 25,80 10,80 C8,82 10,87 15,90 Z" />
            <path d="M25,85 C40,80 55,65 65,50" stroke="#FAFAFA" strokeWidth="2" fill="none" />
          </svg>
          <h1 className="text-5xl md:text-6xl font-serif font-black tracking-tighter text-brand-navy">
            The New Updates
          </h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="border-t border-b border-gray-300 py-3 mx-6">
        <ul className="flex justify-center space-x-8 font-sans text-sm font-bold uppercase tracking-widest text-brand-charcoal">
          {['World', 'Tech', 'Business', 'Culture', 'Opinion'].map((cat) => (
            <li key={cat}>
              <Link href={`/category/${cat.toLowerCase()}`} className="hover:text-brand-blue transition-colors">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
