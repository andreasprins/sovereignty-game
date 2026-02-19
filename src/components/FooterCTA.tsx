import { ArrowRight, ExternalLink } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="gradient-divider mb-16" />

        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#F0F0F0', letterSpacing: '-0.02em' }}
          >
            Ready to take the first step?
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed mb-10"
            style={{ color: '#8FAFA6' }}
          >
            Whether you start with a quick win or plan a full transformation, SUSE provides
            the foundation built on enterprise-grade open source and open standards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.suse.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:brightness-110"
              style={{
                background: '#30BA78',
                color: '#0C322C',
                borderRadius: '2px',
                letterSpacing: '0.08em',
              }}
            >
              Talk to Us
              <ArrowRight size={16} strokeWidth={2} />
            </a>
            <a
              href="https://www.suse.com/solutions/digital-sovereignty/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-white/5"
              style={{
                border: '1px solid rgba(48, 186, 120, 0.4)',
                color: '#30BA78',
                borderRadius: '2px',
                letterSpacing: '0.08em',
              }}
            >
              Learn More About Digital Sovereignty
              <ExternalLink size={14} strokeWidth={2} />
            </a>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-xs" style={{ color: '#8FAFA6', opacity: 0.6 }}>
            SUSE and the SUSE logo are registered trademarks of SUSE LLC in the United States and other countries.
          </p>
        </div>
      </div>
    </section>
  );
}
