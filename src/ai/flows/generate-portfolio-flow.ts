'use server';
/**
 * @fileOverview An AI agent that generates a full portfolio based on a title and keywords.
 *
 * - generatePortfolio - A function that handles the portfolio generation process.
 * - GeneratePortfolioInput - The input type for the generatePortfolio function.
 * - GeneratePortfolioOutput - The return type for the generatePortfolio function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import type { PortfolioData } from '@/types';

const GeneratePortfolioInputSchema = z.object({
  title: z.string().describe('The professional title of the user.'),
  keywords: z.string().describe('A few keywords about the user\'s skills or interests.'),
});
export type GeneratePortfolioInput = z.infer<typeof GeneratePortfolioInputSchema>;

const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  link: z.string(),
});

const GeneratePortfolioOutputSchema = z.object({
  name: z.string().describe("A plausible name for a person with the given title."),
  title: z.string().describe("The user's professional title, same as the input."),
  avatarUrl: z.string().url().describe("A placeholder image URL for the avatar. Should be from placehold.co."),
  about: z.string().describe("A compelling 'About Me' section, written in the first person, tailored to the professional title and keywords. Should be 2-3 sentences long."),
  skills: z.array(z.string()).describe("A list of 5-8 relevant technical and soft skills for the profession."),
  projects: z.array(ProjectSchema).describe("A list of 2 relevant and impressive sample projects. The project names and descriptions should be tailored to the profession. Image URLs should be from placehold.co."),
  contact: z.object({
    email: z.string().email(),
    phone: z.string(),
    linkedin: z.string(),
    github: z.string(),
  }),
}) satisfies z.ZodType<PortfolioData>;

export type GeneratePortfolioOutput = z.infer<typeof GeneratePortfolioOutputSchema>;


export async function generatePortfolio(
  input: GeneratePortfolioInput
): Promise<GeneratePortfolioOutput> {
  return generatePortfolioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioPrompt',
  input: { schema: GeneratePortfolioInputSchema },
  output: { schema: GeneratePortfolioOutputSchema },
  prompt: `You are an expert career coach and portfolio designer. Your task is to generate a complete, professional, and compelling portfolio for a user based on their professional title and keywords.

Generate a full portfolio data structure. The content should be sophisticated and tailored to the user's profession.
- The name should be a common, professional-sounding name.
- The 'about' section should be a compelling, first-person summary.
- The skills should be highly relevant to the job title.
- The projects should be realistic and impressive for someone in that role. Use 'https://placehold.co/400x300.png' for project image URLs and '#' for links.
- The contact information should be placeholder data, but realistic (e.g., jane.doe@example.com, linkedin.com/in/janedoe).
- For the avatar, use 'https://placehold.co/128x128.png'.

User's Professional Title: {{{title}}}
User's Keywords: {{{keywords}}}
`,
});

const generatePortfolioFlow = ai.defineFlow(
  {
    name: 'generatePortfolioFlow',
    inputSchema: GeneratePortfolioInputSchema,
    outputSchema: GeneratePortfolioOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
