import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Sidebar - Recent Updates */}
        <aside className="md:col-span-3 border-r border-gray-300 pr-6 hidden md:block">
          <h3 className="font-sans font-bold text-xs uppercase tracking-widest mb-4 border-b pb-2">Latest Updates</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <article key={item} className="border-b border-gray-200 pb-4">
                <span className="text-brand-blue text-xs font-bold font-sans">10 min ago</span>
                <h4 className="font-serif font-bold text-lg leading-tight mt-1 hover:text-brand-blue cursor-pointer">
                  Market hits record high amid tech rally
                </h4>
              </article>
            ))}
          </div>
        </aside>

        {/* Center - Hero / Featured News */}
        <section className="md:col-span-6 pr-6 md:border-r border-gray-300">
          <article className="group cursor-pointer">
            <div className="w-full h-80 bg-gray-300 mb-4 rounded-sm object-cover" /> {/* Placeholder for Cover Image */}
            <h2 className="text-4xl font-serif font-black leading-none mb-3 group-hover:text-brand-navy">
              Global Summit Reaches Historic Climate Agreement
            </h2>
            <p className="font-serif text-lg text-gray-700 leading-relaxed mb-4">
              In an unprecedented move, world leaders have finalized a comprehensive treaty aimed at reducing carbon emissions by 50% over the next decade.
            </p>
            <span className="font-sans text-xs font-bold uppercase text-brand-charcoal">By Jane Doe</span>
          </article>
        </section>

        {/* Right Sidebar - Opinion / Editorials */}
        <aside className="md:col-span-3">
          <h3 className="font-sans font-bold text-xs uppercase tracking-widest mb-4 border-b pb-2">Opinion</h3>
          <div className="space-y-6">
            <article>
              <h4 className="font-serif font-bold text-xl italic hover:text-brand-blue cursor-pointer">
                The future of AI isn't what we thought it would be. It's much weirder.
              </h4>
              <p className="font-sans text-sm text-gray-600 mt-2">— John Smith</p>
            </article>
          </div>
        </aside>

      </main>
    </div>
  );
}
