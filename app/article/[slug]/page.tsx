import Header from '@/components/Header';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-charcoal">
      <Header />
      
      <main className="max-w-3xl mx-auto px-6 py-8">
        <header className="mb-10 text-center">
          <span className="text-brand-amber font-bold font-sans text-sm uppercase tracking-wider">Technology</span>
          <h1 className="text-5xl font-serif font-black mt-4 mb-6 leading-tight">
            How The Tech Industry is Rethinking Remote Work
          </h1>
          <div className="font-sans text-sm text-gray-500 border-t border-b border-gray-200 py-3 flex justify-between items-center">
            <span className="font-bold text-brand-charcoal">By Sarah Jenkins</span>
            <span>Published July 27, 2026</span>
          </div>
        </header>

        {/* Article Content with Drop-cap */}
        <article className="prose prose-lg font-serif text-gray-800 leading-relaxed 
          first-letter:text-7xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:text-brand-navy">
          <p className="mb-6">
            The landscape of modern office life has shifted yet again. After years of fully remote setups, major corporations are demanding a return to the physical desk, citing collaboration and culture. However, employees are pushing back with data proving their productivity at home.
          </p>
          <p className="mb-6">
            "It's a tug of war between legacy management styles and modern realities," says industry analyst Mark Torres. The compromise? A rigid hybrid model that is leaving both sides frustrated.
          </p>
        </article>

        <hr className="my-12 border-gray-300" />

        {/* Comment Section */}
        <section>
          <h3 className="font-serif font-bold text-2xl mb-6">Comments (1)</h3>
          
          {/* Comment Form */}
          <form className="mb-8">
            <textarea 
              className="w-full border border-gray-300 p-4 font-sans text-sm focus:outline-none focus:border-brand-blue rounded-sm" 
              rows={4} 
              placeholder="Share your thoughts..."
            />
            <button className="mt-3 bg-brand-navy text-white px-6 py-2 font-sans font-bold text-sm hover:bg-brand-blue transition-colors rounded-sm">
              Post Comment
            </button>
          </form>

          {/* Comment List */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold font-sans text-brand-charcoal">David L.</span>
                <span className="text-xs text-gray-500 font-sans">2 hours ago</span>
              </div>
              <p className="font-serif text-gray-700">Excellent analysis. The hybrid model isn't a compromise; it's just the worst of both worlds.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
