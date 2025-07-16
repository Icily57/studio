import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Download, Palette, Upload } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <Logo />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Craft Your Professional Story with FolioForge
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Build, refine, and export beautiful portfolios with the power of AI. From developers to designers, make your first impression count.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link
                      href="/dashboard"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <img
                src="https://placehold.co/600x600.png"
                width="600"
                height="600"
                alt="Hero"
                data-ai-hint="portfolio resume"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
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
              <div className="grid gap-2 text-center p-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">AI Portfolio Advisor</h3>
                <p className="text-sm text-muted-foreground">
                  Get AI-powered suggestions to improve content, fill in gaps, and make your portfolio more compelling.
                </p>
              </div>
              <div className="grid gap-2 text-center p-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">Multiple Export Formats</h3>
                <p className="text-sm text-muted-foreground">
                  Download your portfolio as a PDF, DOC, or image file (JPG, PNG) to share it anywhere.
                </p>
              </div>
              <div className="grid gap-2 text-center p-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-headline">Import & Edit</h3>
                <p className="text-sm text-muted-foreground">
                  Import an existing portfolio to edit and enhance it using our powerful builder tools.
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
