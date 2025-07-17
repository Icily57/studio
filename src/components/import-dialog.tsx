'use client';

import { useState, type ChangeEvent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { UploadCloud, FileUp, Loader2, CheckCircle } from 'lucide-react';
import { importPortfolio } from '@/lib/actions';
import type { PortfolioData } from '@/types';

interface ImportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onImportComplete: (data: PortfolioData) => void;
}

export function ImportDialog({ open, onOpenChange, onImportComplete }: ImportDialogProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // 20MB limit for uploads
      if (selectedFile.size > 20 * 1024 * 1024) {
        toast({
          title: 'File Too Large',
          description: 'Please upload a file smaller than 20MB.',
          variant: 'destructive',
        });
        return;
      }
      setFile(selectedFile);
    }
  };
  
  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
     if (droppedFile) {
      if (droppedFile.size > 20 * 1024 * 1024) {
        toast({
          title: 'File Too Large',
          description: 'Please upload a file smaller than 20MB.',
          variant: 'destructive',
        });
        return;
      }
      setFile(droppedFile);
    }
  }

  const handleImport = async () => {
    if (!file) {
      toast({
        title: 'No File Selected',
        description: 'Please select a file to import.',
        variant: 'destructive',
      });
      return;
    }

    setIsImporting(true);
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (loadEvent) => {
      const fileDataUri = loadEvent.target?.result as string;
      if (!fileDataUri) {
        toast({ title: 'Error Reading File', description: 'Could not read the selected file.', variant: 'destructive' });
        setIsImporting(false);
        return;
      }

      try {
        const result = await importPortfolio({ fileDataUri });
        if (result.success && result.data) {
          onImportComplete(result.data);
          toast({
            title: 'Import Successful!',
            description: 'Your portfolio has been populated with the imported data.',
          });
          onOpenChange(false);
          setFile(null);
        } else {
           toast({
            title: 'Import Failed',
            description: result.error || 'The AI could not extract data from the file.',
            variant: 'destructive',
          });
        }
      } catch (error) {
         toast({
          title: 'An Unexpected Error Occurred',
          description: 'Could not connect to the AI service. Please try again.',
          variant: 'destructive',
        });
      } finally {
        setIsImporting(false);
      }
    };
    reader.onerror = () => {
        toast({ title: 'Error Reading File', description: 'There was an error processing your file.', variant: 'destructive' });
        setIsImporting(false);
    }
  };
  
  const closeDialog = (isOpen: boolean) => {
    if (isImporting) return;
    onOpenChange(isOpen);
  }

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">Import Portfolio</DialogTitle>
          <DialogDescription>
            Upload a PDF, DOC, PNG, or JPG file of your existing portfolio, and our AI will attempt to extract the information.
          </DialogDescription>
        </DialogHeader>
        <div 
          className="mt-4 p-8 border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center text-center bg-secondary/30"
          onDrop={handleFileDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {file ? (
              <div className="flex flex-col items-center gap-2">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                  <p className="font-semibold text-foreground">{file.name}</p>
                  <p className="text-sm text-muted-foreground">{Math.round(file.size / 1024)} KB</p>
                  <Button variant="link" size="sm" onClick={() => setFile(null)}>Choose a different file</Button>
              </div>
          ) : (
            <>
              <UploadCloud className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="font-semibold text-foreground mb-2">Drag & drop your file here</p>
              <p className="text-sm text-muted-foreground mb-4">or</p>
              <Button asChild variant="outline">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FileUp className="mr-2 h-4 w-4"/>
                  Browse File
                </label>
              </Button>
              <input id="file-upload" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"/>
            </>
          )}
        </div>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isImporting}>
            Cancel
          </Button>
          <Button onClick={handleImport} disabled={!file || isImporting}>
            {isImporting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isImporting ? 'Importing...' : 'Import'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
