// This is a new file
'use client';

import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type { PortfolioData, Project, Experience, Education, Award } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus, Trash2, Upload, LayoutPanelTop, PanelLeft, LayoutList, FileText } from 'lucide-react';
import { Badge } from './ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { designTemplates } from '@/lib/design-templates';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface PortfolioFormProps {
    portfolio: PortfolioData;
    setPortfolio: Dispatch<SetStateAction<PortfolioData>>;
    tab?: 'content' | 'design';
}

const parseImageUrlSrc = (url: string) => {
    if (typeof url !== 'string') return '';
    return url.split('"')[0];
}

export function PortfolioForm({ portfolio, setPortfolio, tab = 'content' }: PortfolioFormProps) {
    const { toast } = useToast();

    const handleFieldChange = (field: keyof PortfolioData, value: any) => {
        setPortfolio(prev => ({ ...prev, [field]: value }));
    };

    const handleDesignChange = (field: keyof PortfolioData['design'], value: any) => {
        setPortfolio(prev => ({ ...prev, design: {...prev.design, [field]: value } }));
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
    
    const handleItemChange = <T extends { id: string }>(
      list: keyof PortfolioData,
      itemId: string,
      field: keyof T,
      value: string
    ) => {
      setPortfolio(prev => {
        const updatedList = (prev[list] as T[]).map(item =>
          item.id === itemId ? { ...item, [field]: value } : item
        );
        return { ...prev, [list]: updatedList };
      });
    };
    
    const addItem = <T,>(list: keyof PortfolioData, newItem: T) => {
      setPortfolio(prev => ({
        ...prev,
        [list]: [...(prev[list] as T[]), newItem]
      }));
    };

    const removeItem = (list: keyof PortfolioData, itemId: string) => {      
      setPortfolio(prev => {
          const currentList = prev[list] as Array<{id: string}>;
          return { ...prev, [list]: currentList.filter(p => p.id !== itemId) };
      });
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
        if (portfolio.projects.length >= 6) {
            toast({ title: "Project limit reached", description: "You can add a maximum of 6 projects.", variant: "destructive" });
            return;
        }
        const newProject: Project = {
            id: new Date().getTime().toString(),
            name: 'New Project',
            description: 'A brief description of your project.',
            imageUrl: 'https://placehold.co/400x300.png" data-ai-hint="software project"',
            link: '#'
        };
        addItem('projects', newProject);
    }

    const addExperience = () => {
      const newExperience: Experience = {
        id: new Date().getTime().toString(),
        title: 'Job Title',
        company: 'Company Name',
        date: 'Year - Year',
        description: 'Key responsibilities and achievements.'
      };
      addItem('experience', newExperience);
    }
    
    const addEducation = () => {
      const newEducation: Education = {
        id: new Date().getTime().toString(),
        institution: 'University Name',
        degree: 'Degree or Certificate',
        date: 'Year - Year',
        description: 'Relevant coursework or honors.'
      };
      addItem('education', newEducation);
    }

    const addAward = () => {
      const newAward: Award = {
        id: new Date().getTime().toString(),
        name: 'Award Name',
        issuer: 'Issuing Organization',
        date: 'Year',
        description: 'A brief description of the award.'
      };
      addItem('awards', newAward);
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>, callback: (dataUrl: string) => void) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                toast({
                    title: "File too large",
                    description: "Please select a file smaller than 5MB.",
                    variant: "destructive",
                });
                return;
            }
            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                if(loadEvent.target?.result) {
                    callback(loadEvent.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleResumeUpload = (e: ChangeEvent<HTMLInputElement>) => {
        handleFileChange(e, (dataUrl) => {
            handleFieldChange('resumeUrl', dataUrl);
            toast({ title: 'Resume Uploaded', description: 'Your resume has been successfully attached.' });
        });
    }
    
    const handleDesignTemplateSelect = (template: { themeColor: string; font: PortfolioData['design']['font'] }) => {
        setPortfolio(prev => ({
            ...prev,
            design: {
                ...prev.design,
                themeColor: template.themeColor,
                font: template.font,
            }
        }));
        toast({ title: "Design Applied!", description: "The new color and font have been applied." });
    }

    if (tab === 'design') {
        return (
            <div className="space-y-6">
                 <Card>
                    <CardHeader>
                        <CardTitle>Design Templates</CardTitle>
                        <CardDescription>Select a pre-defined style or create your own below.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <ScrollArea className="h-48">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pr-4">
                                {designTemplates.map((template) => (
                                    <div
                                        key={template.name}
                                        className="cursor-pointer group"
                                        onClick={() => handleDesignTemplateSelect(template)}
                                    >
                                        <div 
                                            className={cn("h-16 w-full rounded-md border-2 flex items-center justify-center transition-all",
                                                portfolio.design.themeColor === template.themeColor && portfolio.design.font === template.font
                                                    ? 'border-primary'
                                                    : 'border-transparent group-hover:border-primary/50'
                                            )}
                                            style={{ backgroundColor: template.themeColor }}
                                        />
                                        <p className="text-xs font-medium text-center mt-2 text-muted-foreground group-hover:text-foreground">{template.name}</p>
                                    </div>
                                ))}
                            </div>
                       </ScrollArea>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Customize Appearance</CardTitle>
                        <CardDescription>Fine-tune the look and feel of your portfolio.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="themeColor">Theme Color</Label>
                            <div className="flex items-center gap-2">
                                <Input 
                                  id="themeColor" 
                                  type="color" 
                                  value={portfolio.design.themeColor} 
                                  onChange={(e) => handleDesignChange('themeColor', e.target.value)} 
                                  className="w-12 h-10 p-1"
                                />
                                <Input 
                                    type="text"
                                    value={portfolio.design.themeColor}
                                    onChange={(e) => handleDesignChange('themeColor', e.target.value)}
                                    placeholder="#0ea5e9"
                                />
                            </div>
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="font">Font Style</Label>
                            <Select
                                value={portfolio.design.font}
                                onValueChange={(value) => handleDesignChange('font', value)}
                            >
                                <SelectTrigger id="font">
                                    <SelectValue placeholder="Select a font style" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="inter">Modern (Inter)</SelectItem>
                                    <SelectItem value="space">Futuristic (Space Grotesk)</SelectItem>
                                    <SelectItem value="serif">Elegant (Lora)</SelectItem>
                                    <SelectItem value="system">System Default</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>Layout Arrangement</CardTitle>
                        <CardDescription>Choose the overall structure of your portfolio.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup
                            value={portfolio.design.layout}
                            onValueChange={(value) => handleDesignChange('layout', value)}
                            className="grid grid-cols-3 gap-4"
                        >
                            <div>
                                <RadioGroupItem value="classic-top" id="layout-classic" className="peer sr-only" />
                                <Label htmlFor="layout-classic" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                                    <LayoutPanelTop className="mb-3 h-6 w-6" />
                                    Top Header
                                </Label>
                            </div>
                             <div>
                                <RadioGroupItem value="modern-left" id="layout-modern" className="peer sr-only" />
                                <Label htmlFor="layout-modern" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                                    <PanelLeft className="mb-3 h-6 w-6" />
                                    Side Bar
                                </Label>
                            </div>
                             <div>
                                <RadioGroupItem value="centered-minimal" id="layout-minimal" className="peer sr-only" />
                                <Label htmlFor="layout-minimal" className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer">
                                    <LayoutList className="mb-3 h-6 w-6" />
                                    Minimal
                                </Label>
                            </div>
                        </RadioGroup>
                    </CardContent>
                 </Card>
            </div>
        )
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
                            <AvatarImage src={parseImageUrlSrc(portfolio.avatarUrl)} />
                            <AvatarFallback>{portfolio.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                             <Label htmlFor="avatarUrl">Avatar URL</Label>
                             <div className="flex gap-2">
                                <Input id="avatarUrl" placeholder="https://placehold.co/128x128.png" value={parseImageUrlSrc(portfolio.avatarUrl)} onChange={(e) => handleFieldChange('avatarUrl', e.target.value)} />
                                <Button asChild variant="outline" size="icon">
                                    <Label htmlFor="avatar-upload" className="cursor-pointer">
                                        <Upload className="h-4 w-4"/>
                                        <span className="sr-only">Upload Photo</span>
                                    </Label>
                                </Button>
                                <Input type="file" id="avatar-upload" className="hidden" accept="image/*" onChange={(e) => handleFileChange(e, (dataUrl) => handleFieldChange('avatarUrl', dataUrl))} />
                             </div>
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
                    <CardTitle>Resume</CardTitle>
                    <CardDescription>Upload your resume as a PDF. This will be available for download on your portfolio.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <Label htmlFor="resume-upload">Upload Resume (PDF)</Label>
                        <div className="flex items-center gap-2">
                            <Input
                                id="resume-display"
                                readOnly
                                value={portfolio.resumeUrl ? 'Resume uploaded successfully.' : 'No resume uploaded.'}
                                className="flex-1"
                                placeholder="Upload your resume..."
                            />
                            <Button asChild variant="outline">
                                <Label htmlFor="resume-upload" className="cursor-pointer">
                                    <Upload className="h-4 w-4 mr-2"/>
                                    Browse
                                </Label>
                            </Button>
                        </div>
                        <Input
                            type="file"
                            id="resume-upload"
                            className="hidden"
                            accept=".pdf"
                            onChange={handleResumeUpload}
                        />
                         {portfolio.resumeUrl && (
                             <div className="flex items-center gap-2 pt-2">
                                <FileText className="h-5 w-5 text-primary"/>
                                <span className="text-sm text-muted-foreground">Resume is attached.</span>
                                <Button variant="link" className="text-destructive h-auto p-0" onClick={() => handleFieldChange('resumeUrl', '')}>Remove</Button>
                             </div>
                         )}
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
                    <CardTitle>Work Experience</CardTitle>
                    <CardDescription>Detail your professional history.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {portfolio.experience.map(exp => (
                        <Card key={exp.id} className="relative p-4">
                             <button onClick={() => removeItem('experience', exp.id)} className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center hover:bg-destructive/80 transition-colors">
                                <Trash2 className="w-4 h-4"/>
                            </button>
                            <div className="space-y-2">
                                <Label htmlFor={`exp-title-${exp.id}`}>Job Title</Label>
                                <Input id={`exp-title-${exp.id}`} value={exp.title} onChange={(e) => handleItemChange('experience', exp.id, 'title', e.target.value)} />
                                <Label htmlFor={`exp-company-${exp.id}`}>Company</Label>
                                <Input id={`exp-company-${exp.id}`} value={exp.company} onChange={(e) => handleItemChange('experience', exp.id, 'company', e.target.value)} />
                                <Label htmlFor={`exp-date-${exp.id}`}>Date</Label>
                                <Input id={`exp-date-${exp.id}`} value={exp.date} onChange={(e) => handleItemChange('experience', exp.id, 'date', e.target.value)} />
                                <Label htmlFor={`exp-desc-${exp.id}`}>Description</Label>
                                <Textarea id={`exp-desc-${exp.id}`} className="min-h-[80px]" value={exp.description} onChange={(e) => handleItemChange('experience', exp.id, 'description', e.target.value)} />
                            </div>
                        </Card>
                    ))}
                    <Button variant="outline" onClick={addExperience} className="w-full"><Plus className="h-4 w-4 mr-2" />Add Experience</Button>
                </CardContent>
            </Card>
            
             <Card>
                <CardHeader>
                    <CardTitle>Education</CardTitle>
                    <CardDescription>List your academic background.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {portfolio.education.map(edu => (
                        <Card key={edu.id} className="relative p-4">
                             <button onClick={() => removeItem('education', edu.id)} className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center hover:bg-destructive/80 transition-colors">
                                <Trash2 className="w-4 h-4"/>
                            </button>
                            <div className="space-y-2">
                                <Label htmlFor={`edu-institution-${edu.id}`}>Institution</Label>
                                <Input id={`edu-institution-${edu.id}`} value={edu.institution} onChange={(e) => handleItemChange('education', edu.id, 'institution', e.target.value)} />
                                <Label htmlFor={`edu-degree-${edu.id}`}>Degree / Certificate</Label>
                                <Input id={`edu-degree-${edu.id}`} value={edu.degree} onChange={(e) => handleItemChange('education', edu.id, 'degree', e.target.value)} />
                                <Label htmlFor={`edu-date-${edu.id}`}>Date</Label>
                                <Input id={`edu-date-${edu.id}`} value={edu.date} onChange={(e) => handleItemChange('education', edu.id, 'date', e.target.value)} />
                                <Label htmlFor={`edu-desc-${edu.id}`}>Description</Label>
                                <Textarea id={`edu-desc-${edu.id}`} className="min-h-[60px]" value={edu.description} onChange={(e) => handleItemChange('education', edu.id, 'description', e.target.value)} />
                            </div>
                        </Card>
                    ))}
                    <Button variant="outline" onClick={addEducation} className="w-full"><Plus className="h-4 w-4 mr-2" />Add Education</Button>
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
                    <CardDescription>Showcase your best work. You can add up to 6 projects.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {portfolio.projects.map(project => (
                        <Card key={project.id} className="relative p-4">
                             <button onClick={() => removeItem('projects', project.id)} className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center hover:bg-destructive/80 transition-colors">
                                <Trash2 className="w-4 h-4"/>
                            </button>
                            <div className="space-y-2">
                                <Label htmlFor={`project-name-${project.id}`}>Project Name</Label>
                                <Input id={`project-name-${project.id}`} placeholder="Project Name" value={project.name} onChange={(e) => handleProjectChange(project.id, 'name', e.target.value)} />

                                <Label htmlFor={`project-desc-${project.id}`}>Description</Label>
                                <Textarea id={`project-desc-${project.id}`} className="min-h-[80px] mb-2" value={project.description} onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)} />

                                <Label htmlFor={`project-img-url-${project.id}`}>Image URL</Label>
                                <div className="flex gap-2">
                                    <Input id={`project-img-url-${project.id}`} placeholder="Image URL" value={parseImageUrlSrc(project.imageUrl)} onChange={(e) => handleProjectChange(project.id, 'imageUrl', e.target.value)} />
                                    <Button asChild variant="outline" size="icon">
                                        <Label htmlFor={`project-img-upload-${project.id}`} className="cursor-pointer">
                                            <Upload className="h-4 w-4"/>
                                            <span className="sr-only">Upload Project Image</span>
                                        </Label>
                                    </Button>
                                    <Input 
                                        type="file" 
                                        id={`project-img-upload-${project.id}`} 
                                        className="hidden" 
                                        accept="image/*" 
                                        onChange={(e) => handleFileChange(e, (dataUrl) => handleProjectChange(project.id, 'imageUrl', dataUrl))}
                                    />
                                </div>
                                
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
                    <CardTitle>Awards & Certifications</CardTitle>
                    <CardDescription>Highlight your accomplishments.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {portfolio.awards.map(award => (
                        <Card key={award.id} className="relative p-4">
                             <button onClick={() => removeItem('awards', award.id)} className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center hover:bg-destructive/80 transition-colors">
                                <Trash2 className="w-4 h-4"/>
                            </button>
                            <div className="space-y-2">
                                <Label htmlFor={`award-name-${award.id}`}>Award/Certification Name</Label>
                                <Input id={`award-name-${award.id}`} value={award.name} onChange={(e) => handleItemChange('awards', award.id, 'name', e.target.value)} />
                                <Label htmlFor={`award-issuer-${award.id}`}>Issuer</Label>
                                <Input id={`award-issuer-${award.id}`} value={award.issuer} onChange={(e) => handleItemChange('awards', award.id, 'issuer', e.target.value)} />
                                <Label htmlFor={`award-date-${award.id}`}>Date</Label>
                                <Input id={`award-date-${award.id}`} value={award.date} onChange={(e) => handleItemChange('awards', award.id, 'date', e.target.value)} />
                                <Label htmlFor={`award-desc-${award.id}`}>Description</Label>
                                <Textarea id={`award-desc-${award.id}`} className="min-h-[60px]" value={award.description} onChange={(e) => handleItemChange('awards', award.id, 'description', e.target.value)} />
                            </div>
                        </Card>
                    ))}
                    <Button variant="outline" onClick={addAward} className="w-full"><Plus className="h-4 w-4 mr-2" />Add Award</Button>
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
