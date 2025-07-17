// This is a new file
'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { generatePortfolio } from '@/lib/actions';
import type { PortfolioData } from '@/types';
import { Loader2, Sparkles } from 'lucide-react';

interface AiGeneratorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGenerate: (data: PortfolioData) => void;
}

export function AiGeneratorDialog({ open, onOpenChange, onGenerate }: AiGeneratorDialogProps) {
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!title) {
        toast({ title: "Title is required", description: "Please enter your professional title.", variant: "destructive"});
        return;
    }

    setIsLoading(true);
    try {
      const result = await generatePortfolio({ title, keywords });
      if (result.success && result.data) {
        onGenerate(result.data);
      } else {
        toast({
          title: 'Generation Failed',
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
            <Sparkles className="h-6 w-6 text-accent" />
            Create with AI
          </DialogTitle>
          <DialogDescription>
            Describe your role and let AI craft a professional portfolio for you in seconds.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
            <div className="space-y-2">
                <Label htmlFor="title">Your Professional Title</Label>
                <Input 
                    id="title" 
                    placeholder="e.g., Senior Product Manager" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="keywords">Keywords (Optional)</Label>
                <Input 
                    id="keywords" 
                    placeholder="e.g., Fintech, B2B, Agile"
                    value={keywords} 
                    onChange={(e) => setKeywords(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">Add a few comma-separated keywords to help the AI.</p>
            </div>
        </div>
        <DialogFooter>
          <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4" />
            )}
            {isLoading ? 'Generating...' : 'Generate Portfolio'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
