'use server';
/**
 * @fileOverview An AI agent that provides advice on portfolio content.
 *
 * - analyzePortfolio - A function that handles the portfolio analysis process.
 * - AnalyzePortfolioInput - The input type for the analyzePortfolio function.
 * - AnalyzePortfolioOutput - The return type for the analyzePortfolio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzePortfolioInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The content of the portfolio to be analyzed.'),
});
export type AnalyzePortfolioInput = z.infer<typeof AnalyzePortfolioInputSchema>;

const AnalyzePortfolioOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('Suggestions for improving the portfolio content.'),
  missingInformation: z
    .string()
    .describe('A summary of what information might be missing from the portfolio.'),
  tips: z
    .string()
    .describe('General tips and tricks for making the portfolio stand out.'),
});
export type AnalyzePortfolioOutput = z.infer<typeof AnalyzePortfolioOutputSchema>;


export async function analyzePortfolio(input: AnalyzePortfolioInput): Promise<AnalyzePortfolioOutput> {
  return analyzePortfolioFlow(input);
}

const prompt = ai.definePrompt({
    name: 'portfolioAdvisorPrompt',
    input: { schema: AnalyzePortfolioInputSchema },
    output: { schema: AnalyzePortfolioOutputSchema },
    prompt: `You are an expert career coach and portfolio advisor. Analyze the following portfolio content and provide actionable feedback.

Your feedback should be broken down into three sections:
1.  **Suggestions:** Specific, actionable advice to improve the existing content. Be constructive and encouraging.
2.  **Missing Information:** Point out what key information is missing that would make the portfolio stronger (e.g., project links, specific metrics, contact info).
3.  **Tips & Tricks:** General expert tips for creating a job-winning portfolio.

Here is the portfolio content:
---
{{{portfolioContent}}}
---

Please provide your analysis in a valid JSON format.`,
});

const analyzePortfolioFlow = ai.defineFlow(
  {
    name: 'analyzePortfolioFlow',
    inputSchema: AnalyzePortfolioInputSchema,
    outputSchema: AnalyzePortfolioOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('AI analysis failed to generate a response.');
    }
    return output;
  }
);
