import { getBlogPostBySlug, getBlogCategoryById, formatDate, getAllBlogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  TypewriterText, 
  GlitchText, 
  AnimatedCard, 
  PulseIndicator,
  PageTransition,
  StaggerContainer,
  StaggerItem
} from '@/components/animations';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | ObjectWire',
    };
  }

  return {
    title: `${post.title} | ObjectWire`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const category = getBlogCategoryById(post.category);

  return (
    <PageTransition>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Navigation */}
          <nav className="mb-8">
            <AnimatedCard delay={0}>
              <Link 
                href="/blog"
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors inline-flex items-center space-x-2"
              >
                <span className="animate-bounce">←</span>
                <span>Back to Analysis</span>
              </Link>
            </AnimatedCard>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <AnimatedCard delay={0.1}>
              <div className="flex items-center space-x-4 mb-6">
                <PulseIndicator 
                  level={5} 
                  color={category?.color || '#6B7280'}
                />
                <span className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400">
                  {category?.name.toUpperCase()}
                </span>
                <span className="text-sm text-gray-400">•</span>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(post.publishedAt)}
                </time>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.readingTime} min read
                </span>
              </div>
            </AnimatedCard>
            
            <GlitchText className="text-4xl font-semibold leading-tight mb-6">
              <TypewriterText text={post.title} />
            </GlitchText>
            
            <AnimatedCard delay={0.3}>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                {post.description}
              </p>
            </AnimatedCard>

          {/* Metadata */}
          {post.metadata && (
            <div className="border border-gray-200 dark:border-gray-800 p-6 mb-8">
              <h3 className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                ANALYSIS METADATA
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Strategic Relevance</div>
                  <div className="font-semibold">{post.metadata.strategicRelevance}/10</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Verification Level</div>
                  <div className={`font-semibold ${
                    post.metadata.verificationLevel === 'high' ? 'text-green-600 dark:text-green-400' :
                    post.metadata.verificationLevel === 'medium' ? 'text-yellow-600 dark:text-yellow-400' :
                    'text-red-600 dark:text-red-400'
                  }`}>
                    {post.metadata.verificationLevel?.toUpperCase()}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Author</div>
                  <div className="font-semibold">{post.author.name}</div>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div 
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/^# /gm, '<h1 class="text-3xl font-semibold mt-12 mb-6 first:mt-0">')
                .replace(/^## /gm, '<h2 class="text-2xl font-semibold mt-10 mb-4">')
                .replace(/^### /gm, '<h3 class="text-xl font-semibold mt-8 mb-3">')
                .replace(/^\*\*(.+)\*\*/gm, '<strong class="font-semibold">$1</strong>')
                .replace(/^\* (.+)/gm, '<li class="mb-1">$1</li>')
                .replace(/^([^<\n]+)$/gm, '<p class="mb-4">$1</p>')
                .replace(/^---$/gm, '<hr class="my-8 border-gray-200 dark:border-gray-800">')
            }}
          />
        </article>

        {/* Sources */}
        {post.metadata?.sources && (
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-semibold tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              VERIFIED SOURCES
            </h3>
            <ul className="space-y-2">
              {post.metadata.sources.map((source, index) => (
                <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                  {index + 1}. {source}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Published: {formatDate(post.publishedAt)}
              {post.updatedAt && post.updatedAt !== post.publishedAt && (
                <span className="ml-4">
                  Updated: {formatDate(post.updatedAt)}
                </span>
              )}
            </div>
            <Link 
              href="/blog"
              className="text-sm font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              ← Back to Analysis
            </Link>
          </div>
        </footer>
      </div>
    </div>
    </PageTransition>
  );
}