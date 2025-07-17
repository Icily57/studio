// This is a new file
'use client';

// This is a placeholder for a real data fetching mechanism
import { templates } from '@/lib/templates';
import { PortfolioPreview } from '@/components/portfolio-preview';

export default function PortfolioPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the portfolio data based on the id.
  // For this prototype, we'll just use the first template as an example.
  const portfolioData = { ...templates[0].data, design: { themeColor: '#0ea5e9', font: 'inter' as const, layout: 'classic-top' as const }, resumeUrl: 'about:blank' };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
         <PortfolioPreview portfolio={portfolioData} view="projects" />
      </div>
    </div>
  );
}
