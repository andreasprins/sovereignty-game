import { Shield, Layers } from 'lucide-react';

interface NavbarProps {
  onFrameworkOpen: () => void;
  viewMode: 'explorer' | 'matrix';
  onViewModeChange: (mode: 'explorer' | 'matrix') => void;
}

export default function Navbar({ onFrameworkOpen, viewMode, onViewModeChange }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-30 px-6 md:px-12 lg:px-20"
      style={{
        background: 'rgba(12, 50, 44, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(48, 186, 120, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Shield size={22} strokeWidth={1.5} style={{ color: '#30BA78' }} />
          <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#F0F0F0', letterSpacing: '0.08em' }}>
            SUSE
          </span>
          <span className="hidden md:inline text-xs" style={{ color: '#8FAFA6' }}>
            / Digital Sovereignty Pathways
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center p-0.5"
            style={{ background: 'rgba(15, 61, 53, 0.8)', border: '1px solid rgba(48, 186, 120, 0.15)', borderRadius: '2px' }}
          >
            <button
              onClick={() => onViewModeChange('explorer')}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                background: viewMode === 'explorer' ? 'rgba(48, 186, 120, 0.15)' : 'transparent',
                color: viewMode === 'explorer' ? '#30BA78' : '#8FAFA6',
                borderRadius: '2px',
                letterSpacing: '0.06em',
              }}
            >
              Explorer
            </button>
            <button
              onClick={() => onViewModeChange('matrix')}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              style={{
                background: viewMode === 'matrix' ? 'rgba(48, 186, 120, 0.15)' : 'transparent',
                color: viewMode === 'matrix' ? '#30BA78' : '#8FAFA6',
                borderRadius: '2px',
                letterSpacing: '0.06em',
              }}
            >
              Matrix
            </button>
          </div>

          <button
            onClick={onFrameworkOpen}
            className="flex items-center gap-2 px-3 md:px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-white/5"
            style={{
              border: '1px solid rgba(48, 186, 120, 0.25)',
              color: '#30BA78',
              borderRadius: '2px',
              letterSpacing: '0.06em',
            }}
          >
            <Layers size={14} strokeWidth={1.5} />
            <span className="hidden sm:inline">EU Framework</span>
            <span className="sm:hidden">Framework</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
