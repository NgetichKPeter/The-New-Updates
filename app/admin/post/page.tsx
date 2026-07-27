"use client";

import { useState } from 'react';

export default function AdminPostPage() {
  const [isBreaking, setIsBreaking] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8 text-brand-charcoal">
      <div className="max-w-4xl mx-auto bg-white p-10 shadow-sm border border-gray-200 rounded-md">
        <h1 className="text-3xl font-serif font-black mb-8 border-b pb-4">Create New Article</h1>
        
        <form className="space-y-6 font-sans">
          <div>
            <label className="block text-sm font-bold mb-2">Headline</label>
            <input type="text" className="w-full border p-3 text-xl font-serif focus:outline-none focus:border-brand-blue" placeholder="Enter an engaging headline..." />
          </div>

          <div className="flex space-x-6">
            <div className="flex-1">
              <label className="block text-sm font-bold mb-2">Category</label>
              <select className="w-full border p-3 focus:outline-none focus:border-brand-blue bg-white">
                <option>World</option>
                <option>Tech</option>
                <option>Business</option>
              </select>
            </div>
            <div className="flex items-end pb-3">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isBreaking} 
                  onChange={(e) => setIsBreaking(e.target.checked)}
                  className="w-5 h-5 accent-brand-amber"
                />
                <span className="font-bold text-brand-amber">Mark as Breaking News</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Article Body</label>
            <textarea 
              className="w-full border p-4 h-96 font-serif text-lg leading-relaxed focus:outline-none focus:border-brand-blue" 
              placeholder="Write your story here..." 
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button type="button" className="px-6 py-3 border border-gray-300 font-bold hover:bg-gray-50">
              Save Draft
            </button>
            <button type="submit" className="px-6 py-3 bg-brand-navy text-white font-bold hover:bg-brand-blue transition-colors">
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
