import { X, Info } from 'lucide-react';
import { useState } from 'react';
import { sovObjectives, sealLevels } from '../data/pathways';

interface EUFrameworkPanelProps {
  isOpen: boolean;
  onClose: () => void;
  highlightedSov: string | null;
  onSovFilter: (sovCode: string) => void;
}

export default function EUFrameworkPanel({ isOpen, onClose, highlightedSov, onSovFilter }: EUFrameworkPanelProps) {
  const [showSeal, setShowSeal] = useState(false);

  return (
    <>
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: 'rgba(0, 0, 0, 0.5)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={onClose}
      />

      <div
        className="fixed top-0 right-0 h-full z-50 transition-transform duration-300 overflow-y-auto"
        style={{
          width: '420px',
          maxWidth: '90vw',
          background: '#0C322C',
          borderLeft: '1px solid rgba(48, 186, 120, 0.2)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          boxShadow: isOpen ? '-20px 0 60px rgba(0, 0, 0, 0.3)' : 'none',
        }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold" style={{ color: '#F0F0F0' }}>
              EU Cloud Sovereignty Framework
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center transition-colors duration-200 hover:bg-white/5"
              style={{ borderRadius: '2px' }}
            >
              <X size={18} strokeWidth={1.5} color="#8FAFA6" />
            </button>
          </div>

          <div className="space-y-3 mb-8">
            {sovObjectives.map((sov) => {
              const isHighlighted = highlightedSov === sov.code;
              return (
                <button
                  key={sov.code}
                  onClick={() => onSovFilter(sov.code)}
                  className="w-full p-4 transition-all duration-200 hover:scale-[1.02] text-left"
                  style={{
                    background: isHighlighted ? 'rgba(48, 186, 120, 0.1)' : 'rgba(15, 61, 53, 0.5)',
                    border: `1px solid ${isHighlighted ? 'rgba(48, 186, 120, 0.4)' : 'rgba(48, 186, 120, 0.1)'}`,
                    borderRadius: '2px',
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#30BA78', letterSpacing: '0.08em' }}>
                      {sov.code}
                    </span>
                    <span className="text-xs font-bold" style={{ color: '#FE7C3F' }}>
                      {sov.weight}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold mb-1" style={{ color: '#F0F0F0' }}>
                    {sov.name}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: '#8FAFA6' }}>
                    {sov.description}
                  </p>
                </button>
              );
            })}
          </div>

          <p className="text-xs mb-6" style={{ color: '#8FAFA6' }}>
            SOV-8 (Environmental Sustainability, 5%) is excluded from this tool by design.
          </p>

          <div className="gradient-divider mb-6" />

          <button
            onClick={() => setShowSeal(!showSeal)}
            className="flex items-center gap-2 text-sm font-semibold mb-4 transition-colors duration-200 hover:opacity-80"
            style={{ color: '#30BA78' }}
          >
            <Info size={16} strokeWidth={1.5} />
            SEAL Levels (0-4)
          </button>

          {showSeal && (
            <div className="space-y-2">
              {sealLevels.map((seal) => (
                <div
                  key={seal.level}
                  className="flex gap-3 p-3"
                  style={{
                    background: 'rgba(15, 61, 53, 0.5)',
                    border: '1px solid rgba(48, 186, 120, 0.08)',
                    borderRadius: '2px',
                  }}
                >
                  <span className="text-lg font-bold flex-shrink-0" style={{ color: '#30BA78', minWidth: '24px' }}>
                    {seal.level}
                  </span>
                  <div>
                    <span className="text-sm font-semibold block" style={{ color: '#F0F0F0' }}>
                      {seal.name}
                    </span>
                    <span className="text-xs" style={{ color: '#8FAFA6' }}>
                      {seal.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
