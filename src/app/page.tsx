import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Download, FileEdit, Palette } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <Logo />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" asChild>
            <Link
              href="/dashboard"
            >
              Dashboard
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-background z-0"></div>
          <div className="container px-4 md:px-6 z-10 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
              <div className="flex flex-col justify-center space-y-4 text-primary-foreground">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-background">
                    Craft Your Professional Story with FolioForge
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">
                    Build, refine, and export beautiful portfolios with the power of AI. From developers to designers, make your first impression count.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link
                      href="/dashboard"
                    >
                      Get Started Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="w-full max-w-md mx-auto">
                <Card className="shadow-2xl rounded-lg overflow-hidden border-4 border-background/20">
                    <CardHeader>
                        <CardTitle className="font-headline text-lg">Alex Doe</CardTitle>
                        <p className="text-sm text-accent">Full-Stack Developer</p>
                    </CardHeader>
                    <CardContent>
                        <img
                            src="https://placehold.co/400x250.png"
                            width="400"
                            height="250"
                            alt="Sample Project"
                            data-ai-hint="portfolio project"
                            className="w-full rounded-md object-cover"
                         />
                         <p className="text-sm text-muted-foreground mt-4">A showcase of a recent project, highlighting design and development skills.</p>
                    </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium">
                  Core Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
                  Everything You Need to Shine
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  FolioForge provides a complete toolkit to create and manage your professional portfolio, ensuring you stand out from the crowd.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <div className="grid gap-2 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      <Bot className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">AI Portfolio Advisor</h3>
                  <p className="text-sm text-muted-foreground">
                    Get AI-powered suggestions to improve content, fill in gaps, and make your portfolio more compelling.
                  </p>
              </div>
              <div className="grid gap-2 text-center">
                   <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      <FileEdit className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">Intuitive Editor</h3>
                  <p className="text-sm text-muted-foreground">
                    Easily edit your portfolio content with a simple and powerful form-based editor.
                  </p>
              </div>
              <div className="grid gap-2 text-center">
                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                      <Download className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold font-headline">Multiple Export Formats</h3>
                  <p className="text-sm text-muted-foreground">
                    Download your portfolio as a PDF or image file to share it anywhere.
                  </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} FolioForge. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
