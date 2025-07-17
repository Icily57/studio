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
  id: z.string().describe("A unique identifier for the project, e.g., '1'."),
  name: z.string().describe("The name of the sample project."),
  description: z.string().describe("A brief, one-sentence description of the project."),
  imageUrl: z.string().url().describe("A placeholder image URL for the project. Use 'https://placehold.co/400x300.png' and add a 'data-ai-hint' attribute with relevant keywords like 'software project' or 'design mockup'."),
  link: z.string().url().describe("A placeholder link for the project, should be '#'.")
});

const GeneratePortfolioOutputSchema = z.object({
  name: z.string().describe("A plausible, professional-sounding name for a person with the given title."),
  title: z.string().describe("The user's professional title, which should be the same as the input title."),
  avatarUrl: z.string().url().describe("A placeholder image URL for the avatar. Should be 'https://placehold.co/128x128.png' and include a 'data-ai-hint' attribute like 'professional portrait'."),
  about: z.string().describe("A compelling 'About Me' section, written in the first person, tailored to the professional title and keywords. Should be 2-3 sentences long."),
  skills: z.array(z.string()).describe("A list of 5-8 relevant technical or soft skills for the profession."),
  projects: z.array(ProjectSchema).describe("A list of exactly 2 relevant and impressive sample projects. The project details must be tailored to the profession."),
  contact: z.object({
    email: z.string().email().describe("A realistic placeholder email address."),
    phone: z.string().describe("A realistic placeholder phone number."),
    linkedin: z.string().describe("A realistic placeholder LinkedIn profile URL (e.g., 'linkedin.com/in/profilename')."),
    github: z.string().describe("A realistic placeholder GitHub profile URL (e.g., 'github.com/username')."),
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
  prompt: `You are an expert career coach and portfolio designer. Your task is to generate a complete, professional, and compelling portfolio JSON object for a user based on their professional title and keywords.

You must strictly adhere to the output JSON schema.
- Generate a full portfolio data structure.
- The content should be sophisticated and tailored to the user's profession.
- The name should be a common, professional-sounding name.
- The 'about' section should be a compelling, first-person summary.
- The skills list should be highly relevant to the job title.
- The projects list must contain exactly two realistic and impressive sample projects for someone in that role.
- For project image URLs, use 'https://placehold.co/400x300.png' and add a relevant 'data-ai-hint' attribute.
- For project links, use '#'.
- The contact information should be realistic placeholder data.
- For the avatar, use 'https://placehold.co/128x128.png' with a 'data-ai-hint="professional portrait"'.

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
    if (!output) {
      throw new Error("The AI model did not return a valid portfolio structure.");
    }
    
    // Add data-ai-hint attributes to image URLs if they are missing
    const finalOutput = {
      ...output,
      avatarUrl: output.avatarUrl.includes('data-ai-hint') ? output.avatarUrl : `${output.avatarUrl}" data-ai-hint="professional portrait"`,
      projects: output.projects.map(p => ({
        ...p,
        imageUrl: p.imageUrl.includes('data-ai-hint') ? p.imageUrl : `${p.imageUrl}" data-ai-hint="software project"`,
      })),
    };
    
    return finalOutput;
  }
);
