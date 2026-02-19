import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { pathways } from '../data/pathways';
import type { SubPath } from '../data/pathways';
import StarRating from './StarRating';
import EntryTag from './EntryTag';
import SovPill from './SovPill';

interface MatrixViewProps {
  activeFilter: string | null;
  sovFilter: string | null;
  onSovClick: (code: string) => void;
}

type SortKey = 'id' | 'riskReduction' | 'easeOfAdoption' | 'title';

function matchesFilter(sp: SubPath, filter: string | null): boolean {
  if (!filter) return true;
  if (filter === 'Easy Implementation') return sp.easeOfAdoption >= 4;
  if (filter === 'Big Impact') return sp.riskReduction >= 4;
  if (filter === 'Magic Improvements') return sp.easeOfAdoption >= 4 && sp.riskReduction >= 4;
  return true;
}

export default function MatrixView({ activeFilter, sovFilter, onSovClick }: MatrixViewProps) {
  const [sortKey, setSortKey] = useState<SortKey>('id');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir(key === 'riskReduction' || key === 'easeOfAdoption' ? 'desc' : 'asc');
    }
  };

  const allSubPaths = pathways
    .filter((p) => {
      if (sovFilter && !p.sovObjectives.includes(sovFilter)) {
        return false;
      }
      return true;
    })
    .flatMap((p) =>
      p.subPaths
        .filter((sp) => matchesFilter(sp, activeFilter))
        .map((sp) => ({ ...sp, pathwayNumber: p.number, pathwayTitle: p.title }))
    );

  const sorted = [...allSubPaths].sort((a, b) => {
    const dir = sortDir === 'asc' ? 1 : -1;
    if (sortKey === 'id') return a.id.localeCompare(b.id) * dir;
    if (sortKey === 'title') return a.title.localeCompare(b.title) * dir;
    if (sortKey === 'riskReduction') return (a.riskReduction - b.riskReduction) * dir;
    if (sortKey === 'easeOfAdoption') return (a.easeOfAdoption - b.easeOfAdoption) * dir;
    return 0;
  });

  const headerStyle = 'text-xs font-semibold uppercase tracking-wider cursor-pointer select-none transition-colors duration-200 hover:text-suse-green';

  return (
    <div className="overflow-x-auto">
      <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: '0 2px' }}>
        <thead>
          <tr>
            {[
              { key: 'id' as SortKey, label: 'ID', width: '60px' },
              { key: 'title' as SortKey, label: 'Sub-Path', width: '' },
              { key: null, label: 'SUSE Product', width: '200px' },
              { key: 'riskReduction' as SortKey, label: 'Risk Reduction', width: '130px' },
              { key: 'easeOfAdoption' as SortKey, label: 'Ease of Adoption', width: '130px' },
              { key: null, label: 'SOV Objectives', width: '180px' },
              { key: null, label: 'SEAL Impact', width: '160px' },
              { key: null, label: 'Tags', width: '140px' },
            ].map((col, i) => (
              <th
                key={i}
                className={`text-left px-3 py-3 ${col.key ? headerStyle : 'text-xs font-semibold uppercase tracking-wider'}`}
                style={{
                  color: '#8FAFA6',
                  letterSpacing: '0.08em',
                  width: col.width || 'auto',
                  borderBottom: '1px solid rgba(48, 186, 120, 0.15)',
                }}
                onClick={() => col.key && handleSort(col.key)}
              >
                <div className="flex items-center gap-1">
                  {col.label}
                  {col.key && (
                    <ArrowUpDown
                      size={12}
                      strokeWidth={1.5}
                      style={{ color: sortKey === col.key ? '#30BA78' : '#8FAFA6', opacity: sortKey === col.key ? 1 : 0.4 }}
                    />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((sp) => (
            <tr
              key={sp.id}
              className="transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <td className="px-3 py-3 text-sm font-bold" style={{ color: '#30BA78' }}>
                {sp.id}
              </td>
              <td className="px-3 py-3">
                <div className="text-sm font-semibold" style={{ color: '#F0F0F0' }}>{sp.title}</div>
                <div className="text-xs" style={{ color: '#8FAFA6' }}>{sp.subtitle}</div>
              </td>
              <td className="px-3 py-3">
                <span className="text-xs px-2 py-0.5" style={{ background: 'rgba(48, 186, 120, 0.1)', border: '1px solid rgba(48, 186, 120, 0.2)', color: '#30BA78', borderRadius: '2px' }}>
                  {sp.suseProduct}
                </span>
              </td>
              <td className="px-3 py-3">
                <StarRating rating={sp.riskReduction} color="orange" />
              </td>
              <td className="px-3 py-3">
                <StarRating rating={sp.easeOfAdoption} color="green" />
              </td>
              <td className="px-3 py-3">
                <div className="flex flex-wrap gap-1">
                  {sp.sovContribution.map((sov) => {
                    const code = sov.split(' ')[0];
                    return <SovPill key={sov} code={code} onClick={() => onSovClick(code)} />;
                  })}
                </div>
              </td>
              <td className="px-3 py-3 text-xs" style={{ color: '#8FAFA6' }}>
                {sp.sealImpact}
              </td>
              <td className="px-3 py-3">
                <div className="flex flex-wrap gap-1">
                  {sp.entryTags.map((tag) => (
                    <EntryTag key={tag} tag={tag} />
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
