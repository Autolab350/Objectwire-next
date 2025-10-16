import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Standards | ObjectWire',
  description: 'ObjectWire editorial standards and methodology for precision intelligence publishing.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <header className="mb-16">
          <h1 className="text-4xl font-semibold mb-6">EDITORIAL STANDARDS</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            ObjectWire publishes only material with strategic relevance, structured for 
            immediate comprehension and professional application.
          </p>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Publication Criteria</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Strategic Relevance Threshold</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Each release distills complex developments into clear, actionable intelligence, 
                  prioritizing context and signal over volume. Our analysis is constructed to expose 
                  relationships, causal drivers, and downstream implications, enabling readers to 
                  anticipate rather than merely observe events.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Strategic relevance rating of 7+ required for publication</li>
                  <li>Clear actionable insights or decision-making implications</li>
                  <li>Documented causal relationships or dependency analysis</li>
                  <li>Quantifiable impact assessment where applicable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Verification Standards</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  All analysis must be supported by primary sources and transparent citations. 
                  We emphasize synthesis over aggregation, producing a coherent, cumulative 
                  knowledge base rather than disconnected reports.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Minimum two independent primary source verification</li>
                  <li>Complete citation trail for all factual claims</li>
                  <li>Explicit uncertainty quantification where applicable</li>
                  <li>Clear methodology disclosure for analytical frameworks</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Language and Structure</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Language is exact and standardized, designed for integration into research 
                  processes, decision frameworks, and automated systems without reinterpretation.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Executive summary with key findings prominently displayed</li>
                  <li>Structured data presentation with consistent formatting</li>
                  <li>Technical precision without unnecessary jargon</li>
                  <li>Machine-readable metadata and classification systems</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Research Methodology</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="font-semibold mb-3">Data Collection</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Systematic monitoring of structured and unstructured sources, with 
                  automated relevance filtering and human verification protocols.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="font-semibold mb-3">Analysis Framework</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Multi-dimensional evaluation including strategic impact, temporal 
                  sensitivity, and verification confidence levels.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="font-semibold mb-3">Quality Assurance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Independent review process with cross-validation of sources and 
                  analytical conclusions before publication.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-800 p-6">
                <h3 className="font-semibold mb-3">Continuous Updates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Ongoing monitoring of published analysis with updates when material 
                  changes occur in underlying conditions or data.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-8 border border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Editorial Team</h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>Email: editorial@objectwire.org</p>
                    <p>Phone: (575) 495-0323</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Business Inquiries</h3>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p>Email: jack@objectwire.org</p>
                    <p>Address: 2921 E 17th St Building 3, Apt 3205<br />Austin, TX 78702</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}