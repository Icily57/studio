// This is a new file
'use client';

import type { PortfolioData } from '@/types';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface PortfolioPreviewProps {
    portfolio: PortfolioData;
}

export function PortfolioPreview({ portfolio }: PortfolioPreviewProps) {
    return (
        <div className="font-body">
            <header className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <Avatar className="w-32 h-32 text-6xl">
                    <AvatarImage src={portfolio.avatarUrl} data-ai-hint="professional portrait" />
                    <AvatarFallback>{portfolio.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-4xl font-bold font-headline">{portfolio.name}</h1>
                    <p className="text-xl text-accent font-medium">{portfolio.title}</p>
                </div>
            </header>
            
            <main>
                <section className="mb-12">
                    <h2 className="text-3xl font-bold font-headline mb-4 border-b-2 border-primary pb-2">About Me</h2>
                    <p className="text-muted-foreground leading-relaxed">{portfolio.about}</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold font-headline mb-4 border-b-2 border-primary pb-2">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {portfolio.skills.map((skill, index) => (
                            <Badge key={index} variant="default" className="text-base py-1 px-4 rounded-full">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold font-headline mb-8 border-b-2 border-primary pb-2">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolio.projects.map(project => (
                        <Card key={project.id} className="overflow-hidden group">
                            <div className="aspect-video relative overflow-hidden">
                                <Image 
                                    src={project.imageUrl || 'https://placehold.co/400x300.png'} 
                                    alt={project.name} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    data-ai-hint="software project"
                                    className="group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader>
                                <h3 className="text-xl font-bold font-headline">{project.name}</h3>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4 min-h-[60px]">{project.description}</p>
                                {project.link && (
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-sm font-semibold text-accent hover:underline"
                                    >
                                        View Project &rarr;
                                    </a>
                                )}
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                </section>
                
                <Separator className="my-12" />
                
                <section>
                    <h2 className="text-3xl font-bold font-headline mb-4 border-b-2 border-primary pb-2">Contact Me</h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-muted-foreground">
                        {portfolio.contact.email && (
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <a href={`mailto:${portfolio.contact.email}`} className="hover:text-accent transition-colors">{portfolio.contact.email}</a>
                            </div>
                        )}
                        {portfolio.contact.phone && (
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <span>{portfolio.contact.phone}</span>
                            </div>
                        )}
                        {portfolio.contact.linkedin && (
                            <div className="flex items-center gap-3">
                                <Linkedin className="w-5 h-5 text-primary" />
                                <a href={`https://${portfolio.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{portfolio.contact.linkedin}</a>
                            </div>
                        )}
                        {portfolio.contact.github && (
                            <div className="flex items-center gap-3">
                                <Github className="w-5 h-5 text-primary" />
                                <a href={`https://${portfolio.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">{portfolio.contact.github}</a>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
