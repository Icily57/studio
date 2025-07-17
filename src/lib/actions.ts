'use server';

import { analyzePortfolio as analyzePortfolioFlow, AnalyzePortfolioInput, AnalyzePortfolioOutput } from '@/ai/flows/portfolio-advisor';

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
