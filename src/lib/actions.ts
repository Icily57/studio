'use server';

import { analyzePortfolio as analyzePortfolioFlow, AnalyzePortfolioInput, AnalyzePortfolioOutput } from '@/ai/flows/portfolio-advisor';
import { importPortfolio as importPortfolioFlow, ImportPortfolioInput, ImportPortfolioOutput } from '@/ai/flows/import-portfolio-flow';


interface ActionResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export async function analyzePortfolio(input: AnalyzePortfolioInput): Promise<ActionResult<AnalyzePortfolioOutput>> {
  try {
    const result = await analyzePortfolioFlow(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error analyzing portfolio:", error);
    // In a real app, you'd want more specific error handling
    return { success: false, error: "An error occurred while analyzing the portfolio. Please try again." };
  }
}

export async function importPortfolio(input: ImportPortfolioInput): Promise<ActionResult<ImportPortfolioOutput>> {
  try {
    const result = await importPortfolioFlow(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error importing portfolio:", error);
    return { success: false, error: "An error occurred while importing the portfolio. The AI may have been unable to read the file." };
  }
}
