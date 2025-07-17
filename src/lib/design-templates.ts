import type { PortfolioData } from '@/types';

type DesignTemplate = {
  name: string;
  themeColor: string;
  font: PortfolioData['design']['font'];
};

export const designTemplates: DesignTemplate[] = [
  { name: 'Sky & Modern', themeColor: '#0ea5e9', font: 'inter' },
  { name: 'Crimson & Grotesk', themeColor: '#dc2626', font: 'space' },
  { name: 'Emerald & Elegant', themeColor: '#10b981', font: 'serif' },
  { name: 'Slate & System', themeColor: '#475569', font: 'system' },
  { name: 'Amber & Modern', themeColor: '#f59e0b', font: 'inter' },
  { name: 'Indigo & Elegant', themeColor: '#4f46e5', font: 'serif' },
  { name: 'Teal & Grotesk', themeColor: '#14b8a6', font: 'space' },
  { name: 'Rose & System', themeColor: '#f43f5e', font: 'system' },
  { name: 'Oceanic & Modern', themeColor: '#0891b2', font: 'inter' },
  { name: 'Forest & Elegant', themeColor: '#166534', font: 'serif' },
  { name: 'Violet & Grotesk', themeColor: '#7c3aed', font: 'space' },
  { name: 'Charcoal & System', themeColor: '#334155', font: 'system' },
  { name: 'Lime & Modern', themeColor: '#84cc16', font: 'inter' },
  { name: 'Fuchsia & Elegant', themeColor: '#d946ef', font: 'serif' },
  { name: 'Sapphire & Grotesk', themeColor: '#2563eb', font: 'space' },
  { name: 'Stone & System', themeColor: '#78716c', font: 'system' },
  { name: 'Sunset & Modern', themeColor: '#f97316', font: 'inter' },
  { name: 'Grape & Elegant', themeColor: '#9333ea', font: 'serif' },
  { name: 'Mint & Grotesk', themeColor: '#2dd4bf', font: 'space' },
  { name: 'Clay & System', themeColor: '#a16207', font: 'system' },
  { name: 'Coral & Modern', themeColor: '#ff7f50', font: 'inter' },
  { name: 'Midnight & Elegant', themeColor: '#1e293b', font: 'serif' },
];
