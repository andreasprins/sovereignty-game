import type { SubPath } from '../data/pathways';
import StarRating from './StarRating';
import EntryTag from './EntryTag';
import SovPill from './SovPill';

interface SubPathCardProps {
  subPath: SubPath;
  index: number;
  total: number;
  onSovClick: (code: string) => void;
}

export default function SubPathCard({ subPath, index, total, onSovClick }: SubPathCardProps) {
  return (
    <div
      className="flex-shrink-0 w-[90vw] sm:w-96 p-4 md:p-6 card-glow"
      style={{
        background: 'rgba(12, 50, 44, 0.90)',
        border: '1px solid rgba(48, 186, 120, 0.15)',
        borderRadius: '2px',
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span
            className="text-2xl font-bold"
            style={{ color: '#30BA78' }}
          >
            {subPath.id}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {subPath.entryTags.map((tag) => (
              <EntryTag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <span className="text-xs font-semibold" style={{ color: '#8FAFA6' }}>
          {index + 1}/{total}
        </span>
      </div>

      <h4 className="text-base font-bold mb-1" style={{ color: '#F0F0F0' }}>
        {subPath.title}
      </h4>
      <p className="text-sm italic mb-5" style={{ color: '#8FAFA6' }}>
        {subPath.subtitle}
      </p>

      <div className="space-y-4 mb-5">
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#30BA78', letterSpacing: '0.08em' }}>
            The Move
          </h5>
          <p className="text-sm leading-relaxed" style={{ color: '#F0F0F0' }}>{subPath.move}</p>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#30BA78', letterSpacing: '0.08em' }}>
            What Changes
          </h5>
          <p className="text-sm leading-relaxed" style={{ color: '#F0F0F0' }}>{subPath.whatChanges}</p>
        </div>
        <div>
          <h5 className="text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color: '#30BA78', letterSpacing: '0.08em' }}>
            Business Value
          </h5>
          <p className="text-sm leading-relaxed" style={{ color: '#F0F0F0' }}>{subPath.businessValue}</p>
        </div>
      </div>

      <div className="mb-5">
        <span
          className="inline-block px-3 py-1 text-xs font-semibold"
          style={{
            background: 'rgba(48, 186, 120, 0.1)',
            border: '1px solid rgba(48, 186, 120, 0.3)',
            color: '#30BA78',
            borderRadius: '2px',
          }}
        >
          {subPath.suseProduct}
        </span>
      </div>

      <div className="mb-5">
        <h5 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#8FAFA6', letterSpacing: '0.08em' }}>
          Sovereignty Contribution
        </h5>
        <div className="flex flex-wrap gap-1.5">
          {subPath.sovContribution.map((sov) => {
            const code = sov.split(' ')[0];
            return (
              <SovPill key={sov} code={code} onClick={() => onSovClick(code)} />
            );
          })}
        </div>
      </div>

      <div className="gradient-divider mb-4" />

      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: '#8FAFA6', letterSpacing: '0.08em' }}>
            Risk Reduction
          </span>
          <StarRating rating={subPath.riskReduction} color="orange" animate />
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: '#8FAFA6', letterSpacing: '0.08em' }}>
            Ease of Adoption
          </span>
          <StarRating rating={subPath.easeOfAdoption} color="green" animate />
        </div>
      </div>

      <div className="mt-3">
        <span className="text-xs" style={{ color: '#8FAFA6' }}>
          SEAL Impact:{' '}
          <span style={{ color: '#F0F0F0' }}>{subPath.sealImpact}</span>
        </span>
      </div>

      {subPath.suseService && (
        <>
          <div className="gradient-divider mt-5 mb-4" />

          <div className="mb-5">
            <h5 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#30BA78', letterSpacing: '0.08em' }}>
              SUSE Services
            </h5>
            <p className="text-sm leading-relaxed" style={{ color: '#F0F0F0' }}>
              {subPath.suseService}
            </p>
          </div>
        </>
      )}

      <div className="gradient-divider mt-5 mb-4" />

      <div>
        <p className="leading-relaxed mb-3" style={{ color: '#8FAFA6', fontSize: '0.85rem' }}>
          {subPath.partnerHelp}
        </p>
        <div className="text-right">
          <a
            href="https://partner.suse.com/s/find-partner?_gl=1*1wjjidt*_gcl_au*MTIzODQ2ODUzNC4xNzY5NTI0MTQ5LjIxMjA2ODI3MS4xNzY5Njc3MTI2LjE3Njk2NzcxMzA.*_ga*MzIxODM3NjIyLjE3Njk1MjQxNTI.*_ga_JEVBS2XFKK*czE3NzA5MDEwMTUkbzI5JGcxJHQxNzcwOTAzMDQ3JGo0OCRsMCRoNjAxNjAxMjk1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-200"
            style={{
              color: '#30BA78',
              fontSize: '0.8rem',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            Find a partner →
          </a>
        </div>
      </div>
    </div>
  );
}
