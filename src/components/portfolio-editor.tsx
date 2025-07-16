'use client';

import { useState } from 'react';
import type { PortfolioData, Project } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, FileImage, FileText, FileType, LayoutTemplate, Plus, Trash2, Upload, Wand2, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { exportAsJPEG, exportAsPDF, exportAsPNG } from '@/lib/export-helpers';
import { AiAdvisorSheet } from './ai-advisor-sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { templates } from '@/lib/templates';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { PortfolioPreview } from './portfolio-preview';
import { PortfolioForm } from './portfolio-form';

const initialData: PortfolioData = {
  name: 'Alex Doe',
  title: 'Full-Stack Developer & UI/UX Designer',
  avatarUrl: 'https://placehold.co/128x128.png',
  about: "I'm a passionate developer with a knack for creating beautiful and functional web applications. With over 5 years of experience, I've honed my skills in both front-end and back-end development, always striving for pixel-perfect design and robust code.",
  skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma', 'UI/UX Design', 'Tailwind CSS'],
  projects: [
    { id: '1', name: 'E-commerce Platform', description: 'A full-featured e-commerce site with a custom CMS.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
    { id: '2', name: 'Project Management Tool', description: 'A SaaS application to help teams manage tasks and projects.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
  ],
  contact: {
    email: 'alex.doe@example.com',
    phone: '+1 234 567 890',
    linkedin: 'linkedin.com/in/alexdoe',
    github: 'github.com/alexdoe',
  },
};

export function PortfolioEditor() {
  const [portfolio, setPortfolio] = useState<PortfolioData>(initialData);
  const [isAiSheetOpen, setIsAiSheetOpen] = useState(false);
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleTemplateSelect = (template: PortfolioData) => {
    setPortfolio(template);
    setIsTemplateDialogOpen(false);
    toast({ title: 'Template applied!', description: 'The portfolio has been updated with the new template.' });
  };

  const handleExport = (format: 'pdf' | 'png' | 'jpeg' | 'doc') => {
    toast({ title: "Exporting...", description: `Your portfolio is being exported as a ${format.toUpperCase()} file.`});
    const element = document.getElementById('portfolio-preview');
    if (!element) return;

    if (format === 'pdf') exportAsPDF(element, 'portfolio.pdf');
    if (format === 'png') exportAsPNG(element, 'portfolio.png');
    if (format === 'jpeg') exportAsJPEG(element, 'portfolio.jpeg');
    if (format === 'doc') {
      toast({ title: "Coming Soon!", description: "DOC export is not yet available." });
    }
  }
  
  const getPortfolioContentAsString = (): string => {
    return `
Name: ${portfolio.name}
Title: ${portfolio.title}
About: ${portfolio.about}
Skills: ${portfolio.skills.join(', ')}
Projects:
${portfolio.projects.map(p => `- ${p.name}: ${p.description}`).join('\n')}
Contact:
Email: ${portfolio.contact.email}
Phone: ${portfolio.contact.phone}
LinkedIn: ${portfolio.contact.linkedin}
GitHub: ${portfolio.contact.github}
    `;
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold font-headline">Portfolio Builder</h1>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Dialog open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline"><LayoutTemplate className="mr-2 h-4 w-4" />Templates</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline">Choose a Template</DialogTitle>
                <p className="text-muted-foreground">Select a starting point for your portfolio. You can customize everything later.</p>
              </DialogHeader>
              <div className="flex-1 min-h-0">
                <ScrollArea className="h-full pr-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card
                      className="cursor-pointer hover:shadow-lg transition-shadow border-dashed border-2 flex items-center justify-center"
                      onClick={() => handleTemplateSelect(initialData)}
                    >
                      <CardHeader>
                        <CardTitle>Reset to Default</CardTitle>
                        <CardDescription>Start with the default developer template.</CardDescription>
                      </CardHeader>
                    </Card>
                    {templates.map(template => (
                      <Card
                        key={template.name}
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => handleTemplateSelect(template.data)}
                      >
                        <CardHeader>
                          <CardTitle>{template.name}</CardTitle>
                          <CardDescription>{template.data.title}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" onClick={() => setIsAiSheetOpen(true)}><Wand2 className="mr-2 h-4 w-4" />AI Advisor</Button>
          <Button variant="outline"><Upload className="mr-2 h-4 w-4" />Import</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button><Download className="mr-2 h-4 w-4" />Export</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleExport('pdf')}><FileText className="mr-2 h-4 w-4" />PDF</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('png')}><FileImage className="mr-2 h-4 w-4" />PNG</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('jpeg')}><FileImage className="mr-2 h-4 w-4" />JPG</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('doc')}><FileType className="mr-2 h-4 w-4" />DOC</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <PortfolioForm portfolio={portfolio} setPortfolio={setPortfolio} />
        <div className="hidden lg:block sticky top-24">
            <h2 className="text-lg font-semibold font-headline mb-4">Live Preview</h2>
            <Card className="shadow-lg">
                <ScrollArea className="h-[calc(100vh-10rem)]">
                    <div id="portfolio-preview" className="bg-background p-4 sm:p-8">
                        <PortfolioPreview portfolio={portfolio} />
                    </div>
                </ScrollArea>
            </Card>
        </div>
      </div>

      <AiAdvisorSheet open={isAiSheetOpen} onOpenChange={setIsAiSheetOpen} portfolioContent={getPortfolioContentAsString()} />
    </>
  );
}
