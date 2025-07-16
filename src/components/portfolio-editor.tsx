'use client';

import { useState } from 'react';
import type { PortfolioData, Project } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Download, FileImage, FileText, FileType, Plus, Trash2, Upload, Wand2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { exportAsJPEG, exportAsPDF, exportAsPNG } from '@/lib/export-helpers';
import { AiAdvisorSheet } from './ai-advisor-sheet';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

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
  const { toast } = useToast();

  const handleFieldChange = (field: keyof PortfolioData, value: any) => {
    setPortfolio(prev => ({ ...prev, [field]: value }));
  };
  
  const handleContactChange = (field: keyof PortfolioData['contact'], value: string) => {
    setPortfolio(prev => ({...prev, contact: {...prev.contact, [field]: value}}));
  };
  
  const handleProjectChange = (projectId: string, field: keyof Project, value: string) => {
    setPortfolio(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === projectId ? {...p, [field]: value} : p),
    }));
  };

  const addSkill = () => {
    const newSkill = `New Skill`;
    if(portfolio.skills.length < 12) {
      setPortfolio(prev => ({...prev, skills: [...prev.skills, newSkill]}));
    } else {
      toast({ title: "Skill limit reached", description: "You can add a maximum of 12 skills.", variant: 'destructive' });
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setPortfolio(prev => ({...prev, skills: prev.skills.filter((_, i) => _.toString() + i !== skillToRemove)}));
  }
  
  const handleSkillChange = (oldValue: string, newValue: string) => {
    const newSkills = [...portfolio.skills];
    const index = newSkills.findIndex(s => s === oldValue);
    if (index !== -1) {
      newSkills[index] = newValue;
      handleFieldChange('skills', newSkills);
    }
  }


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
      <div id="portfolio-preview" className="bg-background p-4 sm:p-8 rounded-lg shadow-sm border">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="relative group">
                <Avatar className="w-32 h-32 text-6xl">
                  <AvatarImage src={portfolio.avatarUrl} data-ai-hint="professional portrait" />
                  <AvatarFallback>{portfolio.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center md:text-left flex-1">
                <Input className="text-4xl font-bold font-headline border-0 shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent" value={portfolio.name} onChange={(e) => handleFieldChange('name', e.target.value)} />
                <Input className="text-xl text-accent border-0 shadow-none p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent" value={portfolio.title} onChange={(e) => handleFieldChange('title', e.target.value)} />
              </div>
            </div>
            
            <Separator className="my-8" />

            {/* About Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-headline mb-4">About Me</h2>
              <Textarea className="min-h-[120px] bg-card" value={portfolio.about} onChange={(e) => handleFieldChange('about', e.target.value)} />
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold font-headline mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {portfolio.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-1 px-3 relative group/badge has-[:focus]:ring-2 has-[:focus]:ring-ring">
                      <Input value={skill} onChange={(e) => handleSkillChange(skill, e.target.value)} className="border-0 bg-transparent h-auto p-0 w-auto focus-visible:ring-0 shadow-none" />
                      <button onClick={() => removeSkill(skill + index)} className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover/badge:opacity-100 transition-opacity">
                        <Trash2 className="w-3 h-3"/>
                      </button>
                    </Badge>
                ))}
                 <Button size="sm" variant="outline" onClick={addSkill}><Plus className="h-4 w-4 mr-1" /> Add Skill</Button>
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <h2 className="text-3xl font-bold font-headline mb-8">Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {portfolio.projects.map(project => (
                  <Card key={project.id} className="overflow-hidden">
                     <div className="aspect-video relative">
                        <Image src={project.imageUrl} alt={project.name} layout="fill" objectFit="cover" data-ai-hint="software project" />
                     </div>
                    <CardHeader>
                      <Input className="text-xl font-bold border-0 shadow-none p-0 h-auto focus-visible:ring-0 bg-transparent" value={project.name} onChange={(e) => handleProjectChange(project.id, 'name', e.target.value)} />
                    </CardHeader>
                    <CardContent>
                      <Textarea className="min-h-[80px] mb-2" value={project.description} onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)} />
                      <Input placeholder="Project Link" value={project.link} onChange={(e) => handleProjectChange(project.id, 'link', e.target.value)} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <Separator className="my-8" />
            
            {/* Contact Section */}
            <div>
              <h2 className="text-3xl font-bold font-headline mb-4">Contact Me</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Email" value={portfolio.contact.email} onChange={(e) => handleContactChange('email', e.target.value)} />
                  <Input placeholder="Phone" value={portfolio.contact.phone} onChange={(e) => handleContactChange('phone', e.target.value)} />
                  <Input placeholder="LinkedIn URL" value={portfolio.contact.linkedin} onChange={(e) => handleContactChange('linkedin', e.target.value)} />
                  <Input placeholder="GitHub URL" value={portfolio.contact.github} onChange={(e) => handleContactChange('github', e.target.value)} />
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <AiAdvisorSheet open={isAiSheetOpen} onOpenChange={setIsAiSheetOpen} portfolioContent={getPortfolioContentAsString()} />
    </>
  );
}
