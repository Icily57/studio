// use server'
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
    .describe('Information that is missing from the portfolio.'),
  tips: z.string().describe('Tips to make the portfolio more compelling.'),
});
export type AnalyzePortfolioOutput = z.infer<typeof AnalyzePortfolioOutputSchema>;

export async function analyzePortfolio(
  input: AnalyzePortfolioInput
): Promise<AnalyzePortfolioOutput> {
  return analyzePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzePortfolioPrompt',
  input: {schema: AnalyzePortfolioInputSchema},
  output: {schema: AnalyzePortfolioOutputSchema},
  prompt: `You are an AI portfolio advisor. Review the portfolio content provided and provide suggestions for improvement, identify any missing information, and offer tips to make the portfolio more compelling.

Portfolio Content:
{{{portfolioContent}}}`,
});

const analyzePortfolioFlow = ai.defineFlow(
  {
    name: 'analyzePortfolioFlow',
    inputSchema: AnalyzePortfolioInputSchema,
    outputSchema: AnalyzePortfolioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
