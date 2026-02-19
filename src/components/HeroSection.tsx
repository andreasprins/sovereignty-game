interface HeroSectionProps {
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

const filters = [
  { id: 'Easy Implementation', label: 'Easy Implementation', color: '#30BA78', description: 'Pathways with 4-5 star ease of adoption' },
  { id: 'Big Impact', label: 'Big Impact', color: '#FE7C3F', description: 'Pathways with 4-5 star risk reduction' },
  { id: 'Magic Improvements', label: 'Magic Improvements', color: '#FE7C3F', description: 'Easy to implement AND high impact' },
  { id: null, label: 'Show All', color: '#8FAFA6', description: 'View all available pathways' },
];

export default function HeroSection({ activeFilter, onFilterChange }: HeroSectionProps) {
  return (
    <section className="relative px-6 pt-24 pb-16 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ letterSpacing: '-0.02em', color: '#F0F0F0' }}
          >
            Where Does Your Sovereignty Gap{' '}
            <span style={{ color: '#30BA78' }}>Hurt Most?</span>
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: '#8FAFA6' }}
          >
            Identify your risk. Find your pathway. Take back control — one layer at a time.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.label}
                onClick={() => onFilterChange(f.id)}
                className="px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-200 hover:scale-105"
                style={{
                  borderRadius: '2px',
                  border: `1px solid ${isActive ? f.color : 'rgba(143, 175, 166, 0.3)'}`,
                  backgroundColor: isActive ? `${f.color}20` : 'transparent',
                  color: isActive ? f.color : '#8FAFA6',
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
