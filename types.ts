
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export interface NavItem {
  label: string;
  id: string;
}
