interface EntryTagProps {
  tag: string;
}

export default function EntryTag({ tag }: EntryTagProps) {
  const styles: Record<string, { bg: string; border: string; text: string }> = {
    'Quick Win': {
      bg: 'rgba(48, 186, 120, 0.15)',
      border: '#30BA78',
      text: '#30BA78',
    },
    'Low Risk': {
      bg: 'transparent',
      border: '#30BA78',
      text: '#30BA78',
    },
    'Big Impact': {
      bg: 'rgba(254, 124, 63, 0.15)',
      border: '#FE7C3F',
      text: '#FE7C3F',
    },
  };

  const style = styles[tag] || styles['Quick Win'];

  return (
    <span
      className="inline-flex px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider rounded-full"
      style={{
        backgroundColor: style.bg,
        border: `1px solid ${style.border}`,
        color: style.text,
      }}
    >
      {tag}
    </span>
  );
}
