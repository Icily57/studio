// This is a new file
'use client';

import * as React from 'react';
import type { PortfolioData } from '@/types';
import Image from 'next/image';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Mail, Phone, Linkedin, Github, Award, Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

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

const fontClasses = {
    inter: 'font-inter',
    space: 'font-space',
    serif: 'font-serif',
    system: 'font-sans'
}

const headlineFontClasses = {
    inter: 'font-inter',
    space: 'font-space',
    serif: 'font-playfair',
    system: 'font-sans'
}

const Section = ({ title, className, children, ...props }: { title: string, className?: string, children: React.ReactNode }) => {
    const { font, themeColor } = usePortfolioContext();
    const headlineFontClass = headlineFontClasses[font] || 'font-sans';

    return (
        <section className={cn("mb-10", className)} {...props}>
            <h2 
                className={cn("text-2xl font-bold mb-4 pb-2 text-gray-900 border-b-2", headlineFontClass)} 
                style={{ borderColor: themeColor }}
            >
                {title}
            </h2>
            {children}
        </section>
    );
}

const ContactInfo = () => {
    const { portfolio, themeColor } = usePortfolioContext();
    return (
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-gray-600">
            {portfolio.contact.email && (
                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5" style={{ color: themeColor }} />
                    <a href={`mailto:${portfolio.contact.email}`} className="hover:underline break-all" style={{ color: themeColor }}>{portfolio.contact.email}</a>
                </div>
            )}
            {portfolio.contact.phone && (
                <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5" style={{ color: themeColor }} />
                    <span className="text-gray-800">{portfolio.contact.phone}</span>
                </div>
            )}
            {portfolio.contact.linkedin && (
                <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" style={{ color: themeColor }} />
                    <a href={`https://${portfolio.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline break-all" style={{ color: themeColor }}>{portfolio.contact.linkedin}</a>
                </div>
            )}
            {portfolio.contact.github && (
                <div className="flex items-center gap-3">
                    <Github className="w-5 h-5" style={{ color: themeColor }} />
                    <a href={`https://www.github.com/${portfolio.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline break-all" style={{ color: themeColor }}>{portfolio.contact.github}</a>
                </div>
            )}
        </div>
    )
}

const AboutSection = () => {
    const { portfolio } = usePortfolioContext();
    return <p className="text-gray-600 leading-relaxed whitespace-pre-line">{portfolio.about}</p>
}

const SkillsSection = () => {
    const { portfolio, themeColor } = usePortfolioContext();
    return (
         <div className="flex flex-wrap gap-3">
            {portfolio.skills.map((skill, index) => (
                <Badge key={index} variant="default" className="text-base py-1 px-4 rounded-full text-white" style={{ backgroundColor: themeColor }}>
                    {skill}
                </Badge>
            ))}
        </div>
    )
}

const ExperienceSection = () => {
    const { portfolio, font } = usePortfolioContext();
    const headlineFontClass = headlineFontClasses[font] || 'font-sans';
    return (
        <div className="space-y-6 relative pl-5 border-l-2 border-gray-200">
            {portfolio.experience.map(exp => (
                <div key={exp.id} className="relative">
                     <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-gray-400"></div>
                     <p className="font-semibold text-gray-500 text-sm">{exp.date}</p>
                     <h3 className={cn("text-lg font-bold text-gray-900 mt-1", headlineFontClass)}>{exp.title}</h3>
                     <h4 className="font-semibold text-gray-700">{exp.company}</h4>
                     <p className="text-gray-600 mt-2 whitespace-pre-line">{exp.description}</p>
                </div>
            ))}
        </div>
    )
}

const EducationSection = () => {
    const { portfolio, font } = usePortfolioContext();
    const headlineFontClass = headlineFontClasses[font] || 'font-sans';
    return (
        <div className="space-y-6 relative pl-5 border-l-2 border-gray-200">
            {portfolio.education.map(edu => (
                <div key={edu.id} className="relative">
                    <div className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-gray-400"></div>
                    <p className="font-semibold text-gray-500 text-sm">{edu.date}</p>
                    <h3 className={cn("text-lg font-bold text-gray-900 mt-1", headlineFontClass)}>{edu.degree}</h3>
                    <h4 className="font-semibold text-gray-700">{edu.institution}</h4>
                    <p className="text-gray-600 mt-2 whitespace-pre-line">{edu.description}</p>
                </div>
            ))}
        </div>
    )
}

const AwardsSection = () => {
    const { portfolio, font } = usePortfolioContext();
    const headlineFontClass = headlineFontClasses[font] || 'font-sans';
    return (
        <div className="space-y-6">
            {portfolio.awards.map(award => (
                <div key={award.id}>
                    <h3 className={cn("text-lg font-bold text-gray-900", headlineFontClass)}>{award.name}</h3>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-700">{award.issuer}</p>
                      <span className="text-gray-500">•</span>
                      <p className="text-gray-500">{award.date}</p>
                    </div>
                    <p className="text-gray-600 mt-1 whitespace-pre-line">{award.description}</p>
                </div>
            ))}
        </div>
    )
}


const ProjectsSection = () => {
    const { portfolio, themeColor, font } = usePortfolioContext();
    const headlineFontClass = headlineFontClasses[font] || 'font-sans';
    return (
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
                            <h3 className={cn("text-xl font-bold text-gray-900", headlineFontClass)}>{project.name}</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 mb-4 min-h-[60px]">{project.description}</p>
                            {project.link && project.link !== '#' && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold hover:underline"
                                    style={{ color: themeColor }}
                                >
                                    View Project &rarr;
                                </a>
                            )}
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}

const ClassicTopLayout = () => {
    const { portfolio, themeColor, font } = usePortfolioContext();
    const headlineFontClass = headlineFontClasses[font] || 'font-sans';
    const { src: avatarSrc, hint: avatarHint } = parseImageUrl(portfolio.avatarUrl);
    
    return (
         <>
            <header className="flex flex-col md:flex-row items-center gap-8 mb-12 text-center md:text-left p-8 rounded-lg bg-[var(--theme-color-light)]">
                <Avatar className="w-32 h-32 text-6xl border-4 border-white shadow-md">
                    <AvatarImage src={avatarSrc} data-ai-hint={avatarHint} />
                    <AvatarFallback style={{ backgroundColor: themeColor }} className="text-white">{portfolio.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h1 className={cn("text-4xl lg:text-5xl font-bold text-gray-900", headlineFontClass)}>{portfolio.name}</h1>
                    <p className="text-xl font-medium mt-1" style={{ color: themeColor }}>{portfolio.title}</p>
                </div>
            </header>
            
            <main className="p-4 grid md:grid-cols-[1fr_2fr] gap-12">
                <aside>
                    <Section title="Contact"><ContactInfo /></Section>
                    {portfolio.skills.length > 0 && <Section title="Skills"><SkillsSection /></Section>}
                </aside>
                <main>
                    <Section title="About Me"><AboutSection /></Section>
                    {portfolio.experience.length > 0 && <Section title="Experience"><ExperienceSection /></Section>}
                    {portfolio.education.length > 0 && <Section title="Education"><EducationSection /></Section>}
                    {portfolio.projects.length > 0 && <Section title="Projects"><ProjectsSection /></Section>}
                    {portfolio.awards.length > 0 && <Section title="Awards"><AwardsSection /></Section>}
                </main>
            </main>
        </>
    )
}

const ModernLeftLayout = () => {
    const { portfolio, themeColor, font } = usePortfolioContext();
    const headlineFontClass = headlineFontClasses[font] || 'font-sans';
    const { src: avatarSrc, hint: avatarHint } = parseImageUrl(portfolio.avatarUrl);
    return (
        <div className="grid md:grid-cols-[300px_1fr] gap-12">
            <aside className="md:border-r md:pr-8 border-gray-200">
                <div className="flex flex-col items-center text-center">
                    <Avatar className="w-40 h-40 text-6xl border-4 shadow-md mb-4" style={{borderColor: themeColor}}>
                        <AvatarImage src={avatarSrc} data-ai-hint={avatarHint} />
                        <AvatarFallback style={{ backgroundColor: themeColor }} className="text-white">{portfolio.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h1 className={cn("text-3xl font-bold text-gray-900", headlineFontClass)}>{portfolio.name}</h1>
                    <p className="text-lg font-medium mt-1" style={{ color: themeColor }}>{portfolio.title}</p>
                </div>
                <Separator className="my-8 bg-gray-200" />
                <div>
                     <Section title="Contact"><ContactInfo /></Section>
                     {portfolio.skills.length > 0 && <Section title="Skills"><SkillsSection /></Section>}
                     {portfolio.education.length > 0 && <Section title="Education"><EducationSection /></Section>}
                     {portfolio.awards.length > 0 && <Section title="Awards"><AwardsSection /></Section>}
                </div>
            </aside>
             <main>
                <Section title="About Me"><AboutSection /></Section>
                {portfolio.experience.length > 0 && <Section title="Experience"><ExperienceSection /></Section>}
                {portfolio.projects.length > 0 && <Section title="Projects"><ProjectsSection /></Section>}
            </main>
        </div>
    )
}

const CenteredMinimalLayout = () => {
    const { portfolio, themeColor, font } = usePortfolioContext();
    const headlineFontClass = headlineFontClasses[font] || 'font-sans';
    const { src: avatarSrc, hint: avatarHint } = parseImageUrl(portfolio.avatarUrl);

    return (
        <div className="max-w-4xl mx-auto text-center">
             <header className="flex flex-col items-center gap-4 mb-12 text-center">
                <Avatar className="w-32 h-32 text-6xl border-4 border-white shadow-md">
                    <AvatarImage src={avatarSrc} data-ai-hint={avatarHint} />
                    <AvatarFallback style={{ backgroundColor: themeColor }} className="text-white">{portfolio.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <h1 className={cn("text-4xl lg:text-5xl font-bold text-gray-900", headlineFontClass)}>{portfolio.name}</h1>
                    <p className="text-xl font-medium mt-1" style={{ color: themeColor }}>{portfolio.title}</p>
                </div>
            </header>
             <main>
                <Section title="About Me" className="text-left"><AboutSection /></Section>
                {portfolio.experience.length > 0 && <Section title="Experience" className="text-left"><ExperienceSection /></Section>}
                {portfolio.projects.length > 0 && <Section title="Projects"><ProjectsSection /></Section>}
                <Separator className="my-12 bg-gray-200" />
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  {portfolio.education.length > 0 && <Section title="Education"><EducationSection /></Section>}
                  {portfolio.skills.length > 0 && <Section title="Skills"><SkillsSection /></Section>}
                </div>
                 {portfolio.awards.length > 0 && <Section title="Awards" className="text-left"><AwardsSection /></Section>}
                 <Separator className="my-12 bg-gray-200" />
                <Section title="Contact Me"><ContactInfo /></Section>
            </main>
        </div>
    )
}


const PortfolioContext = React.createContext<{
    portfolio: PortfolioData;
    themeColor: string;
    font: PortfolioData['design']['font'];
} | null>(null);

const usePortfolioContext = () => {
    const context = React.useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolioContext must be used within a PortfolioProvider');
    }
    return context;
};

export function PortfolioPreview({ portfolio }: PortfolioPreviewProps) {
    const themeColor = portfolio.design.themeColor || '#0ea5e9';
    const fontClass = fontClasses[portfolio.design.font] || 'font-sans';
    
    const dynamicStyles = {
        '--theme-color': themeColor,
        '--theme-color-light': `${themeColor}1a`,
    } as React.CSSProperties;

    const contextValue = {
        portfolio,
        themeColor,
        font: portfolio.design.font,
    };
    
    const renderLayout = () => {
        switch (portfolio.design.layout) {
            case 'modern-left':
                return <ModernLeftLayout />;
            case 'centered-minimal':
                return <CenteredMinimalLayout />;
            case 'classic-top':
            default:
                return <ClassicTopLayout />;
        }
    }

    return (
        <PortfolioContext.Provider value={contextValue}>
            <div 
              className={cn("text-gray-800 bg-white p-2", fontClass)}
              style={dynamicStyles}
            >
              {renderLayout()}
            </div>
        </PortfolioContext.Provider>
    );
}
