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

const parseImageUrl = (url: string) => {
    if (typeof url !== 'string') return { src: 'https://placehold.co/128x128.png', hint: 'placeholder' };
    const parts = url.split('"');
    const src = parts[0];
    const hint = parts[1]?.includes('data-ai-hint=') ? parts[1].split('=')[1].replace(/"/g, '') : 'placeholder';
    return { src, hint };
}

export function PortfolioPreview({ portfolio }: PortfolioPreviewProps) {
    const { src: avatarSrc, hint: avatarHint } = parseImageUrl(portfolio.avatarUrl);

    return (
        <div className="font-body text-gray-800 bg-white">
            <header className="flex flex-col md:flex-row items-center gap-8 mb-12 text-center md:text-left p-8 bg-slate-50 rounded-lg">
                <Avatar className="w-32 h-32 text-6xl border-4 border-slate-200 shadow-md">
                    <AvatarImage src={avatarSrc} data-ai-hint={avatarHint} />
                    <AvatarFallback>{portfolio.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h1 className="text-4xl lg:text-5xl font-bold font-headline text-gray-900">{portfolio.name}</h1>
                    <p className="text-xl text-sky-600 font-medium mt-1">{portfolio.title}</p>
                </div>
            </header>
            
            <main className="p-4">
                <section className="mb-12">
                    <h2 className="text-2xl font-bold font-headline mb-4 border-b-2 border-sky-500 pb-2 text-gray-900">About Me</h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{portfolio.about}</p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold font-headline mb-4 border-b-2 border-sky-500 pb-2 text-gray-900">Skills</h2>
                    <div className="flex flex-wrap gap-3">
                        {portfolio.skills.map((skill, index) => (
                            <Badge key={index} variant="default" className="text-base py-1 px-4 rounded-full bg-slate-800 text-white hover:bg-slate-700">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-headline mb-8 border-b-2 border-sky-500 pb-2 text-gray-900">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {portfolio.projects.map(project => {
                            const { src: projectImgSrc, hint: projectImgHint } = parseImageUrl(project.imageUrl);
                            return (
                                <Card key={project.id} className="overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300 border">
                                    <div className="aspect-video relative overflow-hidden">
                                        <Image 
                                            src={projectImgSrc || 'https://placehold.co/400x300.png'} 
                                            alt={project.name} 
                                            layout="fill" 
                                            objectFit="cover" 
                                            data-ai-hint={projectImgHint}
                                            className="group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <CardHeader>
                                        <h3 className="text-xl font-bold font-headline text-gray-900">{project.name}</h3>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600 mb-4 min-h-[60px]">{project.description}</p>
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-sm font-semibold text-sky-600 hover:underline"
                                            >
                                                View Project &rarr;
                                            </a>
                                        )}
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </section>
                
                <Separator className="my-12 bg-gray-200" />
                
                <footer>
                    <h2 className="text-2xl font-bold font-headline mb-4 border-b-2 border-sky-500 pb-2 text-gray-900">Contact Me</h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-600">
                        {portfolio.contact.email && (
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-slate-500" />
                                <a href={`mailto:${portfolio.contact.email}`} className="hover:text-sky-600 transition-colors">{portfolio.contact.email}</a>
                            </div>
                        )}
                        {portfolio.contact.phone && (
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-slate-500" />
                                <span>{portfolio.contact.phone}</span>
                            </div>
                        )}
                        {portfolio.contact.linkedin && (
                            <div className="flex items-center gap-3">
                                <Linkedin className="w-5 h-5 text-slate-500" />
                                <a href={`https://${portfolio.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors">{portfolio.contact.linkedin}</a>
                            </div>
                        )}
                        {portfolio.contact.github && (
                            <div className="flex items-center gap-3">
                                <Github className="w-5 h-5 text-slate-500" />
                                <a href={`https://www.github.com/${portfolio.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-sky-600 transition-colors">{portfolio.contact.github}</a>
                            </div>
                        )}
                    </div>
                </footer>
            </main>
        </div>
    );
}
