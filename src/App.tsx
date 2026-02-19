import { useState, useCallback } from 'react';
import { pathways } from './data/pathways';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PathwayCard from './components/PathwayCard';
import MatrixView from './components/MatrixView';
import EUFrameworkPanel from './components/EUFrameworkPanel';
import FooterCTA from './components/FooterCTA';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [sovFilter, setSovFilter] = useState<string | null>(null);
  const [expandedPathway, setExpandedPathway] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'explorer' | 'matrix'>('explorer');
  const [frameworkOpen, setFrameworkOpen] = useState(false);
  const [highlightedSov, setHighlightedSov] = useState<string | null>(null);
  const { revealed, ref: revealRef } = useScrollReveal();

  const handleTogglePathway = useCallback((pathwayId: string) => {
    setExpandedPathway((prev) => (prev === pathwayId ? null : pathwayId));
  }, []);

  const handleSovClick = useCallback((code: string) => {
    setHighlightedSov(code);
    setFrameworkOpen(true);
  }, []);

  const handleFilterChange = useCallback((filter: string | null) => {
    setActiveFilter(filter);
  }, []);

  const handleSovFilterChange = useCallback((sovCode: string | null) => {
    setSovFilter(sovCode);
    setFrameworkOpen(false);
    setHighlightedSov(null);
  }, []);

  const filteredPathways = pathways.filter((pathway) => {
    if (sovFilter && !pathway.sovObjectives.includes(sovFilter)) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-mesh topo-lines font-suse">
      <Navbar
        onFrameworkOpen={() => setFrameworkOpen(true)}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <div className="animate-fade-in-up">
        <HeroSection
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </div>

      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 md:mb-8">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-bold"
              style={{ color: '#F0F0F0', letterSpacing: '-0.02em' }}
            >
              {viewMode === 'explorer' ? 'Sovereignty Pathways' : 'All Sub-Paths at a Glance'}
            </h2>
            {(activeFilter || sovFilter) && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs" style={{ color: '#8FAFA6' }}>Filtered by:</span>
                {activeFilter && (
                  <>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: activeFilter === 'Big Impact' ? 'rgba(254, 124, 63, 0.15)' : 'rgba(48, 186, 120, 0.15)',
                        color: activeFilter === 'Big Impact' ? '#FE7C3F' : '#30BA78',
                        border: `1px solid ${activeFilter === 'Big Impact' ? '#FE7C3F' : '#30BA78'}`,
                      }}
                    >
                      {activeFilter}
                    </span>
                    <button
                      onClick={() => setActiveFilter(null)}
                      className="text-xs underline transition-colors duration-200 hover:text-suse-green"
                      style={{ color: '#8FAFA6' }}
                    >
                      Clear
                    </button>
                  </>
                )}
                {sovFilter && (
                  <>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap"
                      style={{
                        background: 'rgba(48, 186, 120, 0.15)',
                        color: '#30BA78',
                        border: '1px solid #30BA78',
                      }}
                    >
                      {sovFilter}
                    </span>
                    <button
                      onClick={() => setSovFilter(null)}
                      className="text-xs underline transition-colors duration-200 hover:text-suse-green"
                      style={{ color: '#8FAFA6' }}
                    >
                      Clear
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {viewMode === 'explorer' ? (
            <div className="space-y-3">
              {filteredPathways.map((p, index) => (
                <div
                  key={p.id}
                  data-reveal={p.id}
                  ref={revealRef}
                  className={revealed.has(p.id) ? 'animate-fade-in-up' : 'opacity-0'}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <PathwayCard
                    pathway={p}
                    isExpanded={expandedPathway === p.id}
                    onToggle={() => handleTogglePathway(p.id)}
                    activeFilter={activeFilter}
                    onSovClick={handleSovClick}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div
              data-reveal="matrix"
              ref={revealRef}
              className={`${revealed.has('matrix') ? 'animate-fade-in-up' : 'opacity-0'} p-4`}
              style={{
                background: 'rgba(12, 50, 44, 0.95)',
                border: '1px solid rgba(48, 186, 120, 0.15)',
                borderRadius: '2px',
              }}
            >
              <MatrixView
                activeFilter={activeFilter}
                sovFilter={sovFilter}
                onSovClick={handleSovClick}
              />
            </div>
          )}

          <div className="text-center mt-12">
            <p style={{ color: '#8FAFA6', fontSize: '0.8rem' }}>
              All pathways can be accelerated using SUSE Services, which provide acceleration of implementation and are covering consulting, training, or advisory to strengthen your sovereignty journey.
            </p>
          </div>
        </div>
      </section>

      <FooterCTA />

      <EUFrameworkPanel
        isOpen={frameworkOpen}
        onClose={() => { setFrameworkOpen(false); setHighlightedSov(null); }}
        highlightedSov={highlightedSov}
        onSovFilter={handleSovFilterChange}
      />
    </div>
  );
}
