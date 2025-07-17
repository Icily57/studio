'use server';

import { analyzePortfolio as analyzePortfolioFlow, AnalyzePortfolioInput, AnalyzePortfolioOutput } from '@/ai/flows/portfolio-advisor';
import { generatePortfolio as generatePortfolioFlow, GeneratePortfolioInput, GeneratePortfolioOutput } from '@/ai/flows/generate-portfolio-flow';

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

export async function generatePortfolio(input: GeneratePortfolioInput): Promise<ActionResult<GeneratePortfolioOutput>> {
  try {
    const result = await generatePortfolioFlow(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error generating portfolio:", error);
    return { success: false, error: "An error occurred while generating the portfolio. Please try again." };
  }
}
