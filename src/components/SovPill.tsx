interface SovPillProps {
  code: string;
  onClick?: () => void;
  highlighted?: boolean;
}

export default function SovPill({ code, onClick, highlighted }: SovPillProps) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider border transition-all duration-200"
      style={{
        borderColor: highlighted ? '#30BA78' : 'rgba(48, 186, 120, 0.25)',
        background: highlighted ? 'rgba(48, 186, 120, 0.15)' : 'rgba(48, 186, 120, 0.05)',
        color: highlighted ? '#30BA78' : '#8FAFA6',
        borderRadius: '2px',
      }}
    >
      {code}
    </button>
  );
}
