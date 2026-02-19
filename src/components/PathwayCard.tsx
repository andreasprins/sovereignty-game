import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Pathway } from '../data/pathways';
import DynamicIcon from './IconMap';
import SovPill from './SovPill';
import SubPathCard from './SubPathCard';

interface PathwayCardProps {
  pathway: Pathway;
  isExpanded: boolean;
  onToggle: () => void;
  activeFilter: string | null;
  onSovClick: (code: string) => void;
}

export default function PathwayCard({ pathway, isExpanded, onToggle, activeFilter, onSovClick }: PathwayCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isExpanded ? contentRef.current.scrollHeight : 0);
    }
  }, [isExpanded, activeFilter]);

  const filteredSubPaths = pathway.subPaths.filter((sp) => {
    if (!activeFilter) return true;
    if (activeFilter === 'Easy Implementation') return sp.easeOfAdoption >= 4;
    if (activeFilter === 'Big Impact') return sp.riskReduction >= 4;
    if (activeFilter === 'Magic Improvements') return sp.easeOfAdoption >= 4 && sp.riskReduction >= 4;
    return true;
  });

  const isVisible = !activeFilter || filteredSubPaths.length > 0;

  if (!isVisible) return null;

  return (
    <div
      id={pathway.id}
      className="transition-all duration-300"
      style={{
        background: isExpanded ? 'rgba(15, 61, 53, 0.6)' : 'rgba(12, 50, 44, 0.95)',
        border: `1px solid ${isExpanded ? 'rgba(48, 186, 120, 0.3)' : 'rgba(48, 186, 120, 0.15)'}`,
        borderRadius: '2px',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-4 md:p-5 lg:p-6 transition-all duration-200 hover:bg-white/[0.02]"
      >
        <div className="flex items-start gap-3 md:gap-4 lg:gap-6">
          <span className="text-3xl md:text-4xl font-bold flex-shrink-0" style={{ color: '#30BA78', minWidth: '40px' }}>
            {String(pathway.number).padStart(2, '0')}
          </span>

          <div className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(254, 124, 63, 0.1)', border: '1px solid rgba(254, 124, 63, 0.2)', borderRadius: '2px' }}>
            <DynamicIcon name={pathway.icon} size={18} strokeWidth={1.5} className="text-suse-orange md:w-5 md:h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="text-base md:text-lg font-bold leading-tight" style={{ color: '#F0F0F0', letterSpacing: '-0.01em' }}>
                {pathway.title}
              </h3>
              <ChevronDown
                size={20}
                strokeWidth={1.5}
                className="flex-shrink-0 transition-transform duration-300 mt-0.5"
                style={{
                  color: '#8FAFA6',
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </div>

            <p className="text-xs md:text-sm mt-1 line-clamp-2 md:line-clamp-1" style={{ color: '#8FAFA6' }}>
              {pathway.description.substring(0, 100)}...
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-3">
              <div className="flex items-center gap-1.5 flex-wrap">
                {pathway.movingFrom.slice(0, 2).map((m) => (
                  <span key={m} className="text-xs px-2 py-0.5 whitespace-nowrap" style={{ background: 'rgba(254, 124, 63, 0.08)', border: '1px solid rgba(254, 124, 63, 0.15)', color: '#FE7C3F', borderRadius: '2px' }}>
                    {m.split('(')[0].trim().split('/')[0].trim()}
                  </span>
                ))}
                {pathway.movingFrom.length > 2 && (
                  <span className="text-xs" style={{ color: '#8FAFA6' }}>+{pathway.movingFrom.length - 2}</span>
                )}
              </div>

              <div className="flex gap-1 flex-wrap">
                {pathway.sovObjectives.map((sov) => (
                  <SovPill key={sov} code={sov} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: isExpanded ? `${height}px` : '0px' }}
      >
        <div ref={contentRef}>
          <div className="gradient-divider mx-6" />

          <div className="p-5 md:p-6">
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#8FAFA6' }}>
              {pathway.description}
            </p>

            <div className="mb-4">
              <h5 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#8FAFA6', letterSpacing: '0.08em' }}>
                Moving From
              </h5>
              <div className="flex flex-wrap gap-2">
                {pathway.movingFrom.map((m) => (
                  <span key={m} className="text-xs px-2.5 py-1" style={{ background: 'rgba(254, 124, 63, 0.08)', border: '1px solid rgba(254, 124, 63, 0.15)', color: '#FE7C3F', borderRadius: '2px' }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {filteredSubPaths.length > 1 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 px-2">
                  {filteredSubPaths.map((sp, i) => (
                    <div key={sp.id} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div
                          className="w-8 h-8 flex items-center justify-center text-xs font-bold"
                          style={{
                            background: 'rgba(48, 186, 120, 0.15)',
                            border: '1px solid rgba(48, 186, 120, 0.4)',
                            borderRadius: '50%',
                            color: '#30BA78',
                          }}
                        >
                          {sp.id}
                        </div>
                        <span className="text-xs mt-1 max-w-[100px] text-center leading-tight" style={{ color: '#8FAFA6' }}>
                          {i === 0 ? 'Quick Entry' : i === filteredSubPaths.length - 1 ? 'Full Transform' : 'Intermediate'}
                        </span>
                      </div>
                      {i < filteredSubPaths.length - 1 && (
                        <div className="w-12 md:w-20 h-px mx-2" style={{ background: 'linear-gradient(90deg, #30BA78, rgba(48, 186, 120, 0.3))' }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 -mx-5 md:-mx-6 px-5 md:px-6" style={{ scrollbarWidth: 'thin' }}>
              {filteredSubPaths.map((sp, i) => (
                <SubPathCard
                  key={sp.id}
                  subPath={sp}
                  index={i}
                  total={filteredSubPaths.length}
                  onSovClick={onSovClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
