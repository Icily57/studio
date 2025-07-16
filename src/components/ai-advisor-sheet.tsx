'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { analyzePortfolio } from '@/lib/actions';
import type { AnalyzePortfolioOutput } from '@/ai/flows/portfolio-advisor';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Lightbulb, PackageCheck, AlertTriangle, Loader2 } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface AiAdvisorSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  portfolioContent: string;
}

export function AiAdvisorSheet({ open, onOpenChange, portfolioContent }: AiAdvisorSheetProps) {
  const [analysis, setAnalysis] = useState<AnalyzePortfolioOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleAnalyze = async () => {
    setIsLoading(true);
    setAnalysis(null);
    try {
      const result = await analyzePortfolio({ portfolioContent });
      if (result.success && result.data) {
        setAnalysis(result.data);
      } else {
        toast({
          title: 'Analysis Failed',
          description: result.error || 'An unknown error occurred.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Could not connect to the AI service.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl">
        <SheetHeader className="px-2">
          <SheetTitle className="font-headline text-2xl">AI Portfolio Advisor</SheetTitle>
          <SheetDescription>
            Get instant feedback on your portfolio. Our AI will analyze your content and provide actionable tips.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[calc(100%-8rem)] p-2">
          <div className="py-4">
            <h3 className="text-sm font-semibold mb-2 text-muted-foreground">CURRENT PORTFOLIO CONTENT</h3>
            <Textarea
              readOnly
              value={portfolioContent}
              className="min-h-[150px] bg-muted/50 text-sm"
              placeholder="Your portfolio content will be displayed here."
            />
          </div>
          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="ml-4">Analyzing your portfolio...</p>
            </div>
          )}
          {analysis && (
            <div className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <PackageCheck className="h-6 w-6 text-green-500" />
                  <CardTitle className="text-lg font-headline">Suggestions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{analysis.suggestions}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <AlertTriangle className="h-6 w-6 text-amber-500" />
                  <CardTitle className="text-lg font-headline">Missing Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{analysis.missingInformation}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <Lightbulb className="h-6 w-6 text-blue-500" />
                  <CardTitle className="text-lg font-headline">Tips & Tricks</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{analysis.tips}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </ScrollArea>
        <SheetFooter className="absolute bottom-0 right-0 left-0 p-4 bg-background border-t">
          <Button onClick={handleAnalyze} disabled={isLoading} className="w-full">
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? 'Analyzing...' : 'Analyze My Portfolio'}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
