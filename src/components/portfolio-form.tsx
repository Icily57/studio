// This is a new file
'use client';

import type { Dispatch, SetStateAction } from 'react';
import type { PortfolioData, Project } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Trash2 } from 'lucide-react';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Label } from './ui/label';

interface PortfolioFormProps {
    portfolio: PortfolioData;
    setPortfolio: Dispatch<SetStateAction<PortfolioData>>;
}

export function PortfolioForm({ portfolio, setPortfolio }: PortfolioFormProps) {
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

    const addProject = () => {
        const newProject: Project = {
            id: new Date().getTime().toString(),
            name: 'New Project',
            description: 'A brief description of your project.',
            imageUrl: 'https://placehold.co/400x300.png',
            link: '#'
        };
        setPortfolio(prev => ({ ...prev, projects: [...prev.projects, newProject] }));
    }

    const removeProject = (projectId: string) => {
        setPortfolio(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== projectId) }));
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Tell us about yourself.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="flex items-center gap-4">
                        <Avatar className="w-20 h-20 text-3xl">
                            <AvatarImage src={portfolio.avatarUrl} data-ai-hint="professional portrait" />
                            <AvatarFallback>{portfolio.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                             <Label htmlFor="avatarUrl">Avatar URL</Label>
                             <Input id="avatarUrl" placeholder="https://placehold.co/128x128.png" value={portfolio.avatarUrl} onChange={(e) => handleFieldChange('avatarUrl', e.target.value)} />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="e.g. Alex Doe" value={portfolio.name} onChange={(e) => handleFieldChange('name', e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="title">Professional Title</Label>
                        <Input id="title" placeholder="e.g. Full-Stack Developer" value={portfolio.title} onChange={(e) => handleFieldChange('title', e.target.value)} />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>A brief summary about your professional background.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Textarea className="min-h-[120px]" value={portfolio.about} onChange={(e) => handleFieldChange('about', e.target.value)} />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>List your key technical and soft skills.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {portfolio.skills.map((skill, index) => (
                             <Badge key={index} variant="secondary" className="text-sm py-1 px-3 relative group/badge has-[:focus]:ring-2 has-[:focus]:ring-ring">
                                <Input value={skill} onChange={(e) => handleSkillChange(skill, e.target.value)} className="border-0 bg-transparent h-auto p-0 w-auto focus-visible:ring-0 shadow-none min-w-[60px]" />
                                <button onClick={() => removeSkill(skill + index)} className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover/badge:opacity-100 transition-opacity">
                                    <Trash2 className="w-3 h-3"/>
                                </button>
                             </Badge>
                        ))}
                        <Button size="sm" variant="outline" onClick={addSkill}><Plus className="h-4 w-4 mr-1" /> Add Skill</Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Projects</CardTitle>
                    <CardDescription>Showcase your best work.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {portfolio.projects.map(project => (
                        <Card key={project.id} className="relative p-4">
                             <button onClick={() => removeProject(project.id)} className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center hover:bg-destructive/80 transition-colors">
                                <Trash2 className="w-4 h-4"/>
                            </button>
                            <div className="space-y-2">
                                <Label htmlFor={`project-name-${project.id}`}>Project Name</Label>
                                <Input id={`project-name-${project.id}`} placeholder="Project Name" value={project.name} onChange={(e) => handleProjectChange(project.id, 'name', e.target.value)} />

                                <Label htmlFor={`project-desc-${project.id}`}>Description</Label>
                                <Textarea id={`project-desc-${project.id}`} className="min-h-[80px] mb-2" value={project.description} onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)} />

                                <Label htmlFor={`project-img-${project.id}`}>Image URL</Label>
                                <Input id={`project-img-${project.id}`} placeholder="Image URL" value={project.imageUrl} onChange={(e) => handleProjectChange(project.id, 'imageUrl', e.target.value)} />
                                
                                <Label htmlFor={`project-link-${project.id}`}>Project Link</Label>
                                <Input id={`project-link-${project.id}`} placeholder="Project Link" value={project.link} onChange={(e) => handleProjectChange(project.id, 'link', e.target.value)} />
                            </div>
                        </Card>
                    ))}
                    <Button variant="outline" onClick={addProject} className="w-full"><Plus className="h-4 w-4 mr-2" />Add Project</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>How can people reach you?</CardDescription>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Email" value={portfolio.contact.email} onChange={(e) => handleContactChange('email', e.target.value)} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Phone" value={portfolio.contact.phone} onChange={(e) => handleContactChange('phone', e.target.value)} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn URL</Label>
                        <Input id="linkedin" placeholder="LinkedIn URL" value={portfolio.contact.linkedin} onChange={(e) => handleContactChange('linkedin', e.target.value)} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="github">GitHub URL</Label>
                        <Input id="github" placeholder="GitHub URL" value={portfolio.contact.github} onChange={(e) => handleContactChange('github', e.target.value)} />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
