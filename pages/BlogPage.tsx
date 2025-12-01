import React from 'react';
import { blogPosts } from '../types/blog';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);

  const handlePostClick = (slug: string) => {
    window.history.pushState({}, '', `/blog/${slug}`);
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="bg-brand-dark pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              KI-Wissen, das wirkt
            </h1>
            <p className="text-xl text-brand-muted leading-relaxed">
              Praktische Einblicke, rechtliche Updates und konkrete Anleitungen für KI im Mittelstand.
              Kein Marketing-Blabla – sondern Wissen, das Sie direkt umsetzen können.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <span className="text-brand-accent">⭐</span> Empfohlen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <article
                  key={post.id}
                  onClick={() => handlePostClick(post.slug)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                      <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {new Date(post.publishDate).toLocaleDateString('de-DE', {
                          day: '2-digit',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-accent transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ArrowRight className="text-brand-accent group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Alle Artikel</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article
                key={post.id}
                onClick={() => handlePostClick(post.slug)}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-slate-600 mb-3">
                    <span className="text-xs px-2 py-1 bg-brand-accent/10 text-brand-accent rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={14} />
                    {new Date(post.publishDate).toLocaleDateString('de-DE', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-20 bg-gradient-to-br from-brand-accent/5 to-brand-cyan/5 rounded-2xl p-12 border-2 border-brand-accent/20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Keine Artikel mehr verpassen
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Erhalten Sie neue Artikel, KI-Updates und exklusive Insights direkt in Ihr Postfach.
            Kein Spam, versprochen.
          </p>
          <button
            onClick={() => {
              window.history.pushState({}, '', '/termin?source=blog-newsletter');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="px-8 py-4 bg-brand-accent text-white rounded-lg font-bold hover:bg-brand-accent/90 transition-colors"
          >
            Jetzt Beratungstermin buchen
          </button>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
