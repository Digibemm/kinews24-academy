import React, { useEffect } from 'react';
import { blogPosts } from '../types/blog';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import Button from '../components/Button';

interface BlogPostPageProps {
  slug: string;
}

// Simple markdown formatter
function formatMarkdown(markdown: string): string {
  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2">$1</a>');

  // Lists
  html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  // Code blocks (simple)
  html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Blockquotes
  html = html.replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';

  // Clean up extra p tags
  html = html.replace(/<p><h/g, '<h');
  html = html.replace(/<\/h([1-6])><\/p>/g, '</h$1>');
  html = html.replace(/<p><ul>/g, '<ul>');
  html = html.replace(/<\/ul><\/p>/g, '</ul>');
  html = html.replace(/<p><pre>/g, '<pre>');
  html = html.replace(/<\/pre><\/p>/g, '</pre>');
  html = html.replace(/<p><blockquote>/g, '<blockquote>');
  html = html.replace(/<\/blockquote><\/p>/g, '</blockquote>');
  html = html.replace(/<p><\/p>/g, '');

  return html;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) return;

    // Update meta tags
    document.title = `${post.title} | KINEWS24-Academy Blog`;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', post.excerpt);
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', post.tags.join(', '));

    // Add BlogPosting Schema
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "author": {
        "@type": "Organization",
        "name": post.author.name
      },
      "datePublished": post.publishDate,
      "dateModified": post.publishDate,
      "publisher": {
        "@type": "Organization",
        "name": "KINEWS24-Academy",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kinews24-academy.de/Logo-kinews24-white.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://kinews24-academy.de/blog/${post.slug}`
      },
      "keywords": post.tags.join(', ')
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'blog-post-schema';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById('blog-post-schema')?.remove();
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Artikel nicht gefunden</h1>
          <Button onClick={() => {
            window.history.pushState({}, '', '/blog');
            window.dispatchEvent(new Event('popstate'));
          }}>
            Zurück zum Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <div className="bg-brand-dark pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => {
              window.history.pushState({}, '', '/blog');
              window.dispatchEvent(new Event('popstate'));
            }}
            className="text-brand-muted hover:text-white transition-colors mb-8 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Zurück zum Blog
          </button>

          <div className="flex flex-wrap items-center gap-4 text-sm text-brand-muted mb-6">
            <span className="px-3 py-1 bg-brand-accent/20 text-brand-cyan rounded-full font-medium">
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
              {post.readTime} Lesezeit
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-brand-muted leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-4 pt-6 border-t border-white/10">
            <div>
              <p className="text-white font-medium">{post.author.name}</p>
              <p className="text-sm text-brand-muted">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="blog-content">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
          />
        </article>

        <style>{`
          .blog-content h1 { font-size: 2.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1.5rem; color: #0f172a; }
          .blog-content h2 { font-size: 2rem; font-weight: bold; margin-top: 3rem; margin-bottom: 1.5rem; color: #0f172a; }
          .blog-content h3 { font-size: 1.5rem; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem; color: #0f172a; }
          .blog-content h4 { font-size: 1.25rem; font-weight: bold; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #0f172a; }
          .blog-content p { margin-bottom: 1.5rem; line-height: 1.75; color: #475569; }
          .blog-content strong { font-weight: bold; color: #0f172a; }
          .blog-content ul, .blog-content ol { margin: 1.5rem 0; padding-left: 1.5rem; }
          .blog-content li { margin: 0.5rem 0; color: #475569; line-height: 1.75; }
          .blog-content a { color: #3b82f6; text-decoration: none; }
          .blog-content a:hover { text-decoration: underline; }
          .blog-content code { background: #f1f5f9; padding: 0.125rem 0.375rem; border-radius: 0.25rem; color: #3b82f6; font-size: 0.875rem; }
          .blog-content pre { background: #0f172a; color: #f1f5f9; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin: 1.5rem 0; }
          .blog-content blockquote { border-left: 4px solid #3b82f6; background: #f8fafc; padding: 1rem 1.5rem; margin: 1.5rem 0; }
          .blog-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
          .blog-content th { background: #f1f5f9; padding: 0.75rem; text-align: left; font-weight: bold; border: 1px solid #e2e8f0; }
          .blog-content td { padding: 0.75rem; border: 1px solid #e2e8f0; }
        `}</style>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center gap-2">
            <Tag size={20} className="text-slate-400" />
            {post.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-brand-accent/10 to-brand-cyan/10 rounded-2xl p-8 md:p-12 border-2 border-brand-accent/20">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Bereit für Ihre KI-Roadmap?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl">
            Sie möchten KI in Ihrem Unternehmen einsetzen – rechtssicher und effektiv?
            Buchen Sie jetzt ein kostenfreies Erstgespräch.
          </p>
          <Button
            size="lg"
            onClick={() => {
              window.history.pushState({}, '', '/termin?source=blog-' + post.slug);
              window.dispatchEvent(new Event('popstate'));
              window.scrollTo(0, 0);
            }}
          >
            Kostenloses Erstgespräch buchen
          </Button>
        </div>

        {/* More Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Weitere Artikel</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map(relatedPost => (
              <div
                key={relatedPost.id}
                onClick={() => {
                  window.history.pushState({}, '', `/blog/${relatedPost.slug}`);
                  window.dispatchEvent(new Event('popstate'));
                  window.scrollTo(0, 0);
                }}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all cursor-pointer group"
              >
                <span className="text-xs px-2 py-1 bg-brand-accent/10 text-brand-accent rounded-full font-medium">
                  {relatedPost.category}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mt-4 mb-2 group-hover:text-brand-accent transition-colors">
                  {relatedPost.title}
                </h4>
                <p className="text-sm text-slate-600 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
