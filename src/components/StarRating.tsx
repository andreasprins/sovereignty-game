import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  color?: 'green' | 'orange';
  animate?: boolean;
}

export default function StarRating({ rating, color = 'green', animate = false }: StarRatingProps) {
  const fillColor = color === 'orange' ? '#FE7C3F' : '#30BA78';
  const emptyColor = 'rgba(143, 175, 166, 0.3)';

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={1.5}
          fill={i <= rating ? fillColor : 'transparent'}
          color={i <= rating ? fillColor : emptyColor}
          className={animate ? 'star-animate' : ''}
          style={animate ? { animationDelay: `${(i - 1) * 50}ms` } : undefined}
        />
      ))}
    </div>
  );
}
