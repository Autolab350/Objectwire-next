import Link from 'next/link';
import { getFeaturedBlogPosts, getBlogCategoryById, formatDate } from '@/lib/blog-data';
import { 
  TypewriterText, 
  MatrixBackground, 
  GlitchText, 
  AnimatedCard, 
  BlinkingCursor, 
  RadarSweep, 
  DataStream,
  PageTransition,
  StaggerContainer,
  StaggerItem
} from '@/components/animations';

export default function Home() {
  const featuredPosts = getFeaturedBlogPosts().slice(0, 2);

  return (
    <PageTransition>
      <main className="min-h-screen bg-white dark:bg-black relative overflow-hidden">
        <MatrixBackground />
        
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center mb-16">
            <GlitchText className="text-5xl font-mono font-bold tracking-wider mb-6">
              <TypewriterText text="OBJECT WIRE >> ORG" />
              <BlinkingCursor />
            </GlitchText>
            
            <div className="mb-8">
              <TypewriterText 
                text="ObjectWire operates as a precision intelligence publisher. We produce event-driven analysis only when it meets our internal threshold for relevance and verifiability. Each publication is constructed as a documented claim, supported by primary sources and transparent citations."
                className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed block"
              />
            </div>
            
            <div className="mb-12">
              <DataStream className="h-24" />
            </div>
          </div>
          
          <div className="text-center flex items-center justify-center space-x-8">
            <RadarSweep size={80} />
            <AnimatedCard>
              <Link 
                href="/blog"
                className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 font-semibold tracking-wider hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                BROWSE ANALYSIS
              </Link>
            </AnimatedCard>
            <RadarSweep size={80} />
          </div>
        </section>

      {/* Editorial Standards Section */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GlitchText>
              <h2 className="text-3xl font-semibold mb-6">EDITORIAL STANDARDS</h2>
            </GlitchText>
          </div>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StaggerItem>
              <AnimatedCard delay={0}>
                <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="w-12 h-12 bg-blue-500 mx-auto mb-4 flex items-center justify-center rounded-lg">
                    <RadarSweep size={24} />
                  </div>
                  <h3 className="font-semibold mb-3">Strategic Relevance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Only material with strategic relevance, structured for immediate comprehension 
                    and professional application.
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>
            
            <StaggerItem>
              <AnimatedCard delay={0.1}>
                <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="w-12 h-12 bg-green-500 mx-auto mb-4 flex items-center justify-center rounded-lg">
                    <div className="w-6 h-6 border-2 border-white animate-pulse"></div>
                  </div>
                  <h3 className="font-semibold mb-3">Primary Sources</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Each release distills complex developments with transparent citations 
                    and verifiable documentation.
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>
            
            <StaggerItem>
              <AnimatedCard delay={0.2}>
                <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="w-12 h-12 bg-yellow-500 mx-auto mb-4 flex items-center justify-center rounded-lg">
                    <div className="w-6 h-6 border-2 border-white rotate-45 animate-spin"></div>
                  </div>
                  <h3 className="font-semibold mb-3">Signal Over Volume</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Prioritizing context and signal over volume, enabling readers to 
                    anticipate rather than merely observe events.
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>
            
            <StaggerItem>
              <AnimatedCard delay={0.3}>
                <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                  <div className="w-12 h-12 bg-red-500 mx-auto mb-4 flex items-center justify-center rounded-lg">
                    <div className="w-6 h-6 border-2 border-white rounded-sm animate-bounce"></div>
                  </div>
                  <h3 className="font-semibold mb-3">Synthesis</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Producing a coherent, cumulative knowledge base rather than 
                    disconnected reports.
                  </p>
                </div>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Analysis */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <GlitchText>
                <h2 className="text-3xl font-semibold mb-6">FEATURED ANALYSIS</h2>
              </GlitchText>
              <TypewriterText 
                text="Recent strategic intelligence and event-driven analysis from our research team."
                className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto block"
              />
            </div>
            
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => {
                const category = getBlogCategoryById(post.category);
                return (
                  <StaggerItem key={post.id}>
                    <AnimatedCard delay={index * 0.2}>
                      <article className="border border-gray-200 dark:border-gray-800 p-8 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 bg-white dark:bg-gray-900 rounded-lg">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="flex items-center space-x-2">
                            <div 
                              className="w-3 h-3 rounded-full animate-pulse"
                              style={{ backgroundColor: category?.color || '#6B7280' }}
                            ></div>
                            <span className="text-xs font-semibold tracking-wider text-gray-500 dark:text-gray-400">
                              {category?.name.toUpperCase()}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400">•</span>
                          <time className="text-xs text-gray-500 dark:text-gray-400">
                            {formatDate(post.publishedAt)}
                          </time>
                        </div>
                        
                        <Link href={`/blog/${post.slug}`}>
                          <GlitchText>
                            <h3 className="text-xl font-semibold mb-4 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-pointer">
                              {post.title}
                            </h3>
                          </GlitchText>
                        </Link>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {post.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                            <span>{post.readingTime} min read</span>
                            {post.metadata && (
                              <>
                                <span>•</span>
                                <div className="flex items-center space-x-2">
                                  <span>Relevance:</span>
                                  <div className="flex space-x-1">
                                    {Array.from({ length: 10 }).map((_, i) => (
                                      <div
                                        key={i}
                                        className={`w-1 h-3 ${
                                          i < (post.metadata?.strategicRelevance || 0)
                                            ? 'bg-green-500 animate-pulse'
                                            : 'bg-gray-300 dark:bg-gray-700'
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span>{post.metadata.strategicRelevance}/10</span>
                                </div>
                              </>
                            )}
                          </div>
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="text-xs font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex items-center space-x-2"
                          >
                            <span>READ ANALYSIS</span>
                            <span className="animate-bounce">→</span>
                          </Link>
                        </div>
                      </article>
                    </AnimatedCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
            
            <div className="text-center mt-12">
              <AnimatedCard delay={0.5}>
                <Link 
                  href="/blog"
                  className="inline-block border border-gray-300 dark:border-gray-700 px-8 py-3 font-semibold tracking-wider hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  VIEW ALL ANALYSIS
                </Link>
              </AnimatedCard>
            </div>
          </div>
        </section>
      )}

      {/* Technology Architecture Section */}
      <section className="bg-gray-50 dark:bg-gray-950 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-6">OBJECTWIRE TECHNOLOGY ARCHITECTURE</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              ObjectWire's platform is built as a four-layer system that transforms raw 
              information into actionable intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-semibold mb-3">DATA ACQUISITION</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Collects structured and unstructured data from trusted sources and encodes it 
                into embeddings, creating a machine-readable vector space.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold mb-3">PROCESSING & INTELLIGENCE</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Performs clustering, verification, and relationship mapping within the embedding 
                space, generating a continuously updated knowledge graph.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold mb-3">TERMINAL & ACCESS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Provides a controlled interface to query the vectorized knowledge base, 
                returning context-aware outputs that prioritize semantic relevance.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold mb-3">AUTOMATION & DISTRIBUTION</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Continuously tracks semantic changes, triggering alerts and automated 
                publishing workflows to ensure insights are acted on as conditions evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </PageTransition>
  );
}
