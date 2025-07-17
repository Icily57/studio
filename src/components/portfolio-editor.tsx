'use client';

import { useState } from 'react';
import type { PortfolioData } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Download, Eye, FileImage, FileText, FileType, LayoutTemplate, Upload, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { exportAsJPEG, exportAsPDF, exportAsPNG } from '@/lib/export-helpers';
import { AiAdvisorSheet } from './ai-advisor-sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { templates } from '@/lib/templates';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { PortfolioPreview } from './portfolio-preview';
import { PortfolioForm } from './portfolio-form';
import { ImportDialog } from './import-dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';


const initialData: PortfolioData = {
  name: 'Alex Doe',
  title: 'Full-Stack Developer & UI/UX Designer',
  avatarUrl: 'https://placehold.co/128x128.png" data-ai-hint="user avatar"',
  about: "I'm a passionate developer with a knack for creating beautiful and functional web applications. With over 5 years of experience, I've honed my skills in both front-end and back-end development, always striving for pixel-perfect design and robust code.",
  skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Figma', 'UI/UX Design', 'Tailwind CSS'],
  projects: [
    { id: '1', name: 'E-commerce Platform', description: 'A full-featured e-commerce site with a custom CMS.', imageUrl: 'https://placehold.co/400x300.png" data-ai-hint="online store"', link: '#' },
    { id: '2', name: 'Project Management Tool', description: 'A SaaS application to help teams manage tasks and projects.', imageUrl: 'https://placehold.co/400x300.png" data-ai-hint="task management"', link: '#' },
  ],
  contact: {
    email: 'alex.doe@example.com',
    phone: '+1 234 567 890',
    linkedin: 'linkedin.com/in/alexdoe',
    github: 'github.com/alexdoe',
  },
  design: {
    themeColor: '#0ea5e9', // sky-500
    font: 'inter',
    layout: 'classic-top',
  }
};

export function PortfolioEditor() {
  const [portfolio, setPortfolio] = useState<PortfolioData>(initialData);
  const [isAiSheetOpen, setIsAiSheetOpen] = useState(false);
  const [isTemplateDialogOpen, setIsTemplateDialogOpen] = useState(false);
  const [isPreviewDialogOpen, setIsPreviewDialogOpen] = useState(false);
  const [isImportDialogOpen, setIsImportDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleTemplateSelect = (template: Omit<PortfolioData, 'design'>) => {
    setPortfolio(prev => ({ ...template, design: prev.design }));
    setIsTemplateDialogOpen(false);
    toast({ title: 'Template applied!', description: 'The portfolio has been updated with the new template.' });
  };
  
  const handleExport = (format: 'pdf' | 'png' | 'jpeg' | 'doc') => {
    toast({ title: "Exporting...", description: `Your portfolio is being exported as a ${format.toUpperCase()} file.`});
    const element = document.getElementById('portfolio-preview');
    if (!element) {
        toast({ title: "Export failed", description: "Preview element not found.", variant: 'destructive'});
        return;
    }

    if (format === 'pdf') exportAsPDF(element, 'portfolio.pdf');
    if (format === 'png') exportAsPNG(element, 'portfolio.png');
    if (format === 'jpeg') exportAsJPEG(element, 'portfolio.jpeg');
    if (format === 'doc') {
      toast({ title: "Coming Soon!", description: "DOC export is not yet available." });
    }
  }

  const handleImportComplete = (data: PortfolioData) => {
    setPortfolio(prev => ({...data, design: prev.design })); // Keep design settings
  };
  
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
        <h1 className="text-2xl font-bold font-headline text-foreground">Portfolio Builder</h1>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <Button variant="outline" className="lg:hidden" onClick={() => setIsPreviewDialogOpen(true)}>
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>

          <Dialog open={isTemplateDialogOpen} onOpenChange={setIsTemplateDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline"><LayoutTemplate className="mr-2 h-4 w-4" />Templates</Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[90vh] flex flex-col bg-card/80 backdrop-blur-xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-headline">Choose a Content Template</DialogTitle>
                <p className="text-muted-foreground">Select a starting point for your portfolio content. You can customize everything later.</p>
              </DialogHeader>
              <div className="flex-1 min-h-0">
                <ScrollArea className="h-full pr-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card
                      className="cursor-pointer hover:shadow-lg hover:border-accent transition-all border-2 flex items-center justify-center p-6 bg-card/60"
                      onClick={() => handleTemplateSelect(initialData)}
                    >
                      <CardHeader className="text-center">
                        <CardTitle>Reset to Default</CardTitle>
                        <CardDescription>Start with the default developer template.</CardDescription>
                      </CardHeader>
                    </Card>
                    {templates.map(template => (
                      <Card
                        key={template.name}
                        className="cursor-pointer hover:shadow-lg hover:border-accent transition-all border-2 flex flex-col justify-between p-6 bg-card/60"
                        onClick={() => handleTemplateSelect(template.data)}
                      >
                        <CardHeader>
                          <CardTitle className="text-lg">{template.name}</CardTitle>
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
          <Button variant="outline" onClick={() => setIsImportDialogOpen(true)}><Upload className="mr-2 h-4 w-4" />Import</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90"><Download className="mr-2 h-4 w-4" />Export</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleExport('pdf')}><FileText className="mr-2 h-4 w-4" />PDF</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('png')}><FileImage className="mr-2 h-4 w-4" />PNG</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('jpeg')}><FileImage className="mr-2 h-4 w-4" />JPG</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleExport('doc')} disabled><FileType className="mr-2 h-4 w-4" />DOC</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid lg:grid-cols-[40%_60%] gap-8 items-start">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <ScrollArea className="h-[calc(100vh-16rem)] rounded-lg p-2 mt-2 bg-secondary/20">
              <PortfolioForm portfolio={portfolio} setPortfolio={setPortfolio} />
            </ScrollArea>
          </TabsContent>
          <TabsContent value="design">
             <ScrollArea className="h-[calc(100vh-16rem)] rounded-lg p-2 mt-2 bg-secondary/20">
              <PortfolioForm portfolio={portfolio} setPortfolio={setPortfolio} tab="design"/>
            </ScrollArea>
          </TabsContent>
        </Tabs>
        <div className="hidden lg:block sticky top-24">
            <h2 className="text-lg font-semibold font-headline mb-4 text-foreground">Live Preview</h2>
            <Card className="shadow-lg border-2">
                <ScrollArea className="h-[calc(100vh-14rem)]">
                    <div id="portfolio-preview" className="bg-white p-4 sm:p-8">
                        <PortfolioPreview portfolio={portfolio} />
                    </div>
                </ScrollArea>
            </Card>
        </div>
      </div>

      <AiAdvisorSheet open={isAiSheetOpen} onOpenChange={setIsAiSheetOpen} portfolioContent={getPortfolioContentAsString()} />
      
      <ImportDialog 
        open={isImportDialogOpen} 
        onOpenChange={setIsImportDialogOpen}
        onImportComplete={handleImportComplete}
      />
      
      <Dialog open={isPreviewDialogOpen} onOpenChange={setIsPreviewDialogOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0">
          <DialogHeader className="p-4 border-b">
            <DialogTitle>Live Preview</DialogTitle>
          </DialogHeader>
          <div className="flex-1 min-h-0">
            <ScrollArea className="h-full">
              <div id="portfolio-preview-mobile" className="bg-white p-4 sm:p-8">
                  <PortfolioPreview portfolio={portfolio} />
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
