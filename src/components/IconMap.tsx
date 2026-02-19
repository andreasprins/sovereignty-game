import { Shield, Server, Cloud, Package, Brain, Wifi, Users } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Shield,
  Server,
  Cloud,
  Package,
  Brain,
  Wifi,
  Users,
};

interface IconMapProps {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export default function DynamicIcon({ name, size = 24, strokeWidth = 1.5, className }: IconMapProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} strokeWidth={strokeWidth} className={className} />;
}
